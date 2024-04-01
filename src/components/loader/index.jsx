'use client'
import { useRef, useEffect } from 'react'
import './index.module.css'

export default function Loader() {
  const loader = useRef(null)

  useEffect(() => {
    if (loader.current) {
      loader.current.style.minHeight = 'unset'
      loader.current.style.height = '0'
      loader.current.style.borderBottomLeftRadius = '1500px'
      loader.current.style.borderBottomRightRadius = '1500px'
    }
  }, [])

  return (
    <div id='loader' ref={loader} className='loader fixed bg-black h-[100vh] w-full top-0 left-0' style={{
      zIndex: 1000,
      transition: 'all 1s ease'
    }}>
    </div>
  )
}
