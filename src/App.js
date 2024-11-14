import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { originals, action, trending, horror, comedy, romance } from './urls';

function App() {
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
    </div>
  );
}

export default App;
