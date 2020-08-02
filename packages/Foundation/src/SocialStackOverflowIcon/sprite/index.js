/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SocialStackOverflowIcon.svg");
}

const SocialStackOverflowIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SocialStackOverflowIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SocialStackOverflowIconHref"
        xlinkHref={`${importPrefix}#SocialStackOverflowIcon`}
      />
    </svg>
  );
};

SocialStackOverflowIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SocialStackOverflowIcon.defaultProps = {
  size: 1.5
};

export default SocialStackOverflowIcon;