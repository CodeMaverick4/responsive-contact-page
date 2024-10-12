import { useEffect, useState } from 'react';
import { Smile } from 'lucide-react';
import './App.css';
import ClientReview from './components/ClientReview.js';
import HeroSection from './components/HeroSection.js';
import NavBar from './components/NavBar.js';
import Offices from './components/Offices.js';

function App() {
  const fullText = "MADE BY BURHAN AHMED"; // The text you want to type
  const [displayedText, setDisplayedText] = useState(''); // To store the currently displayed text
  const [index, setIndex] = useState(0); // To track the current index in fullText

  useEffect(() => {
    const interval = setInterval(() => {
      // Update displayedText with the next character from fullText
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(prevIndex => prevIndex + 1); // Move to the next index
      } else {
        clearInterval(interval); // Clear the interval when done
      }
    }, 200); // Adjust the speed of typing here (200ms per character)

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [index, fullText]);

  return (
    <>
      <NavBar />
      <main className="text-white bg-black">
        <HeroSection />
        <Offices />
        <ClientReview />
        <div className='flex justify-center items-center py-40'>
          <div className='overflow-hidden'>
            <span className='flex text-nowrap gap-6'>
              {displayedText} <span><Smile /></span>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
