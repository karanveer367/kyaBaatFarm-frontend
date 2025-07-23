import axios from "axios" ;
import React , { useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Select,
} from "antd";
const { Option } = Select;
const residences = [
  {
    value: "India",
    label: "India",
    children: [
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
      { value: "Assam", label: "Assam" },
      { value: "Bihar", label: "Bihar" },
      { value: "Chhattisgarh", label: "Chhattisgarh" },
      { value: "Goa", label: "Goa" },
      { value: "Gujarat", label: "Gujarat" },
      { value: "Haryana", label: "Haryana" },
      { value: "Himachal Pradesh", label: "Himachal Pradesh" },
      { value: "Jharkhand", label: "Jharkhand" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Kerala", label: "Kerala" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Manipur", label: "Manipur" },
      { value: "Meghalaya", label: "Meghalaya" },
      { value: "Mizoram", label: "Mizoram" },
      { value: "Nagaland", label: "Nagaland" },
      { value: "Odisha", label: "Odisha" },
      {
        value: "Punjab",
        label: "Punjab",
        children: [
          { value: "Amritsar", label: "Amritsar" },
          { value: "Barnala", label: "Barnala" },
          { value: "Bathinda", label: "Bathinda" },
          { value: "Faridkot", label: "Faridkot" },
          { value: "Fatehgarh Sahib", label: "Fatehgarh Sahib" },
          { value: "Fazilka", label: "Fazilka" },
          { value: "Ferozepur", label: "Ferozepur" },
          { value: "Gurdaspur", label: "Gurdaspur" },
          { value: "Hoshiarpur", label: "Hoshiarpur" },
          { value: "Jalandhar", label: "Jalandhar" },
          { value: "Kapurthala", label: "Kapurthala" },
          { value: "Ludhiana", label: "Ludhiana" },
          { value: "Malerkotla", label: "Malerkotla" },
          { value: "Mansa", label: "Mansa" },
          { value: "Moga", label: "Moga" },
          { value: "Mohali", label: "Mohali" },
          { value: "Muktsar", label: "Muktsar" },
          { value: "Nawanshahr", label: "Nawanshahr" },
          { value: "Pathankot", label: "Pathankot" },
          { value: "Patiala", label: "Patiala" },
          { value: "Rupnagar", label: "Rupnagar" },
          { value: "Sangrur", label: "Sangrur" },
          { value: "Tarn Taran", label: "Tarn Taran" },
        ],
      },
      { value: "Rajasthan", label: "Rajasthan" },
      { value: "Sikkim", label: "Sikkim" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Telangana", label: "Telangana" },
      { value: "Tripura", label: "Tripura" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Uttarakhand", label: "Uttarakhand" },
      { value: "West Bengal", label: "West Bengal" },
      // Union Territories
      {
        value: "Andaman and Nicobar Islands",
        label: "Andaman and Nicobar Islands",
      },
      { value: "Chandigarh", label: "Chandigarh" },
      {
        value: "Dadra and Nagar Haveli and Daman and Diu",
        label: "Dadra and Nagar Haveli and Daman and Diu",
      },
      { value: "Delhi", label: "Delhi" },
      { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
      { value: "Ladakh", label: "Ladakh" },
      { value: "Lakshadweep", label: "Lakshadweep" },
      { value: "Puducherry", label: "Puducherry" },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [data,setData] = useState("please enter email")

  console.log("",data)
  const onFinish = (values) => {
    console.log("Recieved values of form: ",values);
    
    try {
      axios.post("http://localhost:5100/api/auth/register",{values})
        
      .then((response) => {
        console.log(response);
        setData(response.data.message)

      })
      .catch((error)=>{

        setData(error.response.data.message)
        console.log("error",error.response.data.message)

      
      });
    } catch (error) {
      console.error(error);
    }
    
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+91</Option>
      </Select>
    </Form.Item>
  );

  return (

    <div>
    <div className="flex text-black font-bold justify-center pt-6">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["Country", "State", "Dist"],
          prefix: "+91",
        }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm pass "
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="residence"
          label="Residence"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select your habitual residence!",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" >
            Register
          </Button>
          <p className="text-red-500 pt-3">{data}</p>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};
export default Register;
