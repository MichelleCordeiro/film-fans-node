const express = require('express')
const { router } = require('./Utils/routeAnnotation')
const FilmsController = require('./Films/Films.controller')
const CommentsController = require('./Comments/Comments.controller')


// console.log(router)

const app = express()
const port = 3333
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server Film Fans is running on port ${port}`)
})

app.get('/v1/film-fans/check-live', (req, res) => {
  res.send("I'm live and breathing!")
})
