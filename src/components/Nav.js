import React, { useState } from "react";
import piggy from "../assets/porco.png";
import Filter from "./Filter";
import HogContainer from "./HogContainer";

const Nav = ({ hogs }) => {
	const [isCheck, setIsCheck] = useState(false)
	const [sortFilter, setSortFilter] = useState("default")

	const handleCheckBox = () => setIsCheck(!isCheck)

	const handleSort = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<Filter onHandleCheckBox={handleCheckBox} onHandleSort={handleSort} />
			<HogContainer hogs={hogs} isCheck={isCheck} />
		</div>
	);
};

export default Nav;
