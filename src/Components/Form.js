import React, { useState } from "react";
import "./Form.css";
export default function Form({ input, setInput, confirm, setConfirm }) {
  const [submit, setSubmit] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (input.cardNumber.length !== 16) {
      validationErrors.cardNumber = "Invalid Card Number";
    }

    if (!input.name || !/^[a-zA-Z\s]*$/.test(input.name)) {
    // if (!/^[a-zA-Z\s]*$/.test(input.name)) {
      validationErrors.name = "Invalid Card Holder Name";
    }

    if (input.yy.length !== 2 || input.yy >= 31 || input.yy <=22) {
    // if (input.yy.length !== 2 || isNaN(input.yy)) {
      validationErrors.yy = "Invalid Year";
    }

    if (input.mm.length !== 2 || input.mm >= 13) {
    // if (input.mm.length !== 2 || isNaN(input.mm)) {
      validationErrors.mm = "Invalid Month";
    }

    if (input.cvc.length !== 3) {
    // if (input.cvc.length !== 3 || isNaN(input.cvc)) {
      validationErrors.cvc = "Invalid CVC";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmit("Confirmed");

      setConfirm(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="leftside"></div>
        <div className="rightside">
          <div className="details">
            <form>
              <div className="grid_1">
                <label htmlFor="card_name">Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                  placeholder="e.g. Jane Appleseed"
                  id="card_name"
                  required
                />
              </div>
              {errors.name && <span>{errors.name}</span>}
              <div className="grid_2">
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  name="cardNumber"
                  onChange={handleChange}
                  value={input.cardNumber}
                  id="card_number"
                  required
                />
              </div>
              {errors.cardNumber && <span>{errors.cardNumber}</span>}
              <div className="card_information">
                <div id="card_date">
                  <label htmlFor="card_date">Exp. Date (MM/YY)</label>
                  <div className="two_inp">
                    <div>
                      <input
                        type="number"
                        placeholder="MM"
                        name="mm"
                        onChange={handleChange}
                        value={input.mm}
                        id="card_month"
                        required
                      />
                    </div>
                    {errors.mm && <span>{errors.mm}</span>}
                    <div>
                      <input
                        type="number"
                        placeholder="YY"
                        name="yy"
                        onChange={handleChange}
                        value={input.yy}
                        id="card_year"
                        required
                      />
                    </div>
                    {errors.yy && <span>{errors.yy}</span>}
                  </div>
                </div>
                <div className="grid_4">
                  <label htmlFor="card_cvc">CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    placeholder="e.g. 123"
                    id="card_cvc"
                    onChange={handleChange}
                    value={input.cvc}
                    required
                  />
                </div>
                {errors.cvc && <span>{errors.cvc}</span>}
              </div>


              <span>{submit}</span>
              <button
                id="submit_btn"
                type="submit"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
