const { URI } = require('../Utils/routeAnnotation')

const createFilm = (req, res) => {
  const films = [
    {
      id: '4444',
      descr: "Gabriel de volta pra casa",
      ano: '2003',
      sinopse: 'Jovem destemido foge de casa afim de criar uma bomba atômica.',
      imagem: 'http://encurt.png'
    }
  ]

  res.json(films)
}

const readAllFilms = (req, res) => {
  const films = [
    {
      id: '4444',
      descr: "Gabriel de volta pra casa",
      ano: '2003',
      sinopse: 'Jovem destemido foge de casa afim de criar uma bomba atômica.',
      imagem: 'http://encurt.png'
    },
    {
      id: '4445',
      descr: "Pedrosa amigo da xícara",
      ano: '1999',
      sinopse: 'Jovem apaixonado tem um relacionamento inesquecível nas ilhas Java.',
      imagem: 'http://encurt.png'
    }
  ]

  res.json(films)
}

const findFilmById = (req, res) => {
  const id = req.params.id

  const films = [
    {
      id
    }
  ]

  res.json(films)
}

const updateFilm = (req, res) => {
  const body = req.body
  res.json(body)
}


const deleteFilm = (req, res) => {
  const id = req.params.id
  res.json(id)
}

module.exports = {
  createFilm: URI('/films', 'POST')(createFilm),
  readAllFilms: URI('/films', 'GET')(readAllFilms),
  findFilmById: URI('/films/:id', 'GET')(findFilmById),
  updateFilm: URI('/films', 'PUT')(updateFilm),
  deleteFilm: URI('/films/:id', 'DELETE')(deleteFilm)
}