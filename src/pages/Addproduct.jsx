import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, message, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const AddProduct = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFinish = async (values) => {
    try {
      // const formData = new FormData();
      // Object.entries(values).forEach(([key, value]) => {
      //   if (key === "image") {
      //     formData.append("image", value.file.originFileObj);
      //   } else {
      //     formData.append(key, value);
      //   }
      // });

      await axios.post("http://localhost:5100/api/product/addproduct",{values})

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
        {/* Product Name */}
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

        {/* Price + Unit */}
        <Form.Item
          label="Price and Unit"
          required
        >
          <div className="flex gap-4">
            <Form.Item
              name="price"
              rules={[{ required: true, message: "Please enter price" }]}
              noStyle
            >
              <Input
                type="number"
                placeholder="Price (₹)"
                className="p-2 rounded-md border border-gray-300 w-full"
              />
            </Form.Item>
            <Form.Item
              name="unit"
              rules={[{ required: true, message: "Please select unit" }]}
              noStyle
            >
              <Select className="w-full">
                <Option value="Kg">per Kg</Option>
                <Option value="Dozen">per Dozen</Option>
                <Option value="Piece">per Piece</Option>
                <Option value="Gram">per Gram</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Quantity */}
        <Form.Item
          label="Quantity and units"
          required
        >
          <div className="flex gap-4">
            <Form.Item
              name="quantity"
              rules={[{ required: true, message: "Please enter quantity" }]}
              noStyle
            >
              <Input
                type="number"
                placeholder="Quantity"
                className="p-2 rounded-md border border-gray-300 w-full"
              />
            </Form.Item>
            <Form.Item
              name="unit"
              rules={[{ required: true, message: "Please select unit" }]}
              noStyle
            >
              <Select className="w-full">
                <Option value="Kg">Kg</Option>
                <Option value="Dozen">Dozen</Option>
                <Option value="Piece">Piece</Option>
                <Option value="Gram">Gram</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Category */}
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

        {/* Image Upload */}
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

        {/* Submit Button */}
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
