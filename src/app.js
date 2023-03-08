const express = require('express')
const cors = require('cors')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRoutes = require('./routes/users.route')
const todoRoutes = require('./routes/todos.route')
const categorieRoutes = require('./routes/categories.route')

initModels();

const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoutes, todoRoutes, categorieRoutes)


const PORT = 8000

db.authenticate()
.then(() => console.log('Base de datos conectada'))
.catch(error => console.log(error))

db.sync({alter: true})
.then(() => console.log('Base de datos sincronizada'))
.catch(error => console.log(error))


app.get('/', (req, res) => {
    res.send('Bienvenido a mi proyecto')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})