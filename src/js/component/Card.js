import PropTypes from "prop-types";
import React from "react";

export const Card = ({item}) => {
    return (
        <div ClassName="card" style={{width: "18rem"}}>
            <img src={item.image} ClassName="card-img-top" alt="..."/>
            <div ClassName="card-body">
                <h5 ClassName="card-title">{item.name}</h5>
                <p ClassName="card-text">{item.status}</p>
                <a href="#" ClassName="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object
};