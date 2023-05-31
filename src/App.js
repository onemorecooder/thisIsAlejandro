import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';

function App() {
  return (
    <div className='h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto no-scrollbar text-white bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600'>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
