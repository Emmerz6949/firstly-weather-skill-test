import React from "react";

function Nav(props) {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active"></li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="text" placeholder="Zip Code" aria-label="Zip Code" maxLength="5" value={props.value} onChange={props.inputChange} onFocus={props.focus} onBlur={props.blur} />
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSubmit}>Search</button>
            </form>
         </div>
      </nav>
   );
}

export default Nav;