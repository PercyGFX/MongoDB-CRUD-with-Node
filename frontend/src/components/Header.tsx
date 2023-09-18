import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between px-4 bg-white py-5 shadow-md rounded-sm">
      <div className="font-poppins text-xl">Mongo Crud</div>

      <div className="flex">
        <Button
          size="middle"
          className=" bg-orange-500 text-white font-poppins hover:bg-orange-300"
        >
          Post a Book
        </Button>

        <Button className="mx-3" danger type="text" icon={<LogoutOutlined />}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
