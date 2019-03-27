import Vue from 'vue';
import axios from 'axios';
import constants from '@/data';

const client = axios.create({
    baseURL: `${window.location.protocol}//${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/`
});

export const Genries = {
    async execute(method: string, resource: string, params ? : object) {
        return client({
            method,
            url: resource,
            data: params,
        }).then((req: any) => {
            return req.data;
        });
    },
    getGenries() {
        return this.execute('get', '/genres');
    },
    getGenre(id: string) {
        return this.execute('get', `/genres/${id}`);
    },
    createGenre(params: object) {
        return this.execute('post', '/genres', params);
    },
    updateGenre(id: string, params: object) {
        return this.execute('put', `/genres/${id}`, params);
    },
    deleteGenre(id: string) {
        return this.execute('delete', `/genres/${id}`);
    },
};
