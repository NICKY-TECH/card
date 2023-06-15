import "../styles/main.css";
import Top from "./top";
import Bottom from "./bottom";
import Footer from "./footer";

function Container() {
  return (
    <div className="Container">
      <div className="innerContainer">
        <Top />
        <Bottom />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
