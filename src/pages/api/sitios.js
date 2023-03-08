// import { GetSitios } from '../../functions/controller'
import crossing from '../../functions/crossing'
import obj1 from '../../database/exemplo1.json'
// import obj2 from '../../database/exemplo2.json'
const objetos = [obj1]

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // GetSitios(req, res) //controler
    res.status(200).json(crossing(objetos))
  } else {
    res.status(404).json({ error: 'Metodo Inválido' })
  }
}
