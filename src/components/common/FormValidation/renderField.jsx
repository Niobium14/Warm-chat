import React, { Component } from "react";

const renderField = ({ input, meta, ...props }) => (
  <div>
    <textarea {...input} {...meta} {...props} />
  </div>
);

export default renderField;
