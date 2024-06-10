import Comments from ".";
import { MessageOutlined } from "@ant-design/icons";
export const commentsRoute = [
  {
    key: "/comments",
    Element: Comments,
    label: "Comments",
    icon: MessageOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
