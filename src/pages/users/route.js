import { UserOutlined } from "@ant-design/icons";
import Users from ".";

export const usersRoute = [
  {
    key: "/users",
    Element: Users,
    label: "Users",
    icon: UserOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
