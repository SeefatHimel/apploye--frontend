import { useDispatch } from "react-redux";
import { getLocalStorageItem } from "../../storage/localStorage";
import Navbar from "../navbar";
import { setUser } from "../../storage/redux/userSlice";

const Layout = ({ children }: any) => {
    const dispath = useDispatch();
    const user: any = getLocalStorageItem("user");
    if (user?.role) dispath(setUser(user));
    return (
        <div className="flex gap-2 flex-col">
            <Navbar />
            <div className="px-8">{children}</div>
        </div>
    );
};

export default Layout;
