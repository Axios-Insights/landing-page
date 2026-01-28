import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { LogoWidget } from "@widgets/logo_widget";

import type { FooterWidgetPropsType } from "./types";

export const FooterWidget = ({ sx, ...props }: FooterWidgetPropsType) => {
  return (
    <Stack
      component="footer"
      direction="column"
      width="100%"
      height="auto"
      padding={4}
      gap={4}
      color="text.secondary"
      sx={{ backgroundColor: "text.primary", ...sx }}
      {...props}
    >
      <Button
        component={RouterLink}
        variant="clear"
        to={{
          pathname: "/",
        }}
      >
        <LogoWidget fontSize={32} />
      </Button>

      <Divider
        variant="middle"
        sx={{ borderColor: "currentColor", opacity: 0.25 }}
      />

      <Button
        variant="clear"
        href="https://www.linkedin.com/company/axios-insights"
        target="_blank"
        color="inherit"
      >
        <FontAwesomeIcon icon={faSquareLinkedin} fontSize={32} />
      </Button>

      <Typography align="center" color="inherit">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://axiosinsights.com/"
          sx={{ textDecoration: "none" }}
        >
          axios insights
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Stack>
  );
};
