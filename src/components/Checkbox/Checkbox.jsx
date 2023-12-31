import React, { useEffect, useState } from "react";
import { Typography } from "../Typography";
import PropTypes from "prop-types";
import "./checkbox.css";

export const Checkbox = ({
  label,
  checked,
  disabled,
  error,
  indeterminate,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    if (!disabled) {
      setIsChecked(!isChecked);

      onChange?.(!isChecked);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="checkbox-container" onClick={toggleCheckbox}>
      <input
        type="checkbox"
        className="checkbox-input"
        disabled={disabled}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div
        className={`checkbox-box ${
          isChecked || indeterminate ? "checked" : ""
        } ${error ? "error" : ""}`}
      >
        {isChecked && !indeterminate && <div className="checkbox-checkmark" />}
        {indeterminate && <div className="checkbox-indeterminate-mark" />}
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  error: false,
  indeterminate: false,
  checked: false,
  disabled: false,
};
