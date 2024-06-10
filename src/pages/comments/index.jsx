import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { request } from "../../utils/request";

const columns = [
  {
    title: "PostId",
    dataIndex: "postId",
    key: "postId",
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
];
const Comments = () => {
  const [values, setValues] = useState([]);
  console.log(values);
  const getUsers = async () => {
    try {
      const { data } = await request("comments");
      setValues(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={values || []} />
    </div>
  );
};

export default Comments;
