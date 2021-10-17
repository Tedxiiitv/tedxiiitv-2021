import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Speaker.scss";
import Card from "./Cards/Card";
import data from "./data.json";
import dummy from "../../Assests/images/dummyImg.png";

function Speaker() {
  const [showDetails, setShowDeatils] = React.useState(false);
  const [cardData, setcardData] = React.useState(null);

  React.useEffect(() => {
    console.log(data);
  }, []);

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
        <Card name={card.name} desc={card.desc} />
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
                  <img src={dummy} alt="profile" />
                  <div className="rightCard">
                    <p>{cardData.name}</p>
                    <div></div>
                    <p className="university">{cardData.desc}</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Orci phasellus egestas tellus rutrum. Sit amet
                      commodo nulla facilisi nullam vehicula ipsum a. Feugiat in
                      fermentum posuere urna nec. Mattis enim ut tellus
                      elementum sagittis vitae et leo duis. In cursus turpis
                      massa tincidunt. Diam phasellus vestibulum lorem sed risus
                      ultricies tristique nulla aliquet. In est ante in nibh.
                      Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                      Viverra mauris in aliquam sem fringilla ut morbi. Facilisi
                      cras fermentum odio eu feugiat pretium nibh ipsum.
                      Vulputate ut pharetra sit amet aliquam id diam maecenas.
                      Blandit turpis cursus in hac habitasse platea dictumst.
                      Lectus nulla at volutpat diam ut venenatis tellus. Mauris
                      rhoncus aenean vel elit scelerisque mauris. Eu feugiat
                      pretium nibh ipsum consequat nisl vel. Nulla malesuada
                      pellentesque elit eget gravida cum sociis natoque
                      penatibus. Mi ipsum faucibus vitae aliquet nec ullamcorper
                      sit amet. Facilisis gravida neque convallis a cras semper
                      auctor neque. Vitae congue mauris rhoncus aenean vel elit
                      scelerisque.
                    </p>
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
