import "./MobileBackground.css";
import Rectangle from "../../Assests/images/Rectangle.png";
const MobileBackground = () => {
  return (
    <div className="mobile-background-container">
      <div className="mobile-background">THE NEXT WAVE</div>
      <div className="rectangle">
        <img src={Rectangle} alt="Rectangle" />
      </div>
    </div>
  );
};

export default MobileBackground;
