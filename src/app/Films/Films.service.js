const FilmsRepository = require('./Films.repository')
const filmsRepository = new FilmsRepository
const { v4: uuidv4 } = require('uuid')

class FilmsService {
  createFilm = async (body) => {
    // console.log("Service funcionando!!!!!!!!")
    const idFilm = uuidv4()

    const data = {
      'id': idFilm,
      'descr': body.descr,
      'year': body.year,
      'synopsis': body.synopsis,
      'image': body.image,
      'created_by': body.created_by
    }

    // console.log(body)
    // console.log(idFilm)

    const response = await filmsRepository.createFilm(data)
    return response
  }
  
  readAllFilms = async () => {
    const response = await filmsRepository.readAllFilms()
    return response
  }
  
  findFilmById = async (id) => {
    const response = await filmsRepository.findFilmById(id)
    return response
  }
  
  updateFilm = async (id, body) => {
    const response = await filmsRepository.updateFilm(id, body)
    return response
  }
  
  deleteFilm = async (id) => {
    const response = await filmsRepository.deleteFilm(id)
    return response
  }
}


module.exports = FilmsService