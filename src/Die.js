import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#D7136D" : "white",
    color: props.isHeld ? "#fff" : "black",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
