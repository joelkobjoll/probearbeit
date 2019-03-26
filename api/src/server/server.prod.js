import {db} from '../middleware/database';
import bodyParser from 'body-parser'
import cors from 'cors';
import express from 'express'
import path from 'path'
import timeout from 'connect-timeout'
import webpack from 'webpack'

db.sync({
    force: process.env.DB_FORCE_SYNC
}).then(() => {
    const app = express()
    const DIST_DIR = __dirname
    const API_PORT = process.env.PORT || 8081

    app.use(cors())
    app.use(bodyParser.json())
    app.use(timeout('120s'))
    app.use(express.static(DIST_DIR))

    app.listen(API_PORT, () => console.log(`listening to port localhost:${API_PORT}`))
})