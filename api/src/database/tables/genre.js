import {db} from '@/database/connection'
import Sequelize from 'sequelize'
import epilogue from 'epilogue'

export const modelGenre = db.define('genre', {
    title: Sequelize.TEXT,
})

export const tableGenre = epilogue.resource({
    model: modelGenre,
    endpoints: ['/genre', '/genre/:id'],
})
