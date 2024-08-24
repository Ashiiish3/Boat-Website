import React from 'react'

export default function EarbudsAnimation() {
    const imageLoad = () => {
        const imageurl = '../Assets/Images/Black_Earbuds/Black_Earbuds(1).jpg'
        const image = new Image()
        image.src = imageurl
        console.log(image)
    }
    imageLoad()
  return (
    <div>
      animation page
    </div>
  )
}