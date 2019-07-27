import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

// export class Home extends React.Component {
// 	render() {
// 		return (
// OR

export const Home = () => {
	return (
		<div className="here">
			<h1 className="four">04 | </h1>
			<h1 className="three">03 | </h1>
			<h1 className="two">02 | </h1>
			<h1 className="one">01 </h1>
		</div>
	);
};
