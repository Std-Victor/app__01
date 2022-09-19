import React from "react";
import "./info-box.styles.css";

export const InfoBox = ({ data, id }) => {
  const txtFormat = (txt) =>
    txt
      .toLowerCase()
      .trim()
      .split("_")
      .map((t) => t.replace(t[0], t[0].toUpperCase()))
      .join(" ");

  return data.map(([k, v]) => (
    <div className="box-field" key={k}>
      <p>{txtFormat(k)}</p>
      <span>{v}</span>
    </div>
  ));
};
