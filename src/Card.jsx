import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card ">
        <img src={props.imgscr} alt="myPic" className="card _img" />
        <div className="card_info">
          <span className="card_category">{props.sname}</span>
          <h3 className="card title">{props.title}</h3>
          <a href={props.links} target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
