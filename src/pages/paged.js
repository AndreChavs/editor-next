import React from 'react'
// import customParser from '../functions/customParser'
import { Previewer } from 'pagedjs'
import EditorRender from '../components/EditorRender'

export default function Paged() {
  React.useLayoutEffect(() => {
    const previewer = new Previewer()
    previewer
      .preview(
        document.querySelector('#get-html').innerHTML,
        [],
        document.querySelector('#post-html')
      )
      .then((flow) => {
        console.log('preview rendered, total pages', flow.total, { flow })
      })
    return () => {
      document.head
        .querySelectorAll('[data-pagedjs-inserted-styles]')
        .forEach((e) => e.parentNode?.removeChild(e))
    }
  }, [])

  return (
    <>
      <div id="get-html" style={{ display: 'none' }}></div>
      <div id="post-html">
        <EditorRender />
      </div>
    </>
  )
}
