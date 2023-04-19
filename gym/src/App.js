import TrainerSection from './Pages/Trainer/TrainerSection'
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
// import TrainingProgram from "./Pages/Training Program/TrainingProgram";
// import TrainerSection from "./Pages/Trainer/TrainerSection";
// import PricingSection from "./Pages/PricingSection/PricingSection";
// import Footer from "./Pages/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import TrainingProgram from "./Pages/Training Program/TrainingProgram";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <TrainingProgram />
        <TrainerSection />
    </div>
  );
}

export default App;
