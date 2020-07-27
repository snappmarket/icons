/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const LayoutIcon = ({ className, size }) => (
  <svg
    data-testid="LayoutIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

LayoutIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

LayoutIcon.defaultProps = {
  size: 1.5
};

export default LayoutIcon;
