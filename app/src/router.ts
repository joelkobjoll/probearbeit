import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
		},
		{
			path: '/movie/:id',
			name: 'public-movie',
			component: () => import('./views/PublicMovie.vue'),
		},
		{
			path: '/admin/genres',
			name: 'genres',
			component: () => import('./views/Genres.vue'),
		},
		{
			path: '/admin/genres/:id',
			name: 'genre',
			component: () => import('./views/Genre.vue'),
		},
		{
			path: '/admin/movies',
			name: 'movies',
			component: () => import('./views/Movies.vue'),
		},
		{
			path: '/admin/movies/:id',
			name: 'movie',
			component: () => import('./views/Movie.vue'),
		},
	],
});
