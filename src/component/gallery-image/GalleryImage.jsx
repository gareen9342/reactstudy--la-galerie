import "./GalleryImage.css";

import GalleryImageDetails from "./gallery-details/GalleryImageDetails";

const GalleryImage = props => {
  const { url } = props;

  return (
    <div className="Gallery__image-frame">
      <img src={url} alt={url} className="Gallery__image" />
      {/* 뭘 전달할까요? */}
      {/* <GalleryImageDetails /> */}
      <GalleryImageDetails id={props.id} />
    </div>
  );
};

export default GalleryImage;
