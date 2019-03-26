<template>
	<b-container>
		<h1 class="h1">Edit Movie</h1>
		<b-alert :show="loading" variant="info">Loading...</b-alert>

		<div class="bv-example-row">
			<b-row>
				<b-col cols="12">
					<b-form @submit.prevent="updateMovie">
						<b-form-group label="Name:">
							<b-form-input type="text" v-model="movie.title" required placeholder="Enter name" />
						</b-form-group>

                        <b-form-group label="Description:">
							<b-form-textarea v-model="movie.description" required placeholder="Enter description" rows="3" max-rows="6" />
						</b-form-group>

						<b-form-group label="Genre:">
                            <b-form-select v-model="movie.genreId" :options="genries"/>
						</b-form-group>

						<b-button type="submit" variant="primary">Save changes</b-button>
					</b-form>
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
				model: {},
                movie: {},
                genries: {},
			};
		},
		async created() {
            this.refreshMovie();
            this.refreshGenries();
		},
		methods: {
			async refreshMovie() {
				this.loading = true;
				this.movie = await Movies.getMovie(this.$route.params.id);
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
            async updateMovie() {
                this.loading = true;
                await Movies.updateMovie(this.movie.id, this.movie);
                this.loading = false;
            }
		},
	};
</script>
