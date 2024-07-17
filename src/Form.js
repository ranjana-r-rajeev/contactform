import { Button, Card, Checkbox, Col, Form, Input, message, Radio, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const FormComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [form] = Form.useForm();

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Form values: ", values);
    form.resetFields();
    message.success("Message Sent!");
  };

  return (
    <div className="flex justify-center py-12">
      <Card
        style={{
          height: 530,
          width: 480,
        }}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <p className="text-2xl font-bold pb-4">Contact Us</p>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                className="text-xs small-error-message "
                label={
                  <span>
                    First Name <span className="required-asterisk">*</span>
                  </span>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input className="cursor-pointer input-area-border" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                className="text-xs small-error-message"
                label={
                  <span>
                    Last Name <span className="required-asterisk">*</span>
                  </span>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input className="cursor-pointer input-area-border" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="email"
                className="text-xs small-error-message"
                label={
                  <span>
                    Email Address <span className="required-asterisk">*</span>
                  </span>
                }
                rules={[
                  { required: true, message: "This field is required" },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input className="cursor-pointer input-area-border" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="queryType"
            className="text-xs small-error-message"
            label={
              <span>
                Query Type <span className="required-asterisk">*</span>
              </span>
            }
            rules={[{ required: true, message: "Please select a query type" }]}
          >
            <Radio.Group
              className="custom-radio"
              onChange={handleRadioChange}
              value={selectedValue}
            >
              <Row gutter={12}>
                <Col span={12}>
                  <div
                    className={`w-52 rounded-md input-area-border border py-1 ${
                      selectedValue === "general" ? "selected" : ""
                    }`}
                  >
                    <Radio className="ml-4 custom-radio" value="general">
                      General Enquiry
                    </Radio>
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className={`w-52 rounded-md input-area-border border py-1 ${
                      selectedValue === "support" ? "selected" : ""
                    }`}
                  >
                    <Radio className="ml-4 custom-radio" value="support">
                      Support Request
                    </Radio>
                  </div>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Row>
            <Col span={24}>
              <Form.Item
                name="message"
                className="text-xs small-error-message"
                label={
                  <span>
                    Message <span className="required-asterisk">*</span>
                  </span>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <TextArea className="input-area-border cursor-pointer" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="consent"
                valuePropName="checked"
                className="small-error-message custom-checkbox"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            "To submit this form, please consent to being contacted"
                          ),
                  },
                ]}
              >
                <Checkbox className="text-xs">
                  I consent to being contacted by the team{" "}
                  <span className="required-asterisk">*</span>
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full my-2 button-color"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default FormComponent;
