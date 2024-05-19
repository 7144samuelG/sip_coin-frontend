import cardimg1 from "../images/ty.jpg";
const cardDes = [
  {
    image: cardimg1,
    colored: true,
    title: "Speed",
    des: "Ehereum is slow rather than complain we are building something better and faster",
  },
  {
    image: cardimg1,
    title: "Speed",
    colored: false,
    des: "Ehereum is slow rather than complain we are building something better and faster",
  },
  {
    image: cardimg1,
    title: "Speed",
    colored: false,
    des: "Ehereum is slow rather than complain we are building something better and faster",
  },
  {
    image: cardimg1,
    title: "Speed",
    colored: false,
    des: "Ehereum is slow rather than complain we are building something better and faster",
  },
];
export const Card = () => {
  return (
    <div className="card">
      {cardDes.map((val) => (
        <div className="card_warp">
          <div className="card_details">
            <img src={val.image} className="card_img" alt="" />
            <div className="card_description">
              <h1 className="card_title">{val.title}</h1>
              <p className="card_descriptio">{val.des}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
