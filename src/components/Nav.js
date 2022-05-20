import React, { useState } from "react";
import piggy from "../assets/porco.png";
import Sort from "./Sort";
import CheckBox from "./CheckBox";

const Nav = () => {
	const [isCheck, setIsCheck ] = useState(false)
	
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<CheckBox />
			<Sort />
		</div>
	);
};

export default Nav;
