import React, { useState } from "react";

export const Form = ({ input, setInput, setConfirm }) => {
  const [submit, setSubmit] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!input.cardNumber.trim()) {
      validationErrors.cardNumber = "Card Number Required!";
    } else if (input.cardNumber.length !== 16) {
      validationErrors.cardNumber = "invalid Card Number";
    }
    if (!input.name.trim() ) {
      validationErrors.name = "Name Required!";
    } else if(input.name === 0||1||2||3||4||5||6||7||8||9){
      validationErrors.name = "Invalid Name";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmit("Confirmed");

      setConfirm(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <span>{errors.name}</span>}
      <input
        type="number"
        name="cardNumber"
        placeholder="Card Number"
        onChange={handleChange}
      />
      {errors.cardNumber && <span>{errors.cardNumber}</span>}

      <span>{submit}</span>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};
