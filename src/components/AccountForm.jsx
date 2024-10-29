// src/pages/AccountForm.js
import React, { useState } from "react";

const AccountForm = ({
  initialData = { currentAccountname: "" },
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Account Name:
        <input
          type="text"
          name="currentAccountname"
          value={formData.currentAccountname}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountForm;
