import featuresIcon from "../images/ty.jpg";
import { Card } from "./card";
export const Features = () => {
  return (
    <div className="features">
      <div className="features_hearder">
        <h1 className="features_heading">Features</h1>
        <img src={featuresIcon} alt="" className="features_img" />
      </div>
      <h2 className="features_header_description">
        WHY YOU SHOULD BUILD ON OR USE SIMCOIN
      </h2>
      <Card/>
    </div>
  );
};
