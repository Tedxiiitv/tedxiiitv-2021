import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Speaker.scss";
import Card from "./Cards/Card";
import data from "./data.json";

function Speaker() {
  const [showDetails, setShowDeatils] = React.useState(false);
  const [cardData, setcardData] = React.useState(null);

  const clearState = () => {
    setShowDeatils(false);
    setcardData(null);
  };

  const onCardClick = (data) => {
    console.log(data);
    setcardData(data);
    setShowDeatils(true);
  };

  const cards = data.map((card) => {
    return (
      <div onClick={() => onCardClick(card)}>
        <Card name={card.name} subtitle={card.subtitle} imgSrc={card.photo} />
      </div>
    );
  });
  return (
    <>
      <Navbar />

      <div className="speakers">
        <div className="container">
          {!showDetails ? (
            <>
              {" "}
              <p className="head">Speakers</p>
              <div className="cardContainer">{cards}</div>
            </>
          ) : (
            <>
              <div className="details">
                <div className="back" onClick={clearState}>
                   Back 
                </div>
                <div className="detailsContainer">
                  <img src={cardData.photo} alt="profile" />
                  <div className="rightCard">
                    <p>{cardData.name}</p>
                    <div></div>
                    <p className="university">{cardData.subtitle}</p>
                    <p className="bio">{cardData.desc}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Speaker;
