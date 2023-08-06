const knex = require('knex')
const knexConf = require('../../db/knexfile')
const connect = knex(knexConf.development)

class FilmsRepository {

  
  createFilm = async (data) => {
    const dataResp = await connect('films').insert(data)
    return dataResp
  }
  
  readAllFilms = async () => {
    const dataResp = await connect('films')
    return dataResp
  }
  
  findFilmById =async (idFilm) => {
    const dataResp = await connect('films').where({id: idFilm})
    return dataResp
  }
  
  updateFilm = async (id, body) => {
    const dataResp = await connect('films').update(body).where({id})
    return dataResp
  }
  
  deleteFilm = async (id) => {
    const dataResp = await connect('films').update({status: 0}).where({id} )
    return dataResp
  }
}


module.exports = FilmsRepository