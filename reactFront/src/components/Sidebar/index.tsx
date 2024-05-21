import SettingsIcon from "@mui/icons-material/Settings";
import {
	Apps,
	ChatBubbleOutline,
	GridViewOutlined,
	Home,
	LogoutOutlined,
	Notifications,
	Group,
} from "@mui/icons-material";
import { handleLogout } from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar: React.FC = () => {
	const [navLinks, setNavLinks] = useState([
		{
			title: "Home",
			element: "home",
			category: "General",
			icon: <Home sx={{ color: "#555" }} width={"22px"} height={"22px"} />,
			active: true,
		},
		{
			title: "Boards",
			element: "board",
			category: "Work",
			icon: <Apps sx={{ color: "#555" }} width={"22px"} height={"22px"} />,
			active: false,
		},
		{
			title: "Projects",
			element: "projects",
			category: "Work",
			icon: (
				<GridViewOutlined
					sx={{ color: "#555" }}
					width={"22px"}
					height={"22px"}
				/>
			),
			active: false,
		},
		{
			title: "Teams",
			element: "teams",
			category: "Work",
			icon: <Group sx={{ color: "#555" }} width={"22px"} height={"22px"} />,
			active: false,
		},
		{
			title: "FAQs",
			element: "faqs",
			category: "Support",
			icon: (
				<ChatBubbleOutline
					sx={{ color: "#555" }}
					width={"25px"}
					height={"25px"}
				/>
			),
			active: false,
		},
		{
			title: "Notifications",
			element: "notifications",
			category: "General",
			icon: (
				<Notifications
					sx={{ color: "#555" }}
					width={"22px"}
					height={"22px"}
				/>
			),
			active: false,
		},
		{
			title: "Settings",
			element: "settings",
			category: "General",
			icon: (
				<SettingsIcon
					sx={{ color: "#555" }}
					width={"24px"}
					height={"24px"}
				/>
			),
			active: false,
		},
	]);

	const categories = ["General", "Work", "Support"];

	return (
		<div className="fixed left-0 top-0 md:w-[200px] w-[60px] overflow-hidden h-full flex flex-col border-r-[0.1px] border-slate-200">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
				<span className="text-orange-500 font-semibold text-2xl md:block hidden">
					<svg
						id="logo-35"
						width="50"
						height="39"
						viewBox="0 0 50 39"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
							className="ccompli1"
							fill="#007AFF"
						></path>
						<path
							d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
							className="ccustom"
							fill="#312ECB"
						></path>
					</svg>
				</span>
				<span
					className="font-semibold text-2xl md:block hidden"
					style={{ color: "orange" }}
				>
					TDLApp
				</span>
			</div>
			<div className="w-full h-[calc(100vh-70px)] flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
				{categories.map((category) => (
					<div key={category} className="w-full">
						<h2 className="font-semibold text-gray-400 mb-2 md: ml-[-5px] overflow-hidden">
							{category}
						</h2>
						{navLinks
							.filter((link) => link.category === category)
							.map((link, index) => (
								<Link
									to={`/${link.element.toLowerCase()}`}
									key={link.title}
									className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-500 hover:text-white px-2 py-3 cursor-pointer ${
										link.active
											? "bg-orange-500 text-white"
											: "bg-transparent"
									}`}
								>
									{link.icon}
									<span className="font-medium text-[15px] md:block hidden">
										{link.title}
									</span>
								</Link>
							))}
					</div>
				))}
				<button
					className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-500 hover:text-white px-2 py-3 cursor-pointer bg-gray-200"
					onClick={handleLogout}
				>
					<LogoutOutlined />
					<span className="font-medium text-[15px] md:block hidden">
						Log Out
					</span>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
