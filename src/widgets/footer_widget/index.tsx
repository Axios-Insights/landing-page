import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { LogoWidget } from "@widgets/logo_widget";

import type { FooterWidgetPropsType } from "./types";

export const FooterWidget = ({ sx, ...props }: FooterWidgetPropsType) => {
  return (
    <Stack
      component="footer"
      width="100%"
      color="#FAFAFA"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#151515",
        borderTop: "1px solid rgba(250,250,250,0.08)",
        ...sx,
      }}
      {...props}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          right: -112,
          bottom: -120,
          border: "30px solid rgba(255,110,0,0.07)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Stack
        width="100%"
        maxWidth={1536}
        mx="auto"
        px={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        py={{ xs: 4, md: 5 }}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        gap={{ xs: 3, md: 4 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Button
          component={RouterLink}
          variant="clear"
          to={{
            pathname: "/",
          }}
          sx={{
            transition: "transform 180ms ease",
            "&:hover": {
              transform: "translateY(-1px)",
            },
          }}
        >
          <LogoWidget
            fontSize={28}
            sx={{
              color: "#FAFAFA",
              "& b": {
                color: "#FF6E00",
                fontWeight: 800,
              },
            }}
          />
        </Button>

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          gap={{ xs: 1.5, md: 2.5 }}
        >
          <Typography color="rgba(250,250,250,0.48)" fontSize={14}>
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://axiosinsights.com/"
              sx={{
                textDecoration: "none",
                transition: "color 180ms ease",
                "&:hover": { color: "#FAFAFA" },
              }}
            >
              axios insights
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>

          <Box
            aria-hidden
            sx={{
              display: { xs: "none", sm: "block" },
              width: 1,
              height: 20,
              backgroundColor: "rgba(250,250,250,0.12)",
            }}
          />

          <IconButton
            href="https://www.linkedin.com/company/axios-insights"
            target="_blank"
            color="inherit"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "8px",
              border: "1px solid rgba(250,250,250,0.10)",
              color: "rgba(250,250,250,0.68)",
              transition:
                "transform 180ms ease, color 180ms ease, border-color 180ms ease, background-color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: "#FF8034",
                borderColor: "rgba(255,110,0,0.30)",
                backgroundColor: "rgba(255,110,0,0.055)",
              },
            }}
          >
            <FontAwesomeIcon icon={faSquareLinkedin} fontSize={22} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
