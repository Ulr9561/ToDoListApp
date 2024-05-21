import {
	NotificationsOutlined,
	SearchOutlined,
	Settings,
	Share,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { useNavigation } from "../../providers/NavigationProvider";

const Navbar: React.FC = () => {

	const {
		reset,
		isNotificationsActive,
		isSettingsActive,
		setSettingsActive,
		setNotificationsActive,
		isShareActive,
		setShareActive,
	} = useNavigation();


	const naLinks = [
		{
			name: "Share",
			icon: Share,
			active: isShareActive,
		},
		{
			name: "Settings",
			icon: Settings,
			active: isSettingsActive,
		},
		{
			name: "Notifications",
			icon: NotificationsOutlined,
			active: isNotificationsActive,
		},
	];

	const handleClick = (element: string) => {
		reset();
		if (element === "share") {
			reset();
			setShareActive(true);
		} else if (element === "settings") {
			reset();
			setSettingsActive(true);
		} else if (element === "notifications") {
			reset();
			setNotificationsActive(true);
		} else {
			reset();
		}
	};

	return (
		<div className="md:w-[calc(100%-200px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[50px] top-0 md:left-[200px] left-[60px] border-b border-slate-300 bg-orange-500">
			<div className="w-full flex items-center justify-end flex-grow">
				<div className="md:w-[300px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
					<SearchOutlined sx={{ color: "#999" }} />
					<input
						type="text"
						placeholder="Search"
						className="w-full bg-gray-100 outline-none text-[15px]"
					/>
				</div>
				<div className="flex items-center gap-4 ml-4">
					{naLinks.map((link, index) => (
						<Link
							key={index}
							to={`/${link.name.toLowerCase()}`}
							className={`grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer ${
								link.active
									? "bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"
									: ""
							}`}
							onClick={() => handleClick(link.name.toLowerCase())}
						>
							<link.icon sx={{ color: "#444" }} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
