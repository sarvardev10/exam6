import { albomRoute } from "./alboms/route";
import { commentsRoute } from "./comments/route";
import { photosRoute } from "./photos/route";
import { todosRoute } from "./todos/route";
import { usersRoute } from "./users/route";

export const routes = [
  ...albomRoute,
  ...commentsRoute,
  ...photosRoute,
  ...todosRoute,
  ...usersRoute,
];
