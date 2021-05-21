import React, { useRef, useState, useEffect } from "react";
import UnsplashService from "../service/UnsplashService"
import GallaryImage from "./GallaryImage";
import "./GallaryMain.css";

const GallaryMain = () => {
  // 0. query 에 사용할 키워드 ! (useRef 로 사용하시오)
  // 왜 useRef 를 사용 했나요? ->
  const queryKeyword = useRef("contemporary arts");
  console.log("query=",queryKeyword)
  // 1. 사진 URL 들을 저장할 배열 state 를 만든다.
  // 왜 ... 했나요 ? ->
  /**
   * 
   * 비동기로직을 통해 로드된 데이터를을 받아와서 변경해 줄 것이기 때문에, 
   * 초기 마운트 되고 그 다음에 useEffect를 통해서 데이터를 array에 새롭게 useState를 통해 세팅해주며
   * 이 로직을 통해서 웹에 보이는 뷰를 바꾸어 줄 것이기 떄문에
   * 
   * 
   */
  const [pictures, setPictures]= useState([])
  // 2. 컴포넌트 렌더 시에 처음에 단 한 번, UnsplashService.getPhotoURLs() 를 이용해 사진 URL 들을 얻어온 다음, state 로 저장한다. (getPhotoURLs() 는 async 함수 임)
  // 왜 ... 했나요 ? ->
  useEffect(() => {

    const fetchData = async () => {
      try{
        let temp = await UnsplashService.getPhotoURLs("office") 
        console.log(temp)
        setPictures(temp)
      }catch(err){
        console.error(err)
      }
    }
    // =====
    fetchData();
    
    return () => {
      console.log("unmounting")
    }
  }, [])
  // 3-1. 2. 에서 받아온 사진 URL 들과 <img/> 를 이용하여 JSX 를 만들기! JSX 는 useMemo() 로 caching 할 수 있다.
  // 3-2. 각 img 마다 클릭 시에 클릭 된 img 를 삭제 하도록 구현 -> array 조작을 이용 (젤 어려움)
  // 3-3.    img 는 GallaryImage 컴포넌트로 child 로 제작하기!

  const onClickImg = (e) => {
    // console.log(e.target.src)
    setPictures(pictures.filter(x => x !== e.target.src))
  }
  // 왜 ... 했나요 ? ->

  // 4. 3. 에서 만든 JSX 를 리턴!
  return <div className="GallaryMain">
    <input ref={queryKeyword} type="text" value="aa" readOnly/>
    <div>
      {pictures && pictures.length > 0 &&
        pictures.map(imgurl => <GallaryImage imgUrl={imgurl} onClickImg={onClickImg}/>)}
    </div>
  </div>;
};

export default GallaryMain;
