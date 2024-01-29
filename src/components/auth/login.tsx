import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginRest } from "../../APIs";
import { LoginDto } from "../../models";
import { setLocalStorage } from "../../storage/localStorage";
import { RootState } from "../../storage/redux/store";
import { setUser } from "../../storage/redux/userSlice";

const LoginPage = () => {
    const dispath = useDispatch();
    const user = useSelector((state: RootState) => state.UserReducer.user);
    const navigate = useNavigate();
    if (user?.token) navigate("/");
    const login = async (data: LoginDto) => {
        const res = await loginRest(data);
        if (res) {
            console.log("🚀 ~ login ~ res:", res);
            setLocalStorage("user", res);
            dispath(setUser(res));
            message.success("Login Successfull");
            console.log("🚀 ~ login ~ res:", res);
            navigate("/products");
        } else {
            setLocalStorage("user", {});
            message.error("Login Failed");
        }
    };
    const onFinish = (values: any) => {
        console.log("Success:", values);
        login(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Form
                name="basic"
                // labelCol={{ span: 8 }}
                layout="vertical"
                // wrapperCol={{ span: 16 }}
                style={{ maxWidth: 300 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="border-2 border-gray-400 p-6 rounded-lg"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
