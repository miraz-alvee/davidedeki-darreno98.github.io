"use client";
import { Button, Modal, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

function InviteMember() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
    setIsModalOpen(false);
    form.resetFields();
    message.success("Member invited successfully!");
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="mainButton"
        icon={<LuPlus />}
        type="primary"
        size="large"
      >
        Invite Member
      </Button>

      <Modal
        title="Invite Member"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* Member Name */}
          <Form.Item
            label="Member Name"
            name="name"
            rules={[{ required: true, message: "Please enter member name" }]}
          >
            <Input size="large" placeholder="Enter member name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input size="large" placeholder="Enter email" />
          </Form.Item>

          {/* Role */}
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select role" }]}
          >
            <Select size="large" placeholder="Select role">
              <Select.Option value="owner">Owner</Select.Option>
              <Select.Option value="staff">Staff</Select.Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              className="mainButton"
              size="large"
              type="primary"
              htmlType="submit"
              block
            >
              Invite
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default InviteMember;
