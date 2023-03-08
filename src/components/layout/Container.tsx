import Header from "./Header";
import SideBar from "./SideBar";

Container.propTypes = {};

function Container(children: any) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Container;
