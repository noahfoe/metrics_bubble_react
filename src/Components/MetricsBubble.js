import React from "react";
import "../App.js"; 

/*
MetricsBubble Component displays a "bubble" of user inputted metrics.
The styling for this widget is found in styles.css

Parameters:
  1. label - String - This is  of the bubble (e.g. "Upper Body", "Core", etc.)
  2. weight - int - This is the value in the middle of the bubble: Restrictions are 0 - 350
  3. unit - String - This is a constant value of "lbs"
*/
function MetricsBubble(props) {
    return (
        <div className="bubble" id="circle">
        <div className="center">
          <div className="label" id="font-face-helvetica">{props.label}</div>
          <div className="weight" id="font-face-league-gothic">{props.weight}</div>
          <div className="unit" id="font-face-league-gothic">{props.unit}</div>
        </div>
      </div>
    );
}

export default MetricsBubble;