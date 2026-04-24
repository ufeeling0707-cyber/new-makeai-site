import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Engines from './components/Engines';
import Products from './components/Products';
import RndHighlights from './components/RndHighlights';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Engines />
        <Products />
        <RndHighlights />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
