import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from './pages/main';
import Footer from './components/footer';
import About from './pages/about'


function App() {
  return (
    <div className="App">
      <div className="bg">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="chaus-website" element={<Main />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
