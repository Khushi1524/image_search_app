const Imagecard = ({ image }) => {
  return (
    <div className="card">
      <img src={image.urls.small} />

      <div className="details">
        <div className="detail1">
          
          {/* <p>{image.alt_description}</p> */}
          <img id="profileimg" src={image.user.profile_image.small} />
          <p>{image.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;
