import { useLocation, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storage/redux/store";
import { resetUser } from "../../storage/redux/userSlice";

const Navbar = () => {
    const user = useSelector((state: RootState) => state.UserReducer.user);
    const dispatch = useDispatch();
    console.log("🚀 ~ Navbar ~ user:", user);

    const navigate = useNavigate();
    const path = useLocation().pathname;

    if (path.includes("login"))
        return (
            <div className="w-full flex justify-between px-8 py-2 bg-gray-200">
                <div className="cursor-pointer" onClick={() => navigate("/")}>
                    Home
                </div>
            </div>
        );
    return (
        <div className="w-full flex justify-between px-8 py-2 bg-gray-200">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
                Home
            </div>
            <div className="flex gap-2 items-center">
                <div
                    className="cursor-pointer"
                    onClick={() => navigate("/products")}
                >
                    Products
                </div>
                {user?.role === "ADMIN" ? (
                    <Button
                        onClick={() => {
                            localStorage.clear();
                            dispatch(resetUser());
                            // navigate("/");
                            message.success("Logged Out");
                        }}
                    >
                        Logout
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
