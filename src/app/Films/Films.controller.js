const { URI } = require('../Utils/routeAnnotation')
const FilmsService = require('./Films.service')

const filmsService = new FilmsService

const createFilm = async (req, res) => {
  const body = req.body
  const response = await filmsService.createFilm(body)
  console.log('Criado: ', response)
  res.status(201).json()
}

const readAllFilms = async (req, res) => {
  const response = await filmsService.readAllFilms()
  res.status(200).json(response)
}

const findFilmById = async (req, res) => {
  const id = req.params.id
  const response = await filmsService.findFilmById(id)
  res.status(200).json(response)
}

const updateFilm = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const response = await filmsService.updateFilm(id, body)
  res.status(200).json(response)
}

const deleteFilm = async (req, res) => {
  const id = req.params.id
  const response = await filmsService.deleteFilm(id)
  res.status(200).json(response)
}

module.exports = {
  createFilmssss: URI('/films', 'POST')(createFilm),
  readAllFilms: URI('/films', 'GET')(readAllFilms),
  findFilmById: URI('/films/:id', 'GET')(findFilmById),
  updateFilm: URI('/films/:id', 'PUT')(updateFilm),
  deleteFilm: URI('/films/:id', 'DELETE')(deleteFilm)
}