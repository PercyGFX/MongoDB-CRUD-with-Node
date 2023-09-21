import React from "react";
import {
  Button,
  Image,
  Pagination,
  Rate,
  Divider,
  Typography,
  message,
  Skeleton,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const { Paragraph, Text } = Typography;

type Props = {};

interface Book {
  _id: string;
  author: string;
  bookname: string;
  description: string;
  image: string;
  rating: number;
}

const Posts = (props: Props) => {
  const [current, setCurrent] = React.useState(3);
  const [data, setData] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  //get all books from api
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/getbooks`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // delete handler

  const HandleDelete = (id: string) => {
    console.log(id);

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/deletebook/${id}`)
      .then((response) => {
        console.log(response);
        message.success("Book deleted");
        // filter posts again
        setData((olddata) => {
          return olddata.filter((data) => {
            return data._id !== id;
          });
        });
      })
      .catch((err) => {
        console.log(err);
        message.error("Deletion failed");
      });
  };

  const onChange: any["onChange"] = (page: any) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <>
      <div className="mt-1 p-4 flex justify-center">
        <div className=" bg-white rounded-full p-1 w-5/12 flex justify-center shadow-md">
          <input
            className=" text-2xl p-2 w-full rounded-full focus:outline-none border-none font-poppins"
            type="text"
            placeholder="search a book.."
          />
          <button className="appearance-none border border-none shadow-md bg-blue-600 m-0.5 rounded-full font-poppins text-white p-4 hover:bg-blue-500 font-semibold hover:cursor-pointer">
            Go
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-7/12">
          {data.length > 0 ? (
            data.map((book) => {
              return (
                <div
                  key={book._id.toString()}
                  className="bg-white my-4 shadow-md px-5 pt-3 font-poppins rounded-lg flex justify-between"
                >
                  <div className="w-8/12">
                    <div className="font-poppins font-semibold text-lg">
                      {book.bookname}
                    </div>
                    <div className="font-normal text-sm">{book.author}</div>
                    <Rate
                      disabled
                      defaultValue={book.rating}
                      className="mt-3"
                    />
                    <Divider className="my-2" />

                    <Paragraph
                      className=" font-poppins text-base"
                      ellipsis={{ rows: 4, expandable: false, symbol: "more" }}
                    >
                      {book.description}
                    </Paragraph>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <div>
                      <Image
                        width={200}
                        className="rounded-md"
                        src={book.image}
                      />
                      <div className="flex justify-end mx-2 py-2">
                        <Link to={"/editbook/" + book._id}>
                          <Button
                            className="mx-2"
                            type="primary"
                            icon={<EditOutlined />}
                          >
                            Edit
                          </Button>
                        </Link>

                        <span onClick={() => HandleDelete(book._id)}>
                          <Button
                            className=""
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                          >
                            Delete
                          </Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white my-4 shadow-md p-4 text-center font-poppins rounded-lg">
              No Posts found
              <Skeleton loading={loading} active></Skeleton>
            </div>
          )}

          {/* <Pagination defaultCurrent={1} total={50} /> */}
        </div>
      </div>
    </>
  );
};

export default Posts;
