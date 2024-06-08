
const Imagecard = ({image}) =>{
    return(
       
         <div className="card">
             <img
            src={image.urls.small}
            />

            <p>{image.user.username}</p>
            <p>{image.alt_description}</p>
         </div>
      


    )
}

export default Imagecard;