/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./GraphHorizontalIcon.svg");
}

const GraphHorizontalIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="GraphHorizontalIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="GraphHorizontalIconHref"
        xlinkHref={`${importPrefix}#GraphHorizontalIcon`}
      />
    </svg>
  );
};

GraphHorizontalIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

GraphHorizontalIcon.defaultProps = {
  size: 1.5
};

export default GraphHorizontalIcon;