import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formdata, setFromData] = useState({});
  const [buttonDisabled, setButtonDisabledd] = useState(true);
  const handleChange = ({ target }) => {
    const newData = { ...formdata };
    newData[target.name] = target.value;
    setFromData({ ...newData });
  };
  useEffect(() => {
    if (formdata.my_name && formdata.my_email && formdata.description)
      setButtonDisabledd(false);
    else setButtonDisabledd(true);
  }, [formdata.my_name, formdata.email, formdata.description]);
  return (
    <div className="grid">
      <form
        id="contact-from"
        action="https://formspree.io/eladonline@walla.com"
        method="POST"
        className="contact-form "
      >
        <div>
          <label>שם</label>
          <input
            onChange={handleChange}
            className="contact-row "
            type="text"
            name="my_name"
            value={formdata.my_name}
          />
        </div>
        <div>
          <label>דואר אלקטרוני</label>
          <input
            onChange={handleChange}
            className="contact-row "
            type="email"
            name="my_email"
            value={formdata.my_email}
          />
        </div>
        <div className="textarea-container">
          <label>ספר לנו במה אתה מתעניין</label>
          <textarea
            onChange={handleChange}
            className="contact-row "
            type="text"
            name="description"
            value={formdata.description}
          />
        </div>

        <button disabled={buttonDisabled} className="btnDark" type="submit">
          שלח
        </button>
      </form>
    </div>
  );
};
export default Contact;
