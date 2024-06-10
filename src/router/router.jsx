import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../pages/routes";
import { BaseLayout } from "../components/layout/base-layout";

const nestedRoutes = (routes, parentPath = "") =>
  routes.map(({ Element, key, children = [] }) => {
    const fullPath = `${parentPath}${key}`;
    if (children.length > 0) {
      return (
        <Fragment key={fullPath}>
          <Route key={fullPath} path={fullPath}>
            {nestedRoutes(children, fullPath)}
          </Route>
        </Fragment>
      );
    }
    return <Route key={fullPath} path={fullPath} element={<Element />} />;
  });

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        {nestedRoutes(routes)}
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

// export const UnAuthorizedRoutes = () => (
//   <Routes>
//     <Route path="/" element={<LoginLayout />}>
//       <Route path="*" element={<NotFound />} />
//       {authRoutes.map(({ Element, key }) => (
//         <Route key={key} path={key} element={<Element />} />
//       ))}
//     </Route>
//   </Routes>
// );
