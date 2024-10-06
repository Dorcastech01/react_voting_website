import Navigation from './components/Navigation'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NewVoter from './pages/NewVoterPage'
import ExistingVoterPage from './pages/ExistingVoterPage'
import VoteCandidatePage from './pages/VoteCandidatePage'



function App() {
  

  return (
   <>
   <Navigation />
   <Routes>
   
      <Route path='/' element = {<LandingPage />}  />
      <Route path='/existingvoter' element = {<ExistingVoterPage />} />
      <Route path='/newvoter' element = {<NewVoter />} />
      <Route path='/votecandidate' element = {<VoteCandidatePage/>} />
    
    
   </Routes>
   
   </>
    
  )
}

export default App



