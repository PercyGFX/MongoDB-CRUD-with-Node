import React from "react";
import { Button, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  // logout
  const HandleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === true) {
          message.success("logged out");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Internal server error");
      });
  };
  return (
    <div className="flex justify-between px-4 bg-white py-5 shadow-md rounded-sm">
      <div className="font-poppins text-xl">
        <Link
          className="no-underline text-slate-950 hover:text-slate-650 visited:no-underline"
          to="/"
        >
          Mongo CRUD
        </Link>
      </div>

      <div className="flex">
        <Link to="newbook">
          <Button
            size="middle"
            className=" bg-orange-500 text-white font-poppins hover:bg-orange-300"
          >
            Post a Book
          </Button>
        </Link>
        <Button
          onClick={HandleLogout}
          className="mx-3"
          danger
          type="text"
          icon={<LogoutOutlined />}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
