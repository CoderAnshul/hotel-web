import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import HomeDes from "./Pages/HomeDes";
import ListYourProperty from "./Pages/ListYourProperty";
import Explore from "./Pages/Explore";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import CheckOut from "./Pages/CheckOut";

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
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/check-out" element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
