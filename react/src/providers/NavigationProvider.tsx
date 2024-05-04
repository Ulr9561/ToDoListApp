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
}


const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined,
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isNotificationsActive, setNotificationsActive] = useState<boolean>(false);
    const [isSettingsActive, setSettingsActive] = useState<boolean>(false);
    const [isShareActive, setShareActive] = useState<boolean>(false);
    const [isRecentlyView, setRecentlyView] = useState<boolean>(true);
    const [isSharedFiles, setSharedFiles] = useState<boolean>(false);
    const [isSharedProjects, setSharedProjects] = useState<boolean>(false);

    
    const reset = () => {
        setNotificationsActive(false);
        setSettingsActive(false);
        setShareActive(false);
        setSharedFiles(false);
        setSharedProjects(false);
        setRecentlyView(false);
    }

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
