import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { request } from "../../utils/request";

const columns = [
  {
    title: "AlbumId",
    dataIndex: "albumId",
    key: "albumId",
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
  {
    title: "Url",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "ThumbnailUrl",
    dataIndex: "thumbnailUrl",
    key: "thumbnailUrl",
  },
];
const Photos = () => {
  const [values, setValues] = useState([]);
  console.log(values);
  const getUsers = async () => {
    try {
      const { data } = await request("photos");
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

export default Photos;
