import React from "react";

const GallaryImage = ({imgUrl, onClickImg}) => {
  // props 는 자유롭게 받아서 하기!
  // return <img ..... /> 같이
  console.log(imgUrl)
  return (<>
  <img src={imgUrl} onClick={onClickImg}/>
  </>)
};

export default GallaryImage;
