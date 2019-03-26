<template>
	<div class="container-fluid mt-4">
		<h1 class="h1">Search</h1>

		<b-nav-form class="mb-5">
			<b-form @submit.prevent="searchMovie">
				<b-form-input id="search" v-model="q" size="sm" class="mr-sm-2" type="text" placeholder="Search" />
				<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
			</b-form>
		</b-nav-form>

		<b-alert :show="loading" variant="info">Loading...</b-alert>

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
	</div>
</template>

<script>
	import {Movies} from '@/controller/movies';
	export default {
		data() {
			return {
				q: '',
				results: [],
				loading: false,
			}
		},
		methods: {
			async searchMovie() {
				this.results = await Movies.searchMovie(this.q);
			}
		},
	};
</script>
