// import React from "react";

import { NavLink } from "react-router-dom";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PropTypes from "prop-types";

function NavItem({ to, icon }) {
	return (
		<NavLink
			to={to}
			end
			className={({ isActive }) =>
				`w-full text-center p-3  rounded-xl transition-colors ${
					isActive
						? "bg-vibrant-pink text-white"
						: "text-slate-gray hover:text-white hover:bg-gray-700"
				}`
			}
		>
			<div className="h-6 w-6 mx-auto">{icon}</div>
		</NavLink>
	);
}

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
};

function Navbar() {
	return (
		<nav className="bg-deep-black h-screen flex flex-col items-center p-5 w-20">
			<div className="logo mb-16">
				<img src="/convo.svg" alt="logo" className="h-10" />
			</div>
			<ul className="flex flex-col space-y-4  items-center">
				<NavItem to="/" icon={<HomeOutlinedIcon />} />
				<NavItem to="/chat" icon={<ChatBubbleOutlineOutlinedIcon />} />
				<NavItem to="/friends" icon={<PeopleAltOutlinedIcon />} />
			</ul>
		</nav>
	);
}

export default Navbar;
