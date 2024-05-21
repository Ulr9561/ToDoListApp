import {
    AppsOutline,
    GridOutline,
    HomeOutline,
    LogOutOutline,
    NotificationsOutline,
    PeopleOutline,
    ChatbubbleEllipsesOutline,
    SettingsOutline,
} from "react-ionicons";
import { handleLogout } from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigation } from "../../providers/NavigationProvider";

const Sidebar: React.FC = () => {
    const {
        reset,
        isNotificationsActive,
        isSettingsActive,
        setSettingsActive,
        setNotificationsActive,
        isHomeActive,
        isBoardsActive,
        isFaqsActive,
        isProjectsActive,
        isTeamsActive,
        setBoardsActive,
        setHomeActive,
        setFaqsActive,
        setProjectsActive,
        setTeamsActive,
    } = useNavigation();

    const [navLinks, setNavLinks] = useState([
        {
            title: "Home",
            element: "home",
            icon: <HomeOutline color={"#555"} width={"22px"} height={"22px"} />,
            active: isHomeActive,
        },
        {
            title: "Boards",
            element: "board",
            icon: <AppsOutline color={"#555"} width={"22px"} height={"22px"} />,
            active: isBoardsActive,
        },
        {
            title: "Projects",
            element: "projects",
            icon: <GridOutline color={"#555"} width={"22px"} height={"22px"} />,
            active: isProjectsActive,
        },
        {
            title: "Teams",
            element: "teams",
            icon: (
                <PeopleOutline color={"#555"} width={"22px"} height={"22px"} />
            ),
            active: isTeamsActive,
        },
        {
            title: "FAQs",
            element: "faqs",
            icon: (
                <ChatbubbleEllipsesOutline
                    color={"#555"}
                    width={"25px"}
                    height={"25px"}
                />
            ),
            active: isFaqsActive,
        },
        {
            title: "Notifications",
            element: "notifications",
            icon: (
                <NotificationsOutline
                    color={"#555"}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: isNotificationsActive,
        },
        {
            title: "Settings",
            element: "settings",
            icon: (
                <SettingsOutline
                    color={"#555"}
                    width={"24px"}
                    height={"24px"}
                />
            ),
            active: isSettingsActive,
        },
    ]);

    const handleLinkClick = (index: any, element: string) => {
        reset();
        const updatedLinks = [...navLinks];
        updatedLinks.forEach((link, i) => {
            link.active = i === index;
        });
        setNavLinks(updatedLinks);
        if (element === "settings") {
            setSettingsActive(true);
        } else if (element === "notifications") {
            setNotificationsActive(true);
        } else if (element === "faqs") {
            setFaqsActive(true);
        } else if (element === "teams") {
            setTeamsActive(true);
        } else if (element === "home") {
            setHomeActive(true);
        } else if (element === "board") {
            setBoardsActive(true);
        } else if (element === "projects") {
            setProjectsActive(true);
        } else {
            reset();
        }
    };
    return (
        <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
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
                        {" "}
                        <path
                            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                            className="ccompli1"
                            fill="#007AFF"
                        ></path>{" "}
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
            <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
                {navLinks.map((link, index) => {
                    return (
                        <Link
                            to={`/${link.element.toLowerCase()}`}
                            key={link.title}
                            className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-500 hover:text-white px-2 py-3 cursor-pointer ${
                                link.active
                                    ? "bg-orange-500 text-white"
                                    : "bg-transparent"
                            }`}
                            onClick={() => handleLinkClick(index, link.element)}
                        >
                            {link.icon}
                            <span className="font-medium text-[15px] md:block hidden">
                                {link.title}
                            </span>
                        </Link>
                    );
                })}
                <button
                    className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-500 hover:text-white px-2 py-3 cursor-pointer bg-gray-200"
                    onClick={handleLogout}
                >
                    <LogOutOutline />
                    <span className="font-medium text-[15px] md:block hidden">
                        Log Out
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
