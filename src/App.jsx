import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactBanner from "./components/ImpactBanner";
import BoldApproaches from "./components/BoldApproaches";
import About from "./components/About";
import Digit from "./components/Digit";
import LatestProducts from "./components/LatestProducts";
import Supporters from "./components/Supporters";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ImpactBanner />
        <BoldApproaches />
        <About />
        <Digit />
        <LatestProducts />
        <Supporters />
      </main>

      <Footer />
    </div>
  );
}

export default App;
