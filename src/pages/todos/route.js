import { CheckCircleFilled } from "@ant-design/icons";
import Todos from ".";

export const todosRoute = [
  {
    key: "/todos",
    Element: Todos,
    label: "Todos",
    icon: CheckCircleFilled,
    children: [],
    visible: true,
    access: "main",
  },
];
