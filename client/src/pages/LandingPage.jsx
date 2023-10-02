import React from 'react'
import Navbar from '../components/Navbar'
import Playgrounds from '../components/Playgrounds/Playgrounds'
import Footer from '../components/Footer'
import ExtraContent from '../components/ExtraContent/ExtraContent'

const LandingPage = () => {
  return (
    <>
    <div>
     <Navbar />
     <section className="">
        <div >
       <ExtraContent />
        </div>
      </section>
     <section className="">
        <div >
        <Playgrounds />
        </div>
      </section>
      <Footer />
    </div>
    </>
  )
}

export default LandingPage