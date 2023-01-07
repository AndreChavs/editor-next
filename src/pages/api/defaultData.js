import defaultData from '../../database/defaultData.json'
export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(defaultData)
  } else {
    res.status(404).json({ error: 'Metodo Inválido' })
  }
}
