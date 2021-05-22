import React, { useRef, useState, useEffect } from "react";
import UnsplashService from "../service/UnsplashService"
import GallaryImage from "./GallaryImage";
import "./GallaryMain.css";

const GallaryMain = () => {
  // 0. query 에 사용할 키워드 ! (useRef 로 사용하시오)
  // 왜 useRef 를 사용 했나요? ->
  /**
   * useRef는 컴포넌트에서 조회 및 수정할 수 있는 변수를 관리해줄 수 있는 용도가 있다. 
   * 또 useRef로 관리하는 변수는 설정 후 바로 조회가 가능할 수 있다고 한다.  
   * 컴포넌트가 마운트 된 후 useEffect에서 데이터 패칭을 통해 이미지 주소를 가져올 것인데.
   * 이렇게 하면 데이터 패팅에서 사용할 참조할 변수를 미리 세팅해 놓을 수 있다고 생각해서 이렇게 세팅하였다. 
   */
  const queryKeyword = useRef("contemporary arts");
  
  // 1. 사진 URL 들을 저장할 배열 state 를 만든다.
  // 왜 ... 했나요 ? ->
  /**
   * fetchData 를 통해 받아와서 보여줄 데이터를 array형태로 응답받을 것이기 때문에. 
   * 초기 마운트 되고 그 다음에 useEffect를 통해 실행한 패칭함수를 통해 가져온 데이터를 
   * 화면에 보여줄 데이터 array에 새롭게 useState를 통해 세팅해주며
   * 이 로직을 통해서 웹에 보이는 뷰를 바꾸어 줄 것이기 떄문에 이렇게 세팅하였다. 
   */
  const [pictures, setPictures]= useState([])
  // 2. 컴포넌트 렌더 시에 처음에 단 한 번, UnsplashService.getPhotoURLs() 를 이용해 사진 URL 들을 얻어온 다음, state 로 저장한다. (getPhotoURLs() 는 async 함수 임)
  // 왜 ... 했나요 ? ->
  /**
   * 페이디 로드되고 난 후에 데이터를 패칭하기 위함인데,
   * useEffect 내부에 있는 함수는 화면렌더링 후에 실행이 되게 되는데, 
   * 의존성 배열에 값을 넣지 않으면 화면 렌더링이 된 후 한 번만 호출이 된다는 점을 이용하여 
   * 의존성 배열엔 아무것도 넣지 않고 데이터패칭함수를 useEffect 에 넣어주었다. 
   */
  useEffect(() => {
    const fetchData = async () => {
      try{
        let imgUrls = await UnsplashService.getPhotoURLs(queryKeyword.current) 
        setPictures(imgUrls)
      }catch(err){
        console.error(err)
      }
    }
    fetchData();
  }, [])
  // 3-1. 2. 에서 받아온 사진 URL 들과 <img/> 를 이용하여 JSX 를 만들기! JSX 는 useMemo() 로 caching 할 수 있다.
  // 3-2. 각 img 마다 클릭 시에 클릭 된 img 를 삭제 하도록 구현 -> array 조작을 이용 (젤 어려움)
  // 3-3.    img 는 GallaryImage 컴포넌트로 child 로 제작하기!

  const onClickImg = (e) => {
    setPictures(pictures.filter(x => x !== e.target.src))
  }
  // 왜 ... 했나요 ? ->
  /**
   * JSX를 useMemo 하기 위해 useMemo에는 만들어진 jsx를 리턴하는 함수를 넣어주었다. 
   * 이미지 클릭시에 이벤트 값을 받아 타겟의 src를 받아서 (현재 뿌려주는 값이 src이므로)
   * 해당 값을 없애 새롭게 기존 값에 세팅할 수 있도록 구현하였다. 
   */

  // 4. 3. 에서 만든 JSX 를 리턴!
  return <div className="GallaryMain">
    <div>
      {pictures && pictures.length > 0 ?
        pictures.map(imgurl => <GallaryImage imgUrl={imgurl} onClickImg={onClickImg}/>)
      :
      <p style={{color:"red"}}>이미지가 더 없어요 ! :(</p>
      }
    </div>
  </div>;
};

export default GallaryMain;
