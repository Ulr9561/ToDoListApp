import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
    MDBIcon,
} from "mdb-react-ui-kit";
import taskImage from "../../assets/images/task.jpg";
import { useNavigation } from "../../providers/NavigationProvider";
import { AddCircleOutline } from "react-ionicons";
import AuthUser from "../../hooks/AuthUser";

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
            active: isRecentlyView,
        },
        {
            title: "Shared Files",
            element: "files",
            active: isSharedFiles,
        },
        {
            title: "Shared Projects",
            element: "projects",
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
                        <div className="p-4 border-t mx-8 mt-2">
                            <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 py-4 w-[100%] mr-[10px] bg-transparent rounded-t-lg rounded-b-lg">
                    <div className="max-w-2xl h-[45%] justify-center items-center sm:max-w-sm ml-[10px] md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-[150px] bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="rounded-t-lg h-full overflow-hidden mt-[-20px]"></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[30%] my-[10px] flex items-center justify-center ">
                <div className="w-[25%] h-[50%] bg-gray-500 mx-[10px] flex items-center justify-start rounded-md hover:bg-gray-400">
                    <div className="w-full h-full text-center items-center py-[9%] flex px-[5%] overflow-x-auto cursor-pointer">
                        <h1 className="text-white px-[10px] pr-[50px]">
                            Create Team
                        </h1>
                        <AddCircleOutline
                            color={"#fff"}
                            width="30px"
                            height="30px"
                        />
                    </div>
                </div>

                <div className="w-[25%] h-[50%] bg-gray-500 mx-[10px] flex items-center justify-start rounded-md hover:bg-gray-400">
                    <div className="w-full h-full text-center items-center py-[9%] flex px-[5%] overflow-x-auto cursor-pointer">
                        <h1 className="text-white px-[10px] pr-[50px]">
                            New Project
                        </h1>
                        <AddCircleOutline
                            color={"#fff"}
                            width="30px"
                            height="30px"
                        />
                    </div>
                </div>
                <div className="w-[25%] h-[50%] bg-gray-500 mx-[10px] flex items-center justify-start rounded-md hover:bg-gray-400">
                    <div className="w-full h-full text-center items-center py-[9%] flex px-[5%] overflow-x-auto cursor-pointer ">
                        <h1 className="text-white px-[10px] pr-[50px]">
                            Create New Board
                        </h1>
                        <AddCircleOutline
                            color={"#fff"}
                            width="30px"
                            height="30px"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center my-[2%] max-sm:w-full max-sm:flex-row">
                {links.map((link, index) => {
                    return (
                        <button
                            key={link.title}
                            className={`text-white w-full hover:bg-gray-300 hover:text-black rounded-lg py-[1px] px-[20px] mx-[10px] font-light ${
                                link.active ? "bg-gray-300 text-black" : ""
                            }`}
                            onClick={() => handleClick(index, link.element)}
                        >
                            {link.title}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
