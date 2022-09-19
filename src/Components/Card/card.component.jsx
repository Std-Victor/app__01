import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div
    className="card-container"
    onClick={() => props.getStudentId(props.student.id)}
  >
    <div className="img-container">
      <img src={props.student.image} alt="user_profile" />
    </div>
    <h3>
      {props.student.first_name} {props.student.last_name}
    </h3>
  </div>
);
