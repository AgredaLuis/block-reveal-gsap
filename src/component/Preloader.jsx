import { useLayoutEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'
export default function Preloader() {


  useLayoutEffect(() => {
    preLoaderAnim()
  },[])
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer</span>
        <span>Experiment</span>
        <span>Sports </span>
      </div>
    </div>
  )
}
