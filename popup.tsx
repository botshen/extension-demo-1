import { useEffect, useState } from "react"

function IndexPopup() {
   useEffect(() => {
    chrome.runtime.onMessage.addListener((event) => {
      console.log(' chrome.runtime.onMessage.addListener', JSON.parse(event.detail))
   });
  }, [])
  return (
    <div>
      666
    </div>
  )
}

export default IndexPopup
