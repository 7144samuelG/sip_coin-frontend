import icon1 from "../images/ty.jpg";
export const Usher = () => {
  return (
    <div className="usher">
      <div className="usher_header">
        <h1 className="usher_heading">USHERIN THE</h1>
        <p className="usher_description">
          sipchain (sc) was born specifically for icp blockchain inspired by
          ckbtc token.The __has had their day.Its time for the most
          recorginazable meme coin in the world to take his reign as king of the
          memecoin
        </p>
      </div>
      <div className="eco">
        <h1 className="eco_next">MEME ECONOMY TO THE NEXT LEVEL</h1>
        <h1 className="eco_right"> LEVEL SIPCOIN</h1>
      </div>
      <div className="usher_body">
        <img src={icon1} alt="icon_1" className="usher_icon1" />
        <div className="usher_body_img_des"></div>
      </div>
    </div>
  );
};
