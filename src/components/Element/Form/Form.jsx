import React from "react";

export const Form = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="input-group">
        <input
          placeholder="Email"
          type="text"
          className="form-control border-0 form-section " 
          id="username"
          name="username"
          required
        />
        <span className="input-group-text text-secondary">
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};
