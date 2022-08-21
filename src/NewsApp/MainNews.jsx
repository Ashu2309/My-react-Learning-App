import React, { useState, useEffect } from "react";
import NewNavbar from "./NewNavbar";
import Newstest from "./Newstest";

const MainNews = () => {
  const [news, setnews] = useState([]);
  const [increase, setincrease] = useState(6);
  const [category, setcategory] = useState("business");
  const [catTitle, setcatTitle] = useState("business");

  useEffect(() => {
    const getData = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=583a50eea2184b90bde53226002d13a6`;
      const data = await fetch(url);
      const jData = await data.json();
      //   console.log(jData);
      //   console.log(jData.articles[0]);
      setnews(jData.articles);
      // console.log(news[0]);
    };
    getData();
  });

  const changeCat = (elem) => {
    setcategory(elem);
    setcatTitle(elem);
  };
  return (
    <>
      <NewNavbar changeCat={changeCat} />
      <Newstest
        news={news}
        increase={increase}
        setincrease={setincrease}
        catTitle={catTitle}
      />
    </>
  );
};

export default MainNews;
