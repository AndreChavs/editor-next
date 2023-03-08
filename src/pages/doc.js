import React from 'react'
import HTMLtoDOCX from 'html-to-docx'
import customParser from '../functions/customParser'
import { saveAs } from 'file-saver'
import ReactDOMServer from 'react-dom/server'

export default function Doc() {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    setData(window.localStorage.getItem('data'))
  }, [])
  async function generate() {
    if (data) {
      const JSX = customParser(JSON.parse(data))
      console.log(JSX)
      const htmlString = JSX.map((item) => {
        console.log(item)
        return ReactDOMServer.renderToString(item)
      })
      // console.log(htmlString.join(' '))
      const fileBuffer = await HTMLtoDOCX(htmlString.join(' '), null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true
      })
      saveAs(fileBuffer, 'html-to-docx.docx')
    } else {
      alert('Não há dados')
    }
  }

  return (
    <div>
      <button onClick={generate}>Download</button>
    </div>
  )
}
