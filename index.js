import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'


const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('hlo from home page') )

app.listen(PORT, () => {
    console.log(`listening on port: http://localhost:${PORT}`);
})