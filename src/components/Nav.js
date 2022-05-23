import React, { useState } from "react";
import piggy from "../assets/porco.png";
import Filter from "./Filter";
import HogContainer from "./HogContainer";

const Nav = ({ hogs }) => {
	const [isCheck, setIsCheck] = useState(false)
	const [sortFilter, setSortFilter] = useState("name")

	const handleCheckBox = () => setIsCheck(!isCheck)
	
	const handleSort = (e) => {
		setSortFilter(e.target.value)
	}
	
	const sortPigs = hogs.sort((a, b) => {
		// if (sortFilter === "default") return hogs
		if (sortFilter === "weight") {
			return a.weight - b.weight
		}
		else if (sortFilter === "name") {
			if (a.name < b.name) return -1;
			return 1;
		}
	}) 
	
	const filteredPigs = sortPigs.filter(hog =>
		(isCheck === false) ? hog : (hog.greased === true))

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
			<HogContainer hogs={filteredPigs} />
		</div>
	);
};

export default Nav;
