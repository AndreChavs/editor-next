import React from 'react'
import dynamic from 'next/dynamic'

import EditorRender from '../components/EditorRender'
const Editor = dynamic(() => import('../components/Editor'), { ssr: false })

export default function Home() {
  const [data, setData] = React.useState()
  React.useEffect(() => {
    const url = 'http://localhost:3000/api/defaultData'
    async function handlerData(url) {
      const response = await fetch(url)
      if (response.ok) {
        setData(await response.json())
        // console.log(data)
      }
    }
    handlerData(url)
  }, [])
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', padding: '20px' }}>
          <h1>Editor.JS</h1>
          {<Editor data={data} setData={setData} holder="editorjs-container" />}
        </div>
        <div style={{ width: '50%', padding: '20px' }}>
          <h1>Render</h1>
          {data && <EditorRender data={data} />}
        </div>
      </div>
    </>
  )
}
