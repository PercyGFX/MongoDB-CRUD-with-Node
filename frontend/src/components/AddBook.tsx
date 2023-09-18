import React from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, TreeSelect, Upload } from "antd";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

type Props = {};

function AddBook({}: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white my-4 shadow-md px-5 pt-8 font-poppins rounded-lg flex justify-between w-7/12 ">
        <Form
          className="w-full"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Book Title">
            <Input />
          </Form.Item>

          <Form.Item label="Author">
            <Input />
          </Form.Item>

          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [{ title: "Bamboo", value: "bamboo" }],
                },
              ]}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Book Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Submit">
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddBook;
