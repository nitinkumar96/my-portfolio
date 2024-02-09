import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { github, linkedin, leetcode, codeforces } from './assets';
const socialLinks = [
  { text: 'github', icon: github, url: 'https://github.com/nitinkumar96' },
  { text: 'linkedin', icon: linkedin, url: 'https://www.linkedin.com/in/nitinkumar96/' },
  { text: 'codeforces', icon: codeforces, url: 'https://codeforces.com/profile/nitinkumar96' },
  { text: 'leetcode', icon: leetcode, url: 'https://leetcode.com/pointbreak96/' },
  // Add more social links as needed
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
