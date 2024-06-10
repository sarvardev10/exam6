import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { request } from "../../utils/request";

const columns = [
  {
    title: "UserId",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
];
const Albums = () => {
  const [values, setValues] = useState([]);
  console.log(values);
  const getUsers = async () => {
    try {
      const { data } = await request("albums");
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

export default Albums;
