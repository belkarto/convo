import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { LogoutOutlined, SettingsOutlined } from "@mui/icons-material";
import useAuth from "../hooks/useAuth";

function TopBar() {
	const { user, logout } = useAuth();
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	return (
		<div className="bg-deep-black h-16 w-full flex items-center justify-between px-6 shadow-lg">
			{/* Search Bar */}
			<form
				onSubmit={handleSearch}
				className="flex items-center space-x-4 w-1/3"
			>
				<SearchOutlinedIcon className="text-slate-gray h-6 w-6 absolute ml-6 pointer-events-none" />
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="pl-10 pr-4 py-2 w-full bg-light-black  rounded-lg outline-none focus:ring-2 focus:ring-vibrant-pink"
				/>
			</form>

			{/* Icons and Profile */}
			<div className="flex items-center space-x-6">
				{/* Notification Icon */}
				<button className="text-white hover:text-vibrant-pink relative">
					<NotificationsNoneOutlinedIcon className="h-8 w-8" />
					{/* Notification badge */}
					<span className="absolute -top-1 -right-1 bg-soft-pink text-deep-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
						{5}
					</span>
				</button>

				{/* Profile Dropdown */}
				<div className="relative">
					<button
						className="flex items-center text-white hover:text-vibrant-pink focus:outline-none"
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					>
						<Avatar
							alt={user.username}
							src={user.avatar}
							className="h-8 w-8 mr-2"
						/>
						<span>{user.username}</span>
					</button>

					{/* Dropdown Menu */}
					{isOpenMenu && (
						<div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700 z-50">
							<NavLink
								to="/profile"
								className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 rounded-t-lg"
								onClick={() => setIsOpenMenu(false)}
							>
								<PersonOutlineOutlinedIcon className="h-6 w-6 mr-2" />
								Profile
							</NavLink>
							<NavLink
								to="/settings"
								className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
								onClick={() => setIsOpenMenu(false)}
							>
								<SettingsOutlined className="h-6 w-6 mr-2" />
								Settings
							</NavLink>
							<NavLink
								to="/auth"
								className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 rounded-b-lg text-red-400 hover:text-red-300"
								onClick={() => {
									logout();
									setIsOpenMenu(false);
								}}
							>
								<LogoutOutlined className="h-6 w-6 mr-2" />
								Logout
							</NavLink>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default TopBar;
