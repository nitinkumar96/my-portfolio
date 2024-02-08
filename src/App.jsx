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
        <div className="fixed top-[300px] right-0 h-[200px] rounded-l-3xl backdrop-blur-[3px] flex flex-col items-center justify-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="text-white text-xl m-2"
            >
              <img
                src={link.icon}
                alt={link.text}
                className='w-8 h-8 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
