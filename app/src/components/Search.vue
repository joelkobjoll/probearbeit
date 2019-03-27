<template>
	<div class="container-fluid mt-4">
		<h1 class="h1">Search</h1>

		<div id="search-form">
			<b-nav-form class="mb-5">
				<b-form @submit.prevent="searchMovie">
					<b-form-input id="search" v-model="q" size="sm" class="mr-sm-2" type="text" placeholder="Search" />
					<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
				</b-form>
			</b-nav-form>

			<b-popover
			target="search"
			disabled="true"
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
					q: '',
					results: [],
					show: false,
				},
				q: '',
				results: [],
				loading: false,
			}
		},
		methods: {
			async searchMovie(q) {
				this.results = await Movies.searchMovie(q || this.q);
				this.autocomplete.results = [];
				this.autocomplete.show = false;
			}
		},
		watch: {
			async q() {
				if (2 < this.q.length) {
					this.autocomplete.results = await Movies.getMoviesByTitle(this.q);
					this.autocomplete.show = this.autocomplete.results.length ? true : false;
				}
			}
		}
	};
</script>
