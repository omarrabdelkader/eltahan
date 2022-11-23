import React from "react";
import "./contact.css";
import { Button, Form, Input } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    alert("We have received your message!");
  };
  return (
    <section className="contact">
      <div className="heading">
        <h3>Feel Free To Contact Us</h3>
      </div>
      <div className="contact-box">
        <div className="info">
          <h4>Working Hours</h4>
          <p>Every Day : 11 AM - 9 PM</p>
          <h4>Contact Details</h4>
          <p>For Any Information</p>
          <p>Phone: 37480890</p>
          <p>Mobile: 0122353443</p>
        </div>
        <div className="message">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <div className="form-flex">
              <h4 className="form-heading">Send Us A Message</h4>
              <div className="first-lastname">
                <Form.Item
                  name={["user", "firstname"]}
                  label=""
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstname",
                    },
                  ]}
                >
                  <Input placeholder="Firstname" />
                </Form.Item>

                <Form.Item
                  name={["user", "lastname"]}
                  label=""
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname",
                    },
                  ]}
                >
                  <Input placeholder="Lastname" />
                </Form.Item>
              </div>

              <div className="email-phone">
                <Form.Item
                  name={["user", "email"]}
                  label=""
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name={["user", "phone"]}
                  label=""
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone",
                    },
                  ]}
                >
                  <Input placeholder="Phone" />
                </Form.Item>
              </div>

              <Form.Item name={["user", "message"]} label="">
                <Input.TextArea placeholder="Write your message" />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
