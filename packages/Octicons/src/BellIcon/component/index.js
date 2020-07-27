/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const BellIcon = ({ className, size }) => (
  <svg
    data-testid="BellIcon"
    viewBox="0 0 15 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"
    ></path>
  </svg>
);

BellIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

BellIcon.defaultProps = {
  size: 1.5
};

export default BellIcon;
