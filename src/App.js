import GalleryNavigation from './components/GalleryNavigation';
import { harvardArt } from './data/harvardArt'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <GalleryNavigation galleries={harvardArt.records} />
    </div>
  );
}

export default App;
