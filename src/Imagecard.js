const Imagecard = ({ image }) => {
  return (
    <div className="card">
      <img src={image.urls.small} />

      

      <p>{image.user.username}</p>
      {/* <p>{image.alt_description}</p> */}
      <img src={image.user.profile_image.small} />
    </div>
  );
};

export default Imagecard;
