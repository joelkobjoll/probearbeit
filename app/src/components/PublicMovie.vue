<template>
	<b-container>
        <header class="mb-5">
            <h1 class="h1">{{ movie.title }}</h1>
            <p>{{ movie.description }}</p>

            <b-alert :show="loading" variant="info">Loading...</b-alert>
        </header>

        <div v-if="related.length">
            <h2 class="h2">Related</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in related" :key="movie.id">
                        <td>{{ movie.id }}</td>
                        <td>{{ movie.title }}</td>
                        <td class="text-right">
                            <b-button size="sm" :to="`/movie/${movie.id}`">View</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	</b-container>
</template>

<script>
    import {Movies} from '@/controller/movies';
	export default {
		data() {
			return {
				loading: false,
				model: {},
                movie: {},
                related: {},
			};
		},
		async created() {
            this.refreshMovie();
		},
		methods: {
			async refreshMovie() {
				this.loading = true;
                this.movie = await Movies.getMovie(this.$route.params.id);
                this.related = await Movies.getMoviesByGenreId(this.movie.genreId);
				this.loading = false;
            },
        },
        watch: {
            '$route' (to, from) {
                this.refreshMovie();
            }
        }
	};
</script>
