import about1imgae from "../images/ty.jpg";
export const About = () => {
  return (
    <div className="about">
      <div className="about_upper">
        <div className="about_upper_header">
          <h1 className="about_heading">About Us</h1>
        </div>
        <div className="about_upper_description">
          <h1>The layer 1 blockchain built for memems</h1>
          <p className="about_upper_des">
            simccoin is reshaping how the meme eonomy is perceived.We create a
            conducive enevironement for web three founders to build and launch
            invoative projects
          </p>
        </div>
      </div>
      <div className="about_down">
        <img src={about1imgae} alt="_about" className="about_down_img1" />
        <div className="about_down_description">
          <h1 className="about_down_heading">
            The layer 1 blockchain ecosystem build for meme coins
          </h1>
          <p className="about_down_des">
            simccoin is reshaping how the meme eonomy is perceived.We create a
            conducive enevironement for web three founders to build and launch
            invoative projects
          </p>
        </div>
        <img src={about1imgae} alt="_about" className="about_down_img1" />
      </div>
    </div>
  );
};
