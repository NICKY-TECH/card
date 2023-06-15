import qr from "../images/image-qr-code.png";
import "../styles/main.css";

function Top() {
  return (
    <div className="Top">
      <img src={qr} alt="qr-code" className="img"/>
    </div>
  );
}

export default Top;
