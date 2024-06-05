import TheHeader from "./header/Index";
function Container({ children }: any) {
  return (
    <div>
      <div className="container">
        <TheHeader />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Container;
