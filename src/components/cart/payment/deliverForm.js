import React, { useState } from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const DeliverForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
      
    <Form id="delivery-form" onSubmit={handleSubmit}>
      <Form.Item colon={false} label="שם">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "!הקש את שמך בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="שם משפחה">
        {getFieldDecorator("family", {
          rules: [
            {
              required: true,
              message: "!הקש את שם המשפחה בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="מס טלפון">
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "!הקש את מספר טלפון בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="מייל">
        {getFieldDecorator("email", {
          rules: [
            {
              type: "email",
              message: "!האימייל אינו תקין"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="עיר">
        {getFieldDecorator("city", {
          rules: [
            {
              required: true,
              message: "!הקלד שם העיר בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="רחוב">
        {getFieldDecorator("street", {
          rules: [
            {
              required: true,
              message: "!הקלד שם רחוב בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="מס' בית">
        {getFieldDecorator("street", {
          rules: [
            {
              required: true,
              message: "!הקלד מס' בית בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item colon={false} label="מיקוד">
        {getFieldDecorator("zipCode", {
          rules: [
            {
              required: true,
              message: "!הקלד מיקוד בבקשה"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <div className="textarea-container">
        <Form.Item id="test" colon={false} label="הערות להזמנה">
          {getFieldDecorator("intrested", { rules: [] })(<TextArea />)}
        </Form.Item>
      </div>

      <button className="btnDark hover-green" type="submit">
        שלח
      </button>
    </Form>
  );
};
const WrappedRegistrationForm = Form.create({ name: "deliverForm" })(
  DeliverForm
);
export default WrappedRegistrationForm;
