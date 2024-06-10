import { PictureOutlined } from "@ant-design/icons";
import Photos from ".";
export const photosRoute = [
  {
    key: "/photos",
    Element: Photos,
    label: "Photos",
    icon: PictureOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
