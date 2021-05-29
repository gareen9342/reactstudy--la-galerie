import "./Gallery.css";
import UnsplashService from '../../service/UnsplashService';
import React, { useState, useEffect, useRef } from "react";
import PhotoContext from '../../context/PhotoContext';
import GalleryImage from "../../component/gallery-image/GalleryImage";
// 1-1. 뭘 초깃값으로 지정해야 할까요?
const initPhotos = ["contemporary art", "modern art", "art nouveau", "pop art", "dog", "cat"];

const Gallery = () => {
  // ** 기존 코드 **
  // const [imageURLs, setImageURLs] = useState([]);
  // **************

  // 이쁜 그림을 치우는 건 너무한 일 같아요.
  // 그래서 그림에 마우스를 hover 하면 (css 로 구현되어있음)
  // 이미지에 대한 정보가 pop-up(overlap) 하도록 바꾸려 합니다.
  //
  // 1. 이제 는 image url 만 필요하지 않을 것 같습니다!
  const idx = Math.floor(Math.random() * initPhotos.length);
  const page = Math.floor(Math.random() * 100) + 1;
  const queryKeyword = useRef(initPhotos[idx]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    (async () => {
      // ** 기존 코드 **
      (async function fetchImageURLs() {
        let imgUrls = await UnsplashService.get7Photos(queryKeyword.current, page);
        setPictures(imgUrls);
      })();
      // **************

      //
      // 2. 기존에 불러오던 이미지도 조금 조정하여 그림을 무작위로 가져와봅시다.
      //
      // 먼저, UnsplashService.get7Photos() 코드를 보고나서,
      //
      // 2-1. query keyword ("contemporary art", "modern art", "art nouveau", "pop art", "dog", "cat")
      //      중 1 만 랜덤 선택 되도록 queryKeyword 를 구성 하세요.
      // 2-2. page 를 1 ~ 100 중 랜덤 선택 되도록 조정하세요. (+ 예외 처리 가능)
      //      
      // 3. 전부다 구현하셨으면, local state 를 이용하는 조건에서, context 를 이용하도록 바꾸세요. (./src/context/PhotoContext.jsx)
    })();
  }, []);


  return (
    <PhotoContext.Provider value={pictures.results}>
      <div className="Gallery">
        {
          pictures?.results && pictures.results.map(x =>
            <GalleryImage
              key={x.id}
              id={x.id}
              url={x.urls.small}
            />
          )
        }
      </div>
    </PhotoContext.Provider>

  );
};

export default Gallery;


