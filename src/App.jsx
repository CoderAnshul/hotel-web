import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import HomeDes from "./Pages/HomeDes";
import ListYourProperty from "./Pages/ListYourProperty";
import Explore from "./Pages/Explore";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home-des/:id" element={<HomeDes/>}/>
          <Route path="/listyourproperty" element={<ListYourProperty/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
