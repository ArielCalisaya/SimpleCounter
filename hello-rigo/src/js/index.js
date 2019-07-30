//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		/** Here is the limit of the counter, in this case I set the limit for 60 seconds per cell. */
		<div className="here">
			<h2 className="four">{props.digitFour % 60}</h2>
			<h2 className="three">{props.digitThree % 60}</h2>
			<h2 className="two">{props.digitTwo % 60}</h2>
			<h2 className="one">{props.digitOne % 60}</h2>
		</div>
	);
}
/** In this lane we set the property of the simple counter function. */
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
/** This is the function that gives life to the stopwatch  */
let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	//render your react application
    /**counter ++ = adding the number per all digits */
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
        /**we print the function in this id */
		document.querySelector("#app")
	);
}, 1000);
