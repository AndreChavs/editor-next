import React from 'react'
import EditorJS from '@editorjs/editorjs'
import { EditorTools } from './EditorTools'

const Editor = ({ data, setData, holder }) => {
  const ref = React.useRef()
  React.useEffect(() => {
    if (!ref.current) {
      //initialize editor if we don't have a reference
      const editor = new EditorJS({
        holder: holder, //principal propriedade de renderização
        tools: EditorTools, //componentes de edição
        data: data || {},
        onChange: async (api, event) => {
          event.preventDefault()
          setData(await api.saver.save())
        }
      })
      ref.current = editor //A referencia recebe o objeto do Editor
      // console.log(editor)
    }
    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
  }, [])
  return <div id={holder} style={{ border: '1px solid' }} />
}

export default React.memo(Editor)
