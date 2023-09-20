import React from "react";
import { storage, firebase } from "../services/firebase";
import { PlusOutlined } from "@ant-design/icons";
import { Button, message, Form, Input, Upload } from "antd";
import axios from "axios";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

type Props = {};

function AddBook({}: Props) {
  const [imageUrl, setImageUrl] = React.useState("");
  // upload firebase

  const customUploadValidator = async (file: File) => {
    // Check file type (optional)

    console.log("File name:", file.name);
    console.log("File type:", file.type);
    console.log("File size (in bytes):", file.size);

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      message.error("You can only upload JPG and PNG files!");
      return false;
    }

    // Upload the file to Firebase Storage
    const storageRef = storage.ref();
    const fileName = `${Date.now()}-${file.name}`;
    try {
      const imageRef = storageRef.child(`images/${fileName}`);
      const snapshot = await imageRef.put(file);

      // You can now use the 'downloadURL' as needed (e.g., store it in your database)
      setImageUrl(await snapshot.ref.getDownloadURL());

      console.log("Download URL:", imageUrl);

      message.info("Image uploaded successfully");

      return false; // Prevent automatic file upload by returning false
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Error uploading image");
      return false; // Prevent automatic file upload by returning false
    }
  };

  // handle submit
  const handlesubmit = (values: any) => {
    // vales to post
    const postData = {
      bookname: values.bookname,
      author: values.author,
      description: values.description,
      rating: 5,
      image: imageUrl,
    };

    // axios post

    axios
      .post("http://localhost:5000/addbook", postData)
      .then((response) => {
        console.log("POST request success:", response.data);
        message.success("Book posted");
      })
      .catch((error) => {
        console.error("POST request error:", error);
        message.error("failed");
      });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white my-4 shadow-md px-5 pt-8 font-poppins rounded-lg flex justify-between w-7/12 ">
        <Form
          className="w-full"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={handlesubmit}
        >
          <Form.Item
            label="Book Title"
            name="bookname"
            rules={[{ required: true, message: "Please enter a book title" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Please enter an author" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Book Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            name="bookImage"
            rules={[{ required: true, message: "Please Add an image" }]}
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              accept=".jpg, .png"
              beforeUpload={customUploadValidator}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item label="Submit">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddBook;
