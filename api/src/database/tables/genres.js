import {db} from '@/database/connection'
import Sequelize from 'sequelize'
import finale from 'finale-rest'

export const modelGenre = db.define('genres', {
    name: Sequelize.TEXT,
})

export const tableGenre = finale.resource({
    model: modelGenre,
    endpoints: ['/genres', '/genres/:id'],
})
