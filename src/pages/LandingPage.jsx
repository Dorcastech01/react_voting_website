import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import WhyChooseUs from '../components/WhyChooseUs'



export default function LandingPage() {
  return (
    <div className="bg-white">
  

     <div className="mx-auto max-w-7xl px-24 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-10/12 lg:pr-8 text-center mt-12 lg:text-left">
          <h2 className="text-base font-semibold leading-7 text-red-600">Shape the future_</h2>
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Voice Matters
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Voting just got easy with <span className='text-red-600'>iVote</span>. Now you can make a difference in your country, cities, and local councils.
            <span className='text-red-600'> iVote</span> has made voting easy and accessible, giving you the power to shape your future at your fingertips.
          </p>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="src/assets/notes-animate.svg" alt="" className="mx-auto lg:ml-auto lg:mr-0" />
        </div>
      </div>
      
    </div>
    
    <div>
      <WhyChooseUs />
    </div>

    <div>
      <Footer />
    </div>
  
  </div>
  )
}