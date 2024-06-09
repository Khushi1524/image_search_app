const Imagecard = ({ image }) => {
  return (
    <div className="card">
      <img src={image.urls.small} />

      <div className="details">
        <p>🤍{image.likes}</p>
        <div className="detail1">
          <img id="profileimg" src={image.user.profile_image.small} />
          <p>{image.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;
