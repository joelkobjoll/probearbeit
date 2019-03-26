import Vue from 'vue';

require('dotenv').config({ path: '../.env' });

const data: any = {
    genres: [],
};

data.install = () => {
    Object.defineProperty(Vue.prototype, '$global', {
        get() {
            return data ;
        },
    });
};

export default data;
