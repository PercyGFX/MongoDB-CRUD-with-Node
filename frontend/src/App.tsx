import React from "react";
import { Login } from "./pages/login";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Auth from "./services/Auth";
import Profile from "./components/Profile";
import { Routes, Route, useMatch } from "react-router-dom";

const App: React.FC = () => {
  const currentPath = window.location.pathname;

  const matchNewBook = useMatch("/newbook");
  const matchEditBook = useMatch("/editbook/:id");

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        {/* login route */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* main routes add edit delete and view */}
        <Header />

        {/* Rest of your component */}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/newbook" element={<AddBook />} />
          <Route path="/editbook/:id" element={<EditBook />} />
          {/* // protected */}
          <Route element={<Auth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
