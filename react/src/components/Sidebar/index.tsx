import { AppsOutline, GridOutline, HomeOutline, LogOutOutline, NewspaperOutline, NotificationsOutline, PeopleOutline, PieChartOutline } from "react-ionicons";

const Sidebar = () => {

    const navLinks = [
        {
            title: "Home",
            icon: (
                <HomeOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },
        {
            title: "Boards",
            icon: (
                <AppsOutline 
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: true,
        },
        {
            title: "Projects",
            icon: (
                <GridOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },
        {
            title: "Analytics",
            icon: (
                <PieChartOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },
        {
            title: "Workflows",
            icon: (
                <PeopleOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },
        {
            title: "Notifications",
            icon: (
                <NotificationsOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },
        {
            title: "Newsletter",
            icon: (
                <NewspaperOutline
                    color={'#555'}
                    width={"22px"}
                    height={"22px"}
                />
            ),
            active: false,
        },

    ];
    
    return (
        <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
            <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
                <span className="text-orange-400 font-semibold text-2xl md:block hidden"><svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path></svg></span>
                <span className="text-orange-400 font-semibold text-2xl md:block hidden">TDLApp</span> 
            </div>
            <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
                {navLinks.map((link) => {
                    return (
                        <div
                            key={link.title}
                            className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${
                                link.active ? "bg-orange-300" : "bg-transparent"
                            }`}
                        >
                            {link.icon}
                            <span className="font-medium text-[15px] md:block hidden">{link.title}</span>
                        </div>
                    );
                })}
            <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
                <LogOutOutline />
                <span className="font-medium text-[15px] md:block hidden">Log Out</span>
            </div>
        </div>
    </div>
);};
            
export default Sidebar;