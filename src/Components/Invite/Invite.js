import React from "react";
import "./Invite.scss";
import svg from "../../Assests/calendar.svg";

const Invite = () => {
  return (
    <div className="invite-wrapper">
      <hr className="white-line" />

      <div className="map-container">
        <h2 className="title-red">Mark your calendars</h2>
        <h1 className="title-shadow">17th - 19th December 2021</h1>
        <a
          href="https://www.google.com/calendar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svg} className="icon" alt="calendar invite" />
        </a>
        <h2 className="title-iiitv">
          IIIT Vadodara
          <br />
          Gandhinagar, Gujarat, India
        </h2>
        <p className="subtitle">*This event is invite only</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5581427089824!2d72.64837913306124!3d23.259160785755437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c777c4b5e63%3A0xf2af0643c7186398!2sIndian%20Institute%20of%20Information%20Technology%20Vadodara%20(Gandhinagar%20Campus)!5e0!3m2!1sen!2sin!4v1632905936694!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          className="map-embed"
          frameBorder="100"
          title="map"
        ></iframe>
        <div className="note-container">
          <p className="note">Note :</p>
          <p className="note-text">
            *This year, the event will be organized in Virtual Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invite;
