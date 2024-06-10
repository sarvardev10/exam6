import { FolderOpenOutlined } from "@ant-design/icons";
import Albom from ".";

export const albomRoute = [
  {
    key: "/albom",
    Element: Albom,
    label: "Albom",
    icon: FolderOpenOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
