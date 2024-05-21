import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
    isSettingsActive: boolean;
    setSettingsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isNotificationsActive: boolean;
    setNotificationsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isShareActive: boolean;
    setShareActive: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
    isRecentlyView: boolean;
    setRecentlyView: React.Dispatch<React.SetStateAction<boolean>>;
    isSharedFiles: boolean;
    setSharedFiles: React.Dispatch<React.SetStateAction<boolean>>;
    isSharedProjects: boolean;
    setSharedProjects: React.Dispatch<React.SetStateAction<boolean>>;
    isHomeActive: boolean;
    setHomeActive: React.Dispatch<React.SetStateAction<boolean>>;
    isTeamsActive: boolean;
    setTeamsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isProjectsActive: boolean;
    setProjectsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isBoardsActive: boolean;
    setBoardsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isFaqsActive: boolean;
    setFaqsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined,
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // Sidebar Contexts
    const [isHomeActive, setHomeActive] = useState<boolean>(false);
    const [isTeamsActive, setTeamsActive] = useState<boolean>(false);
    const [isProjectsActive, setProjectsActive] = useState<boolean>(false);
    const [isBoardsActive, setBoardsActive] = useState<boolean>(false);
    const [isFaqsActive, setFaqsActive] = useState<boolean>(false);

    // Navbar Contexts
    const [isNotificationsActive, setNotificationsActive] =
        useState<boolean>(false);
    const [isSettingsActive, setSettingsActive] = useState<boolean>(false);
    const [isShareActive, setShareActive] = useState<boolean>(false);

    // Home Views Contexts
    const [isRecentlyView, setRecentlyView] = useState<boolean>(true);
    const [isSharedFiles, setSharedFiles] = useState<boolean>(false);
    const [isSharedProjects, setSharedProjects] = useState<boolean>(false);

    const reset = () => {
        setHomeActive(false);
        setTeamsActive(false);
        setProjectsActive(false);
        setBoardsActive(false);
        setFaqsActive(false);

        setNotificationsActive(false);
        setSettingsActive(false);
        setShareActive(false);

        setSharedFiles(false);
        setSharedProjects(false);
        setRecentlyView(false);
    };

    return (
        <NavigationContext.Provider
            value={{
                isRecentlyView,
                setRecentlyView,
                isSharedFiles,
                setSharedFiles,
                isSharedProjects,
                setSharedProjects,
                isSettingsActive,
                setSettingsActive,
                isNotificationsActive,
                setNotificationsActive,
                isShareActive,
                setShareActive,
                isHomeActive,
                setHomeActive,
                isTeamsActive,
                setTeamsActive,
                isProjectsActive,
                setProjectsActive,
                isBoardsActive,
                setBoardsActive,
                isFaqsActive,
                setFaqsActive,
                reset,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider",
        );
    }
    return context;
};
