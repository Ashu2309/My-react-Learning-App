import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import newsData from "../news";

const Newstest = ({ news, increase, setincrease, catTitle }) => {
  // useEffect(() => {
  //   setnews(newsData);
  //   console.log(news);
  // });

  return (
    <>
      <div className="parent_news d-flex flex-column justify-content-start">
        <div className="card_header text-center  my-3">
          <h1 className="text-light" style={{ paddingTop: "80px" }}>
            Daily News
            <span style={{ color: "DodgerBlue", fontSize: "25px" }}>
              {" "}
              - {catTitle}
            </span>
          </h1>
        </div>
        <div className="news_card">
          {news.map((elem, ind) => {
            if (ind < increase) {
              return (
                <div className="card_child" key={ind}>
                  <figure>
                    <img src={elem.urlToImage} alt="some img" />
                  </figure>
                  <div className="px-3  card_details">
                    <h6>
                      {elem.title.split(" ").slice(0, 10).join(" ") + " !"}
                    </h6>

                    <div className="auth_description d-flex justify-content-between align-items-center">
                      {elem.author ? (
                        <p>{elem.author}</p>
                      ) : (
                        <p>Not Available</p>
                      )}
                      <p>{elem.publishedAt.split("-").slice(0, 2).join()}</p>
                    </div>
                    <div className="description">
                      <p>
                        {elem.description.split(" ").slice(0, 5).join(" ") +
                          "."}
                      </p>
                    </div>
                    <Button
                      variant="contained"
                      title="learn more"
                      className="btn_more"
                      href={elem.url}
                    >
                      More
                    </Button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="my-5 w-100 text-center">
          {increase < 19 ? (
            <Button
              variant="text"
              title="learn more"
              className="w-25"
              onClick={() => setincrease(increase + 6)}
              // href={elem.url}
            >
              More
            </Button>
          ) : (
            <Button
              variant="text"
              title="learn more"
              className="w-25"
              onClick={() => setincrease(increase - 15)}
              // href={elem.url}
            >
              Less
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Newstest;
