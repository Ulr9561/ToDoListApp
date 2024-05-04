import React, { useState } from "react";
import taskImage from "../../assets/images/task.jpg";
import { useNavigation } from "../../providers/NavigationProvider";
import AuthUser from "../../hooks/AuthUser";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import RecentlyView from "./RecentlyView";
import SharedFiles from "./SharedFiles";
import SharedProjects from "./SharedProjects";
import { StarOutline } from "react-ionicons";

export const Home: React.FC = () => {
    const { user, setUser } = AuthUser();
    const {
        reset,
        isRecentlyView,
        isSharedFiles,
        isSharedProjects,
        setRecentlyView,
        setSharedFiles,
        setSharedProjects,
    } = useNavigation();

    const handleClick = (index: any, element: string) => {
        reset();
        const updatedLinks = [...links];
        updatedLinks.forEach((link, i) => {
            link.active = i === index;
        });
        setLinks(updatedLinks);
        if (element === "recently") {
            reset();
            setRecentlyView(true);
        } else if (element === "files") {
            reset();
            setSharedFiles(true);
        } else if (element == "projects") {
            reset();
            setSharedProjects(true);
        } else {
            reset();
        }
    };
    const [links, setLinks] = useState([
        {
            title: "Recently Viewed",
            element: "recently",
            component: RecentlyView,
            active: isRecentlyView,
        },
        {
            title: "Shared Files",
            element: "files",
            component: SharedFiles,
            active: isSharedFiles,
        },
        {
            title: "Shared Projects",
            element: "projects",
            component: SharedProjects,
            active: isSharedProjects,
        },
    ]);
    return (
        <>
            <div className="w-full mt-[10px] flex list-none">
                <div className="flex w-[50%] mr-[10px] bg-transparent rounded-t-lg rounded-b-lg">
                    <div className="max-w-2xl justify-center items-center mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="rounded-t-lg h-32 overflow-hidden">
                            <img
                                className="object-cover object-top w-full"
                                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                                alt="Mountain"
                            />
                        </div>
                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img
                                className="object-cover object-center h-32"
                                src={taskImage}
                                alt="Woman looking front"
                            />
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">
                                {user && user.username}
                            </h2>
                            <p className="text-gray-500">
                                Freelance Web Designer
                            </p>
                        </div>
                        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                            <li className="flex flex-col items-center justify-around">
                                <svg
                                    className="w-4 fill-current text-blue-900"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                                <div>2k</div>
                            </li>
                            <li className="flex flex-col items-center justify-between">
                                <svg
                                    className="w-4 fill-current text-blue-900"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                                </svg>
                                <div>10k</div>
                            </li>
                            <li className="flex flex-col items-center justify-around">
                                <svg
                                    className="w-4 fill-current text-blue-900"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                </svg>
                                <div>15</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 py-4 w-[100%] mr-[10px] bg-transparent rounded-t-lg rounded-b-lg">
                    <div className="max-w-2xl h-[45%] justify-center items-center sm:max-w-sm ml-[10px] md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-[150px] bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="rounded-t-lg h-full overflow-hidden mt-[-20px]"></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[30%] my-[10px] flex items-center justify-center ">
                <a className="w-[25%] group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3 overflow-x-auto cursor-pointer">
                        <GroupAddOutlinedIcon className="text-sky-500 group-hover:text-white" />
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            New Team
                        </h3>
                    </div>
                    <p className="text-sm text-slate-500 group-hover:text-white">
                        Create a new team to access a variety of starting
                        templates.
                    </p>
                </a>

                <a className="w-[25%] group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3 overflow-x-auto cursor-pointer">
                        <svg
                            className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"
                            ></path>
                        </svg>
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            New Project
                        </h3>
                    </div>
                    <p className="text-sm text-slate-500 group-hover:text-white">
                        Create a new project from a variety of starting
                        templates.
                    </p>
                </a>
                <a className="w-[25%] group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3 overflow-x-auto cursor-pointer">
                        <DashboardCustomizeOutlinedIcon className="text-sky-500 group-hover:text-white" />
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            New Board
                        </h3>
                    </div>
                    <p className="text-sm text-slate-500 group-hover:text-white">
                        Create a new dashboard to organize your projects more
                        efficiently.
                    </p>
                </a>
            </div>
            <div className="w-full flex my-[2%] max-sm:w-full max-sm:flex-row text-white">
                {links.map((link, index) => {
                    return (
                        <div className="flex">
                            <button
                                key={index}
                                className={`text-white w-full hover:bg-sky-500 hover:text-white rounded-lg py-[1px] px-[20px] mx-[10px] font-semibold ${
                                    link.active ? "bg-sky-500" : ""
                                }`}
                                onClick={() => handleClick(index, link.element)}
                            >
                                {link.title}
                            </button>
                        </div>
                    );
                })}
                <div className="flex items-center space-x-4 text-sm text-white ml-auto">
                    {/* Action 1 */}
                    <span className="font-semibold">All teams</span>
                    <svg
                        className="w-3 h-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.06 1.475.708 1.12 0 1.828l.354.354.707-.707zM2.829 3.95l-.353.353.353.354.354-.354-.354-.353zm2.475-1.768.354-.354-.707-.707-.354.354.707.707zm-4.95 0 2.122 2.121.707-.707-2.121-2.121-.707.707zm2.829 2.121 2.121-2.121-.707-.707-2.121 2.121.707.707z"
                        ></path>
                    </svg>

                    {/* Action 2 */}
                    <span className="font-semibold">All files</span>
                    <svg
                        className="w-3 h-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.06 1.475.708 1.12 0 1.828l.354.354.707-.707zM2.829 3.95l-.353.353.353.354.354-.354-.354-.353zm2.475-1.768.354-.354-.707-.707-.354.354.707.707zm-4.95 0 2.122 2.121.707-.707-2.121-2.121-.707.707zm2.829 2.121 2.121-2.121-.707-.707-2.121 2.121.707.707z"
                        ></path>
                    </svg>

                    {/* Action 3 */}
                    <span className="font-semibold">Alphabetical</span>
                    <svg
                        className="w-3 h-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.06 1.475.708 1.12 0 1.828l.354.354.707-.707zM2.829 3.95l-.353.353.353.354.354-.354-.354-.353zm2.475-1.768.354-.354-.707-.707-.354.354.707.707zm-4.95 0 2.122 2.121.707-.707-2.121-2.121-.707.707zm2.829 2.121 2.121-2.121-.707-.707-2.121 2.121.707.707z"
                        ></path>
                    </svg>

                    {/* Action 4 */}
                    <button
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                        data-tooltip-type="text"
                        data-tooltip="Show as grid"
                        aria-label="Show as grid"
                    >
                        <svg
                            className="w-4 h-4 fill-current text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 1h3v3H1V1zM0 0h5v5H0V0zm1 8h3v3H1V8zM0 7h5v5H0V7zm11-6H8v3h3V1zM8 0H7v5h5V0H8zm0 8h3v3H8V8zM7 7h5v5H7V7z"
                            ></path>
                        </svg>
                    </button>

                    {/* Action 5 */}
                    <button
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                        data-tooltip-type="text"
                        data-tooltip="Show as list"
                        aria-label="Show as list"
                    >
                        <svg
                            className="w-4 h-4 fill-current text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 11"
                        >
                            <path
                                fillRule="evenodd"
                                d="M0 0h14v1H0V0zm0 5h14v1H0V5zm14 5H0v1h14v-1z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full flex min-h-[100%] flex-col flex-grow text-white">
                {(isRecentlyView && <RecentlyView />) ||
                    (isSharedFiles && <SharedFiles />) ||
                    (isSharedProjects && <SharedProjects />)}
            </div>
        </>
    );
};

export default Home;
