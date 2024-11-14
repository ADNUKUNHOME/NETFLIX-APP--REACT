import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { useState, useEffect } from 'react';
import { originals, action, trending, horror, comedy, romance } from './urls';

function App() {

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost  url={originals}  title='Netflix Originals' />
      <RowPost  url={action}  title='Action' isSmall />
      <RowPost  url={trending}  title='Trending' isSmall />
      <RowPost  url={horror}  title='Horror' isSmall />
      <RowPost  url={comedy}  title='Comedy' isSmall />
      <RowPost  url={romance}  title='Romance' isSmall />

      {showScrollButton && (
        <button onClick={scrollToTop} className="scrollToTop">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
