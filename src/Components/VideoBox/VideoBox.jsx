import "./VideoBox.scss";

const VideoBox = ({ link, title, speaker, text }) => {
  return (
    <div className="youtube-container">
      <div className="invite-item youtube">
        <iframe
          src={link}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="youtube-embed"
        />
      </div>
      <div className="invite-item">
        <h3 className="title">{title}</h3>
        <h3 className="title">{speaker}</h3>
        <hr className="line" />
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default VideoBox;
