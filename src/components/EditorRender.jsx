import React from 'react'
import customParser from '../functions/customParser'

const EditorRender = ({ data }) => {
  /*
  CustomParse Recebe por parametro os dados que vem da variavel de estado
  */
  const render = customParser(data)

  return <div>{render}</div>
}

export default EditorRender
