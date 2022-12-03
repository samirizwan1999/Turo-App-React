import logo from './logo.svg';
import './App.css';
import Annoucementbar from "./components/Annoucementbar"
import Banner from "./components/Banner"
import Title from "./components/Title"
import ProductSlider from "./components/ProductSlider"

function App() {
  return (
    <div>
      <Annoucementbar />
      <Banner />
      <Title />
      <ProductSlider />
    </div>
  );
}

export default App;
