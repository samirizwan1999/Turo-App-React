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
import TestimonialSlider from "./components/TestimonialSlider"
import Faqs from "./components/Faqs"
import Footer from "./components/Footer"

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
      <TestimonialSlider />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
