import img1 from "../../assets/images/album/parner1.png";
import img2 from "../../assets/images/album/parner2.png";
import img3 from "../../assets/images/album/parner3.png";
import img4 from "../../assets/images/album/parner4.png";

Footer.propTypes = {};

function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Đối tác âm nhạc</div>
      <div className="footer__body">
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="footer__body-item">
          <div className="footer__body-item-wrap">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          Danang, Vietnam - 03/2023
        </div>
        <div className="footer__bottom-mid">
        Do Khanh Son - Front-end Deverloper
        </div>
        <div className="footer__bottom-right">React + TypeScript + Vite</div>
      </div>
    </div>
  );
}

export default Footer;
