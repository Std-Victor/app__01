import React from "react";
import "./card-list.styles.css";
import { Card } from "../Card/card.component";

export const CardList = (props) => {
  const getId = (id) => props.studentId(id);
  return (
    <div className="card-list">
      {props.students.map((std) => (
        <Card
          openModal={props.openModal}
          key={std.id}
          student={std}
          getStudentId={getId}
        />
      ))}
    </div>
  );
};
