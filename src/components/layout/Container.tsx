import PlayMusic from "../PlayMusic";
import TheHeader from "./header/Index";
import TheSidebar from "./sidebar/Index";

Container.propTypes = {};

function Container({ children }: any) {
  return (
    <div>
      <TheSidebar />
      <div className="container">
        <TheHeader />
        <div className="content">{children}</div>
      </div>
      <PlayMusic />
    </div>
  );
}

export default Container;
