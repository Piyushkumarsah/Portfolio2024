import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Trust from './components/Trust';
import ProfessionalSkills from './components/ProfessionalSkills';
import Expertise from './components/Expertise'
import ContactMe from './components/ContactMe'
import Swiper from './components/Swiper'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Trust></Trust>
      <ProfessionalSkills></ProfessionalSkills>
      <Expertise></Expertise>
      <Swiper></Swiper>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
