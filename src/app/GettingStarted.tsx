import { useEffect, useState } from 'react'

const GettingStarted = () => {
  
  const [loadTime, setLoadTime] = useState(0)
  const [domLoadTime, setDomLoadTime] = useState(0)
  useEffect(() => {
    console.log("Coucou")
    setTimeout(() =>{
      const load = (performance.timing.loadEventEnd -  performance.timing.connectStart)
      const domLoad = (performance.timing.domContentLoadedEventEnd -  performance.timing.connectStart)
      setLoadTime(load)
      setDomLoadTime(domLoad)
    },3000)
  }, [])
  
  


  return (
    <>
      <div className="alert alert-info mt-5 mb-3">
        <p>
          DOMContentLoaded: {domLoadTime}ms / Load: {loadTime}ms
        </p>
      </div>
    </>
  )
}

export default GettingStarted
