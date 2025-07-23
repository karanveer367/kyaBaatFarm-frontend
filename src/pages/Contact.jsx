import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:5100/api/auth/contact", values)

      .then((response) =>{

        console.log(response);
        message.success("Message sent successfully!");
        form.resetFields();
       
      })
      .catch((error)=>{
        console.log("error",error.response.data.message)
        message.error("Something went wrong!");
      })
    }
     catch (error) {
      message.error("Server error!");
      console.error(error);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="py-12 text-black text-center">
        <h1 className="text-4xl text-black font-bold mb-2 underline">Contact Us</h1>
        <p className="text-2xl">
          We’re here to help and answer any questions you may have.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-16">
        {/* Contact Info Block */}
        <div className="text-white bg-white-700 p-8 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">📍 Get in Touch</h2>
          <div className="space-y-4 text-white font-bold">
            <p>
              <strong>📞 Phone:</strong> +91 9815906485
            </p>
            <p>
              <strong>✉️ Email:</strong> support@kyabaatfarms.com
            </p>
            <p>
              <strong>🏡 Address:</strong> Village Tungwali, Street 5, Punjab, India
            </p>
            <p>
              <strong>🕒 Hours:</strong> Mon - Sat, 9am - 6pm
            </p>
          </div>
        </div>

        {/* Ant Design Message Form Block */}
        <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">📝 Send a Message</h2>
          <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-4">
            <Form.Item
              label={<span className="block text-sm mb-1">Your Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Full Name" className="w-full border border-gray-300 p-3 rounded-lg" />
            </Form.Item>

            <Form.Item
              label={<span className="block text-sm mb-1">Your Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Email Address" className="w-full border border-gray-300 p-3 rounded-lg" />
            </Form.Item>

            <Form.Item
              label={<span className="block text-sm mb-1">Mobile Number</span>}
              name="mobile"
              rules={[{ required: true, message: "Please enter your mobile number" }]}
            >
              <Input placeholder="Mobile Number" className="w-full border border-gray-300 p-3 rounded-lg" />
            </Form.Item>

            <Form.Item
              label={<span className="block text-sm mb-1">Message</span>}
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Social & Support Block */}
      <div className=" text-center p-8 shadow-lg rounded-xl">
        <ul className="space-y-3 text-white font-bold">
          <li>
            <a href="#" className="hover:underline">
              🌐 Website: www.kyabaatfarms.com
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              📸 Instagram: @kyabaatfarms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              📘 Facebook: KyaBaat Farms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              🐦 Twitter: @KyaBaatFarms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
