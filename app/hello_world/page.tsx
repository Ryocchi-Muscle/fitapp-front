'use client'
import type { NextPage } from 'next'
import SimpleButton from '@/components/SimpleButton'

const HelloWorld: NextPage = () => {
  const handleOnClick = () => {
    console.log('Clicked from hello_world')
  }
  return (
    <>
      <h1>Top Pgae</h1>
      <p>content</p>
      <SimpleButton text={'oppapi'} onClick={handleOnClick} />
    </>
  )
}

export default HelloWorld
