const { URI } = require('../Utils/routeAnnotation')

const createComment = (req, res) => {
  const comments = [
    {
      id: '5555',
      id_film: '4444',
      descr: "Esse filme é top :)",
      status: 'p'
    }
  ]

  res.json(comments)
}

const findCommentById = (req, res) => {
  const id = req.params.id

  const comment = [
    {
      id
    }
  ]

  res.json(comment)
}

const findCommentByFilm = (req, res) => {
  // vai trazer apenas commentários de 1o nível
  // teria q fazer uma função recursiva p trazer todos 
  const film_id = req.params.id

  const comment = [
    {
      film_id
    }
  ]

  res.json(comment)
}

const updateComment = (req, res) => {
  const body = req.body
  res.json(body)
}


const deleteComment = (req, res) => {
  const id = req.params.id
  res.json(id)
}

module.exports = {
  createComment: URI('/comments', 'POST')(createComment),
  findCommentById: URI('/comments/:id', 'GET')(findCommentById),
  findCommentByFilm: URI('/comments/film/:id', 'GET')(findCommentByFilm),
  updateComment: URI('/comments', 'PUT')(updateComment),
  deleteComment: URI('/comments/:id', 'DELETE')(deleteComment)
}