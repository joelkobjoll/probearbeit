<template>
	<b-container>
		<h1 class="h1">Movies</h1>
		<b-alert :show="loading" variant="info">Loading...</b-alert>

		<div class="bv-example-row">
			<b-row>
				<b-col cols="4">
					<b-form @submit.prevent="createMovie">
						<b-form-group label="Name:">
							<b-form-input type="text" v-model="form.title" required placeholder="Enter title" />
						</b-form-group>

						<b-form-group label="Description:">
							<b-form-textarea v-model="form.description" required placeholder="Enter description" rows="3" max-rows="6" />
						</b-form-group>

						<b-form-group label="Genre:">
                            <b-form-select v-model="form.genreId" :options="genries" />
						</b-form-group>

						<b-button type="submit" variant="primary">Add new movie</b-button>
					</b-form>
				</b-col>

				<b-col cols="8">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Created At</th>
								<th>Updated At</th>
								<th>&nbsp;</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="movie in movies" :key="movie.id">
								<td>{{ movie.id }}</td>
								<td>{{ movie.title }}</td>
								<td>{{ movie.createdAt }}</td>
								<td>{{ movie.updatedAt }}</td>
								<td class="text-right">
									<b-button size="sm" :to="`/admin/movies/${movie.id}`">Edit</b-button>
								</td>
								<td class="text-right">
									<b-button size="sm" variant="danger" @click.prevent="deleteMovie(movie.id)">Delete</b-button>
								</td>
							</tr>
						</tbody>
					</table>
				</b-col>
			</b-row>
		</div>
	</b-container>
</template>

<script>
	import {Movies} from '@/controller/movies';
	import {Genries} from '@/controller/genries';
	export default {
		data() {
			return {
				loading: false,
                movies: [],
                genries: [],
				model: {},
				form: {
                    title: '',
                    description: '',
                    genreId: null,
				},
			};
		},
		async created() {
			this.refreshMovies();
			this.refreshGenries();
		},
		methods: {
			createMovie() {
				Movies.createMovie(this.form)
					.then(() => {
						this.form.title = '';
						this.form.description = '';
						this.refreshMovies();
					});
			},
			async refreshMovies() {
				this.loading = true;
				this.movies = await Movies.getMovies();
				this.loading = false;
			},
			async refreshGenries() {
				this.loading = true;
				this.genries = (await Genries.getGenries()).reduce((acc, genre) => {
                    acc.push({
                        value: genre.id,
                        text: genre.name,
                    });
                    return acc;
                }, [ { value: null, text: 'Please select a genre' } ]);
				this.loading = false;
			},
			async deleteMovie(id) {
				if (confirm('Are you sure you want to delete this movie?')) {
					if (this.model.id === id) {
						this.model = {};
					}
					await Movies.deleteMovie(id);
					await this.refreshMovies();
				}
			},
		},
	};
</script>
