import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Login } from "./pages/login";
import Header from "./components/Header";
import Search from "./components/Search";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        {/* login route */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* main routes add edit delete and view */}
        <Header />
        {currentPath !== "/newbook" && <Search />}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/newbook" element={<AddBook />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
