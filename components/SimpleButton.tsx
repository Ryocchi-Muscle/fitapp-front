'use client'
import React from 'react'

//typescriptの型付け
type SimpleButtonProps = {
  text: string
  onClick: () => void // void = 空（返り値）
}
const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

export default SimpleButton
