import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RootLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
export default RootLayout;