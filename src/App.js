import { useEffect, useState } from 'react';
import { Smile } from 'lucide-react';
import './App.css';
import ClientReview from './components/ClientReview.js';
import HeroSection from './components/HeroSection.js';
import NavBar from './components/NavBar.js';
import Offices from './components/Offices.js';

function App() {
  const fullText = "MADE BY BURHAN AHMED"; 
  const [displayedText, setDisplayedText] = useState(''); 
  const [index, setIndex] = useState(0); 
  const [isBlinking, setIsBlinking] = useState(true); 

  useEffect(() => {
    
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(prevIndex => prevIndex + 1); 
      } else {
        clearInterval(typingInterval); 
        setIsBlinking(false); 
        setTimeout(() => {
          setDisplayedText(''); 
          setIndex(0); 
          setIsBlinking(true); 
        }, 3000);
      }
    }, 200);
    
    return () => clearInterval(typingInterval);
  }, [index, fullText]);

  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev); 
    }, 500); 

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <NavBar />
      <main className="text-white bg-black font-mono">
        <HeroSection />
        <Offices />
        <ClientReview />
        <div className='flex justify-center items-center py-40'>
          <div className='overflow-hidden'>
            <span className='flex text-nowrap '>
              {displayedText}
              <span className={`cursor ${isBlinking ? 'blink' : ''}`}>|</span>
              <span className='ml-3'><Smile /></span>
            </span>
          </div>
        </div>
      </main>
      <style jsx>{`.cursor {font-weight: bold;transition: opacity 0.3s;}.blink {opacity: 0;}`}</style>
    </>
  );
}

export default App;
