import axios from 'axios';

const client = axios.create({
    baseURL: `${window.location.protocol}//${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/`
});

export const Movies = {
    async execute(method: string, resource: string, params ? : object) {
        return client({
            method,
            url: resource,
            data: params,
        }).then((req: any) => {
            return req.data;
        });
    },
    getMovies() {
        return this.execute('get', '/movies');
    },
    getMovie(id: string) {
        return this.execute('get', `/movies/${id}`);
    },
    createMovie(params: object) {
        return this.execute('post', '/movies', params);
    },
    updateMovie(id: string, params: object) {
        return this.execute('put', `/movies/${id}`, params);
    },
    deleteMovie(id: string) {
        return this.execute('delete', `/movies/${id}`);
    },
    searchMovie(query: string) {
        return this.execute('get', `/movies?q=${query}`);
    },
    getMoviesByGenreId(id: number) {
        return this.execute('get', `/movies?genreId=${id}`);
    },
    getMoviesByTitle(title: string, limit: number = 10) {
        return this.execute('get', `/movies?qt=${title}&count=${limit}`);
    },
};
