import logo from './logo.svg';
import './App.css';
import Annoucementbar from "./components/Annoucementbar"
import Banner from "./components/Banner"
import Title from "./components/Title"
import ProductSlider from "./components/ProductSlider"
import OutdoorSlider from "./components/OutdoorSlider"
import DestinationSlider from "./components/DestinationSlider"
import FeatureBanner from './components/FeatureBanner';
import ExperienceSlider from "./components/ExperienceSlider"
import Faqs from "./components/Faqs"

function App() {
  return (
    <div>
      <Annoucementbar />
      <Banner />
      <Title />
      <ProductSlider />
      <OutdoorSlider />
      <DestinationSlider />
      <FeatureBanner />
      <ExperienceSlider />
      <Faqs />
    </div>
  );
}

export default App;
