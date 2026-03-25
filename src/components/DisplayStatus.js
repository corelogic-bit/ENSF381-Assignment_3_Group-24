import React from "react";

function DisplayStatus({ type, message }) {
  var style = {
    color: type === "success" ? "green" : "red",
    fontWeight: "bold",
    marginTop: "10px",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <p>{message}</p>
    </div>
  );
}

export default DisplayStatus;
