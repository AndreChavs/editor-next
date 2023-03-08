//GET sítios: http://localhost:3000/api/sitios

export async function GetSitios(req, res) {
  try {
    // const sitios = await Sitios.find({}) //retorna uma array de objetos
    // if (!sitios) {
    //   return res.status(404).json({ error: 'Data not found' })
    // } else {
    //   return res.status(200).json(sitios) //resposta do fetch:get
    // }
  } catch (error) {
    return res.status(404).json({ error: `Fetching data: ${error}` })
  }
}
