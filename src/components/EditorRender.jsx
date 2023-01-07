import React from 'react'
import editorJsHtml from 'editorjs-html'
const EditorJsToHtml = editorJsHtml()

const EditorRender = ({ data }) => {
  function customParser(data) {
    const { blocks } = data
    const htmlContent = blocks.map((item) => {
      if (item.type === 'simpleImage') {
        const { url } = item.data
        return (
          <img
            src={url}
            key={item.id}
            alt={item.id}
            style={{ width: '100%' }}
          />
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
    })

    return htmlContent
  }

  return <div style={{ border: '1px solid' }}>{customParser(data)}</div>
}

export default EditorRender
