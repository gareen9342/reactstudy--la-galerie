import React, {useMemo} from "react";

const GallaryImage = ({imgUrl, onClickImg}) => {
  // props 는 자유롭게 받아서 하기!
  // return <img ..... /> 같이
  const Images = useMemo(() => <img src={imgUrl} onClick={onClickImg}/>, [imgUrl, onClickImg])
  return (<>
  {Images}
  </>)
};

export default GallaryImage;
