import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
        <Button className="mx-3" danger type="text" icon={<LogoutOutlined />}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
