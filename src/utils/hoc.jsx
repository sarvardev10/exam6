export const hoc = function (hook, Component, displayName) {
  Component.displayName = displayName;

  const Result = (props) => <Component {...(hook(props) || {})} {...props} />;

  Result.Original = Component;
  Result.hook = hook;

  return Result;
};
