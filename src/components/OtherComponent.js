import loadable from "@loadable/component";
const OtherComponent = loadable(() => import("./OtherComponent"));
function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}

export default MyComponent;
