import { useContext } from 'react';
import "./GalleryImageDetails.css";
import PhotoContext from "../../../context/PhotoContext";
const GalleryImageDetails = props => {
  const photoContext = useContext(PhotoContext);
  const info = photoContext.find(x => x.id === props.id);
  return (
    <div className="Gallery__image-detail">
      <h1> {info.description} </h1>
      <h2>{`${info.user.first_name} ${info.user.last_name}`} </h2>
      <a href={info.urls.small} target="_blank" rel="noreferrer"> link~ </a>
      <p> {info.alt_description} </p>
    </div>
  );
};

export default GalleryImageDetails;
