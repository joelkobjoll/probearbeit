import {db} from '@/database/connection'
import Sequelize from 'sequelize'
import finale from 'finale-rest';
import { modelGenre } from '@/database/tables/genres';

export const modelMovies = db.define('movies', {
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
})

modelMovies.belongsTo(modelGenre)

export const tableMovies = finale.resource({
    model: modelMovies,
    endpoints: ['/movies', '/movies/:id'],
    search: [
        {
            operator: '$like', 
            param: 'genreId', 
            attributes: [ 'genreId' ]
        },
        {
            param: 'qt', 
            attributes: [ 'title' ]
        },
        {
            param: 'q', 
        }
    ] 
})
