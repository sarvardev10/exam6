import React, { useEffect, useState } from "react";
import { useUsersProps } from "./users.props";
import { hoc } from "../../utils/hoc";
import { Table } from "antd";
import { request } from "../../utils/request";
const Users = hoc(useUsersProps, () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Address",
      dataIndex: "",
      key: "address",
      render: (data) => <span>{data?.address?.city}</span>,
    },
    {
      title: "Company",
      dataIndex: "",
      render: (data) => <span>{data?.company?.name}</span>,
      key: "company",
    },
  ];

  const [values, setValues] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await request("users");
      console.log(data);
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
});

export default Users;
