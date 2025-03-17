import { createContext,  useState, useContext } from "react";

export const SideBarContext = createContext()


export const SideBarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // muestra el SideBar
    const SidebarOpen = () => {
        setIsSidebarOpen(true)
    }
    // cierra el sidebar
    const SidebarClose = () => {
        setIsSidebarOpen(false)
    }
    return (
        <SideBarContext.Provider value={{ isSidebarOpen, SidebarOpen, SidebarClose }} >
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBar = () => useContext(SideBarContext)

