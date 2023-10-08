import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { get_api_url } from "../../../../utils/getApiUrl";
import axios from "axios";
import { config } from "../../../../utils/getConfig";

const FormLetter = ({ response, setIsFinished }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (response) {
      data.accepted = response === "accept" ? true : false;
      const url = `${get_api_url()}/results`;

      axios
        .post(url, data)
        .then((res) => {
          if (res.data.status === "success") setIsFinished(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} class="form__container">
      <div class="form__number">
        <span class="form__title">NUMBER OF GUESTS:</span>
        <div className="select__box">
          <select
            {...register("guests", { required: true })}
            class="form__select"
            name="guests"
            id="guests"
          >
            <option value="">Select</option>
            <option value="0">0 (Not attending)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.guests && (
            <span className="form__error">This field is required</span>
          )}
        </div>
      </div>
      <div class="form__guest">
        <div class="form__input">
          <span class="form__title">NAME(S) OF GUESTS:</span>
          <p>Kindly enter the names for the seating plan.</p>
          <div className="input__box">
            <input
              autoComplete="off"
              {...register("namesGuests", { required: true })}
              type="text"
              placeholder="Name(s)"
            />
            {errors.namesGuests && (
              <span className="form__error">This field is required</span>
            )}
          </div>
        </div>
        <div class="form__input">
          <span class="form__title">DIETARY REQUIREMENTS:</span>
          <input
            autoComplete="off"
            {...register("dietaryReq")}
            type="text"
            placeholder="e.g. Allergies"
          />
        </div>
        <div class="form__input">
          <span class="form__title">CONTACT INFO:</span>
          <div class="box__contact">
            <input
              autoComplete="off"
              {...register("contactName")}
              type="text"
              placeholder="Name"
            />
            <input
              autoComplete="off"
              {...register("contactPhone")}
              type="tel"
              placeholder="Phone"
            />
            <input
              autoComplete="off"
              {...register("contactEmail")}
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form__btn">
          <button class="btn">REPLY NOW</button>
        </div>
      </div>
    </form>
  );
};

export default FormLetter;
