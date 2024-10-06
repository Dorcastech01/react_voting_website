import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VoteCandidatePage() {
  const [selectedCandidates, setSelectedCandidates] = useState({
    parliament: '',
    primeMinister: '',
    councillors: '',
    policeCommissioners: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const categories = {
    parliament: [
      { id: 'parliament1', name: 'Sir Mark Hendrick', party: 'Labour Party' },
      { id: 'parliament2', name: 'Collum Anderson', party: 'Labour Party' },
      { id: 'parliament3', name: 'Lee Anderson', party: 'Reform Party' },
    ],
    primeMinister: [
      { id: 'pm1', name: 'Rishi Sunak', party: 'Conservative Party' },
      { id: 'pm2', name: 'Keir Starmer', party: 'Labour Party' },
      { id: 'pm3', name: 'Ed Davey', party: 'Liberal Democrats' },
    ],
    councillors: [
      { id: 'councillor1', name: 'Jane Smith', party: 'Labour Party' },
      { id: 'councillor2', name: 'John Doe', party: 'Conservative Party' },
      { id: 'councillor3', name: 'Emma Brown', party: 'Green Party' },
    ],
    policeCommissioners: [
      { id: 'police1', name: 'Sarah Clarke', party: 'Independent' },
      { id: 'police2', name: 'James Williams', party: 'Labour Party' },
      { id: 'police3', name: 'Michael Green', party: 'Conservative Party' },
    ],
  };

  const handleSelection = (category, candidate) => {
    setSelectedCandidates({
      ...selectedCandidates,
      [category]: candidate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCandidates.parliament || !selectedCandidates.primeMinister || !selectedCandidates.councillors || !selectedCandidates.policeCommissioners) {
      alert('Please select a candidate for each category before submitting.');
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vote Your Candidates</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Hi! Below are different categories with eligible contestants. Select your candidate and click submit when you are done.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-4 sm:px-24 py-16">
        
        <div className={`mb-8 p-6 rounded-md shadow-sm border-2 ${selectedCandidates.parliament ? 'border-green-500' : 'border-red-500'}`}>
          <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:text-xl">a. UK Parliament</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Select a candidate below.</p>

          <div className="mt-4 space-y-4">
            {categories.parliament.map((candidate) => (
              <div key={candidate.id} className="flex items-center">
                <input
                  id={candidate.id}
                  name="parliament"
                  type="radio"
                  value={candidate.name}
                  checked={selectedCandidates.parliament === candidate.name}
                  onChange={() => handleSelection('parliament', candidate.name)}
                  className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300"
                />
                <label htmlFor={candidate.id} className="ml-3 block font-medium text-gray-700 text-lg">
                  {candidate.name} ({candidate.party})
                </label>
              </div>
            ))}
          </div>
        </div>

        
        <div className={`mb-8 p-6 rounded-md shadow-sm border-2 ${selectedCandidates.primeMinister ? 'border-green-500' : 'border-red-500'}`}>
          <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:text-xl">b. Prime Minister</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Select a candidate below.</p>

          <div className="mt-4 space-y-4">
            {categories.primeMinister.map((candidate) => (
              <div key={candidate.id} className="flex items-center">
                <input
                  id={candidate.id}
                  name="primeMinister"
                  type="radio"
                  value={candidate.name}
                  checked={selectedCandidates.primeMinister === candidate.name}
                  onChange={() => handleSelection('primeMinister', candidate.name)}
                  className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300"
                />
                <label htmlFor={candidate.id} className="ml-3 block font-medium text-gray-700 text-lg">
                  {candidate.name} ({candidate.party})
                </label>
              </div>
            ))}
          </div>
        </div>

    
        <div className={`mb-8 p-6 rounded-md shadow-sm border-2 ${selectedCandidates.councillors ? 'border-green-500' : 'border-red-500'}`}>
          <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:text-xl">c. Councillors</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Select a candidate below.</p>

          <div className="mt-4 space-y-4">
            {categories.councillors.map((candidate) => (
              <div key={candidate.id} className="flex items-center">
                <input
                  id={candidate.id}
                  name="councillors"
                  type="radio"
                  value={candidate.name}
                  checked={selectedCandidates.councillors === candidate.name}
                  onChange={() => handleSelection('councillors', candidate.name)}
                  className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300"
                />
                <label htmlFor={candidate.id} className="ml-3 block font-medium text-gray-700 text-lg">
                  {candidate.name} ({candidate.party})
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={`mb-8 p-6 rounded-md shadow-sm border-2 ${selectedCandidates.policeCommissioners ? 'border-green-500' : 'border-red-500'}`}>
          <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:text-xl">d. Police and Crime Commissioners</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Select a candidate below.</p>

          <div className="mt-4 space-y-4">
            {categories.policeCommissioners.map((candidate) => (
              <div key={candidate.id} className="flex items-center">
                <input
                  id={candidate.id}
                  name="policeCommissioners"
                  type="radio"
                  value={candidate.name}
                  checked={selectedCandidates.policeCommissioners === candidate.name}
                  onChange={() => handleSelection('policeCommissioners', candidate.name)}
                  className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300"
                />
                <label htmlFor={candidate.id} className="ml-3 block font-medium text-gray-700 text-lg">
                  {candidate.name} ({candidate.party})
                </label>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-10">
          <button
            type="submit"
            className="w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Submit
          </button>
        </div>
      </form>

      
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-medium text-green-600">Voting completed successfully!</h3>
            <p className="mt-2 text-sm text-gray-600">Thank you for voting.</p>
          </div>
        </div>
      )}
    </div>
  );
}
