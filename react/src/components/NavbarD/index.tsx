import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    NotificationsOutline,
    PersonCircle,
    SearchOutline,
    SettingsOutline,
    ShareSocialOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";
import { useNavigation } from "../../providers/NavigationProvider";

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const {
        reset,
        isNotificationsActive,
        isSettingsActive,
        setSettingsActive,
        setNotificationsActive,
        isShareActive,
        setShareActive,
    } = useNavigation();

    const handleOptionSelect = (option: any) => {
        console.log("Option selected:", option);
        // Vous pouvez ajouter ici la logique pour traiter la sélection de l'utilisateur, comme la navigation vers une autre page
        setIsDropdownOpen(false); // Fermer la liste déroulante après la sélection
    };

    const options = ["Option 1", "Option 2", "Option 3"];
    const naLinks = [
        {
            name: "Share",
            icon: ShareSocialOutline,
            active: isShareActive,
        },
        {
            name: "Settings",
            icon: SettingsOutline,
            active: isSettingsActive,
        },
        {
            name: "Notifications",
            icon: NotificationsOutline,
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
        <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-orange-500">
            <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={handleDropdownToggle}
            >
                <PersonCircle color={"white"} width={"28px"} height={"28px"} />
                <span className="font-semibold md:text-lg text-sm whitespace-nowrap text-white">
                    Board Name
                </span>
                {isDropdownOpen ? (
                    <ChevronUp
                        color={"white"}
                        width={"16px"}
                        height={"16px"} />
                ) : (
                    <ChevronDown
                        color={"white"}
                        width={"16px"}
                        height={"16px"}
                    />
                )}
            </div>
            {isDropdownOpen && (
                <ul className="absolute top-[100%] left-5 z-10 bg-white border border-gray-300 rounded-md mt-1 w-[25%]">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            <div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
                <SearchOutline color={"#999"} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-100 outline-none text-[15px]"
                />
            </div>
            <div className="md:flex hidden items-center gap-4">
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
                        <link.icon color={"#444"} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
