import React from "react";
import { Button, Image, Pagination, Divider, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

type Props = {};

const Posts = (props: Props) => {
  const [current, setCurrent] = React.useState(3);

  const onChange: any["onChange"] = (page: any) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="flex justify-center w-full">
      <div className="w-7/12">
        <div className="bg-white my-4 shadow-md px-5 pt-3 font-poppins rounded-lg flex justify-between">
          <div className="w-8/12">
            <div className="font-poppins font-semibold text-lg">
              A Time to Kill
            </div>
            <div className="font-normal text-sm">by John Grisham</div>
            <Divider />

            <Paragraph
              className=" font-poppins text-base"
              ellipsis={{ rows: 4, expandable: false, symbol: "more" }}
            >
              This quotation for Faulkner’s 1936 novel comes from the Books of
              Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old
              Testament and relates some of the history of Israel. Absalom, the
              third son of David, rebelled against his father and was killed.
            </Paragraph>
          </div>
          <div className="flex-1 flex justify-end">
            <div>
              <Image
                width={200}
                className="rounded-md"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div className="flex justify-end mx-2 py-2">
                <Button className="mx-2" type="primary" icon={<EditOutlined />}>
                  Edit
                </Button>

                <Button
                  className=""
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white my-4 shadow-md p-4 text-center font-poppins rounded-lg">
          No Posts found
        </div>
        {/* <Pagination defaultCurrent={1} total={50} /> */}
      </div>
    </div>
  );
};

export default Posts;
