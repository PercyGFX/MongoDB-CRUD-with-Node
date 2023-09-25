import React from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

type Props = {};

export default function Auth({}: Props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/isLogged`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error.response.data);
        navigate("/login");
      });
  }, [navigate]);

  return <Outlet />;
}
