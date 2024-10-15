import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Public/Home/Home"
import OurStory from "./pages/Public/OurStory/OurStory"
import OurMission from "./pages/Public/OurMission/OurMission"
import OurProducts from "./pages/Public/OurProducts/OurProducts"
import './styles.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="our-mission" element={<OurMission />} />
          <Route path="our-products" element={<OurProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App