import React from "react"; 

const Cards = (props) => {


        return (
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card h-100">
                    <img class="card-img-top" src={props.c4} alt=""></img>
                        <div class="card-body">
                            <h4 class="card-title">{props.c1}</h4>
                            <p class="card-text">{props.c2}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">{props.c3}</a>
                        </div>
                    </div>
                </div>
                )
            }

export default Cards;