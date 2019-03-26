import {app} from '@/app';
import {db} from '@/database/connection'
import '@/database/tables';
import '@/router'

const API_PORT = process.env.PORT || 8080

db
.sync({force: false})
.then(() => app.listen(API_PORT, () => console.log(`Listing to http://localhost:${API_PORT}`)))
