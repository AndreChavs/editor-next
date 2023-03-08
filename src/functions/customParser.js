import editorJsHtml from 'editorjs-html'
const EditorJsToHtml = editorJsHtml()
export default function customParser(data) {
  const { blocks } = data
  const htmlContent = blocks.map((item) => {
    if (item.type === 'simpleImage') {
      const { url } = item.data
      return (
        <img src={url} key={item.id} alt={item.id} style={{ width: '100%' }} />
      )
    }
    if (item.type === 'header') {
      const html = EditorJsToHtml.parseBlock(item)
      return <div dangerouslySetInnerHTML={{ __html: html }} key={item.id} />
    }
    if (item.type === 'paragraph') {
      const html = EditorJsToHtml.parseBlock(item)
      return <div dangerouslySetInnerHTML={{ __html: html }} key={item.id} />
    }
    if (item.type === 'quote') {
      const html = EditorJsToHtml.parseBlock(item)
      return <q dangerouslySetInnerHTML={{ __html: html }} key={item.id} />
    }
    if (item.type === 'delimiter') {
      return <hr key={item.id} />
    }
    if (item.type === 'list') {
      if (item.data.style === 'ordered') {
        return (
          <ol key={item.id}>
            {item.data.items.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ol>
        )
      } else {
        return (
          <ul key={item.id}>
            {item.data.items.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        )
      }
    }
    if (item.type === 'table') {
      return (
        <table key={item.id}>
          <thead>
            {item.data.content.map((headers, index) => {
              if (index === 0) {
                return (
                  <tr key={index}>
                    {headers.map((cel, subIndex) => {
                      return <th key={subIndex}>{cel}</th>
                    })}
                  </tr>
                )
              }
            })}
          </thead>
          <tbody>
            {item.data.content.map((cels, index) => {
              if (index !== 0) {
                return (
                  <tr key={index}>
                    {cels.map((cel, subIndex) => {
                      return <td key={subIndex}>{cel}</td>
                    })}
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      )
    }
  })

  return htmlContent
}
