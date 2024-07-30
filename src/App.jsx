import { useState } from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./components/error/Error";
import Nav from "./components/nav/Nav";
import SignUp from "./components/signup/SignUp";
import LogIn from "./components/login/LogIn";
import MainHome from "./components/mainhome/MainHome";
import ForgottenPassword from "./components/forgottenpassword/ForgottenPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import PropertyList from "./components/propertylist/PropertyList";
import User from "./components/user/User";
import ShowMore from "./components/showmore/ShowMore";
import Onboard from "./components/onboard/Onboard";
import Onboard2 from "./components/onboard2/Onboard2";
import Onboard3 from "./components/onboard3/Onboard3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/onboard2" element={<Onboard2 />} />
        <Route path="/onboard3" element={<Onboard3 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/showmore" element={<ShowMore />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
