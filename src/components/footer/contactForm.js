import React, { useState } from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;

const Contact = ({ form }) => {
  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form id="contact-from" onSubmit={handleSubmit}>
      <Form.Item colon={false} label="מייל">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: '!האימייל אינו תקין'
            },
            {
              required: true,
              message: 'בבקשה הכנס כתובת אימייל!'
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item colon={false} label="שם">
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '!הקש את שמך בבקשה'
            }
          ]
        })(<Input />)}
      </Form.Item>
      <div className="textarea-container">
        <Form.Item id="test" colon={false} label="במה אתה מעוניין">
          {getFieldDecorator('intrested', {
            rules: [
              {
                required: true,
                message: 'תן לנו רמז במה אתה מתעניין'
              }
            ]
          })(<TextArea />)}
        </Form.Item>
      </div>
      <button className="btnDark" type="submit">
        שלח
      </button>
    </Form>
  );
};
const WrappedRegistrationForm = Form.create({ name: 'contact' })(Contact);
export default WrappedRegistrationForm;
