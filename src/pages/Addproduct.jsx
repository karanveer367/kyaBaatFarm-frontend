import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, message, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";


const { Option } = Select;

const AddProduct = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFinish = async (values) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "image") {
          formData.append("image", value.file.originFileObj);
        } else {
          formData.append(key, value);
        }
      });

      // await axios.post("http://localhost:5100/api/addproduct", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      message.success("Product added successfully!");
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error(error);
      message.error("Error adding product. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-green-700 underline mb-6">
        Add Your Product
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="space-y-4"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300"
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter product price" }]}
        >
          <Input
            type="number"
            placeholder="Enter price"
            className="p-2 rounded-md border border-gray-300"
          />
        </Form.Item>

        <Form.Item
          label="Unit"
          name="unit"
          rules={[{ required: true, message: "Please select a unit" }]}
        >
          <Select className="w-full">
            <Option value="Kg">Kg</Option>
            <Option value="Dozen">Dozen</Option>
            <Option value="Piece">Piece</Option>
            <Option value="Gram">Gram</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please enter quantity" }]}
        >
          <Input
            type="number"
            placeholder="Enter quantity"
            className="p-2 rounded-md border border-gray-300"
          />
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="category"
          rules={[{ required: true, message: "Please select category" }]}
        >
          <Radio.Group className="space-x-4">
            <Radio value="Fruit">Fruit</Radio>
            <Radio value="Veggie">Veggie</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Product Image"
          name="image"
          valuePropName="file"
          rules={[{ required: true, message: "Please upload a product image" }]}
        >
          <Upload
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            beforeUpload={() => false}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
