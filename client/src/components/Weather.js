import React from "react";

function Weather(props) {
  return (
    <div className="card" style={{ marginTop: "35px" }}>
      <div className="card-body" style={{ marginTop: "0px" }}>
        <h4 className="card-title">
          <b>{props.city}</b>
        </h4>
        <div className="row">
          <div className="col-sm-4">
            <h4>{props.temp}°</h4>
            <h5>{props.weather}</h5>
          </div>
          <div className="col-sm-4 col-5"></div>
          <div className="col-sm-4">
            <h5>Pressure: {props.pressure} mb</h5>
            <h5>Humidity: {props.humidity}%</h5>
            <h5>Wind: {props.speed} mph</h5>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4 col-5"></div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
        <span className="btn btn-primary" onClick={props.addFave}>Add to favorites</span>
      </div>
    </div>
  );
}

export default Weather;