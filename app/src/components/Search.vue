<template>
	<div class="container-fluid mt-4">
		<h1 class="h1">Search</h1>

		<div>
			<b-nav-form class="mb-5">
				<b-form @submit.prevent="searchMovie(q)">
					<span id="search-input">
						<b-form-input id="search" v-model="q" size="sm" class="mr-sm-2" type="text" placeholder="Search" />
					</span>
					<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
				</b-form>
			</b-nav-form>

			<b-popover
			target="search-input"
			:show.sync="autocomplete.show"
			placement="bottom"
			ref="popover"
			>
				<b-list-group>
					<b-list-group-item @click="searchMovie(result.title.toLowerCase())" v-for="result in autocomplete.results" :key="result.id">{{ result.title }}</b-list-group-item>
				</b-list-group>
			</b-popover>
		</div>

		<template v-if="loading">
			<b-alert variant="info">Loading...</b-alert>
		</template>
		<template v-else>
			<table class="table table-striped" v-if="results.length">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="movie in results" :key="movie.id">
						<td>{{ movie.id }}</td>
						<td>{{ movie.title }}</td>
						<td class="text-right">
							<router-link size="sm" :to="`/movie/${movie.id}`">View</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</template>
	</div>
</template>

<script>
	import {
		Movies
	} from '@/controller/movies';
	export default {
		data() {
			return {
				autocomplete: {
					results: [],
					show: false,
					disabled: false,
				},
				q: this.$route.query.q || '',
				results: [],
				loading: false,
			}
		},
		created() {
			if (this.q.length) {
				this.searchMovie(this.q);
			}
		},
		methods: {
			async searchMovie(query) {
				this.autocomplete.disabled = true;
				this.q = query;
				this.$router.replace({ query: {q: query} });
				this.results = await Movies.searchMovie(query);
				this.autocomplete.show = false;
				this.autocomplete.results = [];
				this.autocomplete.disabled = false;
			}
		},
		watch: {
			async q() {
				if (2 < this.q.length && !this.autocomplete.disabled) {
					this.autocomplete.results = await Movies.getMoviesByTitle(this.q);
					this.autocomplete.show = this.autocomplete.results.length ? true : false;
				}
			}
		}
	};
</script>
