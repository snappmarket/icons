/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./EmojiFlagsIcon.svg");
}

const EmojiFlagsIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EmojiFlagsIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="EmojiFlagsIconHref"
        xlinkHref={`${importPrefix}#EmojiFlagsIcon`}
      />
    </svg>
  );
};

EmojiFlagsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

EmojiFlagsIcon.defaultProps = {
  size: 1.5
};

export default EmojiFlagsIcon;