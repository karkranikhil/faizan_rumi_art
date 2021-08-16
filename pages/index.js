import React from 'react'
import Head from 'next/head'
import {IMAGES} from '../data/index'
import Header from '../components/header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import CustomLightbox from '../components/CustomLightbox'
export default function Home() {
  const [photoIndex, setPhotoIndex] = React.useState(0)
  const [showLightBox, setShowLightBox] = React.useState(false)
  const closeHandler= () =>{
    setShowLightBox(false)
  }
  const showLightBoxHandler = (index) =>{
    setPhotoIndex(index)
    setShowLightBox(true)
  }
  return (
    <div>
      <Head>
        <title>Faizan Rumi | Abstract Artist 👨🏽‍🎨 🎨</title>
        <meta name="description" content="This is a collection of Faizan Rumi abstract arts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div>
        <video autoPlay
          muted
          loop id="myVideo">
            <source src="/video/background.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
          </video>
          <Header title="FAIZAN RUMI ART" subtext ="👨🏽‍🎨 🎨 Abstract Artist 👨🏽‍🎨 🎨" banner/>
       </div>
        
          <Header title="PORTFOLIO" subtext ="👨🏽‍🎨 🎨 Collection of my Art 👨🏽‍🎨 🎨" showLine/>

          <Gallery showLightBoxHandler={showLightBoxHandler}/>
          {showLightBox && <CustomLightbox images={IMAGES} index={photoIndex} closeHandler={closeHandler}/>}
      </main>
      <Footer/>
    </div>
  )
}
