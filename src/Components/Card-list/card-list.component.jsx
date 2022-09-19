import React from 'react';
import './card-list.styles.css';
import {Card} from '../Card/card.component';

export const CardList = props => {

  return (
    <div className="card-list">
      {props.students.map(std => (
        <Card key={std.id} student={std} />
      ))}
    </div>
  )
}