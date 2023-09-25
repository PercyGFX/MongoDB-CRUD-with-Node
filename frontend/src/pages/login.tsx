import React from "react";
import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);

    //console.log(values.username, values.password);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          username: values.username,
          password: values.password,
        },
        {
          withCredentials: true, // Include credentials (cookies)
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-centerflex justify-center items-center h-screen">
      <Card className="w-3/12 border border-1 shadow-md mx-auto rounded-md py-5 text-center">
        <p className="font-medium text-3xl font-poppins text-gray-800">Login</p>
        <div className="flex justify-center">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export { Login };
