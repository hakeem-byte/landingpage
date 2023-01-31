import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Support from './components/Support';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Auth from './components/Auth';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function HomePage() {
return (
<>
<Navbar />
<Hero />
<About />
<Support />
<AllInOne />
<Pricing />
<Footer />

</>
);
}

function App() {
return (
<BrowserRouter>
<Routes>
  <Route path='/' exact
  element={<HomePage />}/>
  <Route path="/auth" element={<Auth />}/>
</Routes>
</BrowserRouter>
);
}
export default App;