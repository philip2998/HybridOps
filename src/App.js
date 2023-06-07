import './css/App.css';
import './css/navbar.css';
import './css/banner.css';
import './css/skills.css';
import './css/companies.css';
import './css/protection.css';
import './css/security.css';
import './css/highlights.css';
import './css/animate.css';
import './css/services.css';
import './css/trial.css';
import './css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navigationBar/NavBar';
import HomeBanner from './components/Home/HomeBanner';
import Skills from './components/CompanyProfiler/Skills';
import Protection from './components/Protection/Protection';
import Security from './components/Security/Security';
import Highlights from './components/CompanyHighlights/Highlights';
import Services from './components/ServicesSection/Services';
import Trial from './components/CompanyTrial/Trial';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
      <Skills />
      <Protection />
      <Security />
      <Highlights />
      <Services />
      <Trial />
      <Contact />
    </div>
  );
}

export default App;
