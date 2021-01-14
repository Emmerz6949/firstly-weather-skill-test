import React from "react";

function Fave(props) {
  return (
    <span className="list-group-item list-group-item-action" style={{ display: `${props.styling}`}} onClick={props.handleCityClick}>{props.faveCity} ({props.favedZip})
      <button type="button" className="btn btn-default" style={{ display: "inline", float: "right" }} onClick={props.handleXClick}>X</button>
    </span>
  );
}

export default Fave;