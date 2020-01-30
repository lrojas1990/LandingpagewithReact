import React from "react"; 

const Header = (props) => {


    return (

        <header class="jumbotron my-4">
        <h1 class="display-3">{props.d1}</h1>
        <p class="lead">{props.d2}</p>
        <a href="#" class="btn btn-primary btn-lg">{props.d3}</a>
      </header>
    )
}

export default Header;