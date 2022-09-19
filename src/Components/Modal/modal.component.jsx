import React from "react";
import "./modal.styles.css";
import { InfoBox } from "../Info-box/info-box.component";

export const Modal = ({ open, onclose, student }) => {
  if (!open) return null;
  const [std] = [...student];
  const name = `${std.first_name} ${std.last_name}`;
  const info = Object.entries(std).splice(1, 5);
  let markes = [["Subject", "Marke"]];
  std.markes.forEach((std) => {
    const [d] = Object.entries(std);
    markes.push(d);
  });
  return (
    <div className="overlay" onClick={onclose}>
      <div onClick={(e) => e.stopPropagation()} className="modalContainer">
        <div className="modal-header">
          <div className="img-container">
            <img src={std.image} alt={name} />
          </div>
          <div className="std-info">
            <InfoBox data={info} id={std.id} />
          </div>
        </div>
        <div className="model-footer">
          <InfoBox data={markes} id={std.id} />
        </div>
      </div>
    </div>
  );
};
