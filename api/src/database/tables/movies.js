import {db} from '@/database/connection'
import Sequelize from 'sequelize'
import epilogue from 'epilogue';
import { modelGenre } from '@/database/tables/genre';

export const modelMovies = db.define('movies', {
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
})

modelMovies.belongsTo(modelGenre)

export const tableMovies = epilogue.resource({
    model: modelMovies,
    endpoints: ['/movies', '/movies/:id'],
})
