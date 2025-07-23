import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values.email);
    try {
      axios
        .post("http://localhost:5100/api/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log(response);

    {
    //   localStorage.setItem("isLoggedIn", true);
    //   localStorage.setItem("email",values.email );
      message.success("Login successful!");
      navigate("/");
    } 

        });
    } catch (error) {
      console.error("error", error);
      message.error("Invalid username or password");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-md ">
        <h1
          className="text-center text-4xl font-bold mb-6 underline decoration-black text-white"
          style={{
            textShadow: `
              -1px -1px 2px #000,
              1px -1px 2px #000,
              -1px 1px 2px #000,
              1px 1px 2px #000
            `,
          }}
        >
          Login
        </h1>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <div className="text-center mt-4">
              or{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register Now
              </Link>
            </div>
          </Form.Item>
        </Form>        
      </div>
    </div>
  );
};

export default Login;
