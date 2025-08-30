import { Icon } from "@mui/material";

import type { MaterialSymbolsPropsType } from "./types";

const MaterialSymbolsWidget = ({
  name,
  variant = "outlined",
  filled = false,
  weight = 200,
  opticalSize = 24,
  fontSize = "medium",
  ...props
}: MaterialSymbolsPropsType) => {
  const classes = [`material-symbols-${variant}`].filter(Boolean).join(" ");

  const style = {
    fontVariationSettings: `
      'FILL' ${filled ? 1 : 0},
      'wght' ${weight},
      'GRAD' 0,
      'opsz' ${opticalSize}
    `,
  };

  return (
    <>
      <Icon className={classes} fontSize={fontSize} style={style} {...props}>
        {name}
      </Icon>
    </>
  );
};

export default MaterialSymbolsWidget;
