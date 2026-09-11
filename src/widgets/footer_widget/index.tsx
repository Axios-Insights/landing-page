import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { LogoWidget } from "@widgets/logo_widget";

import { companyLegalName, companyLocation, companyTaxId } from "./constants";

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
        gap={{ xs: 3, md: 3.5 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
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
            <LogoWidget fontSize={28} color="#FAFAFA" />
          </Button>

          <IconButton
            href="https://www.linkedin.com/company/axios-insights"
            target="_blank"
            color="inherit"
            aria-label="LinkedIn"
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

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          gap={{ xs: 1, md: 3 }}
          sx={{
            pt: { xs: 2.5, md: 3 },
            borderTop: "1px solid rgba(250,250,250,0.08)",
          }}
        >
          <Typography color="rgba(250,250,250,0.48)" fontSize={13}>
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

          <Typography
            color="rgba(250,250,250,0.48)"
            fontSize={13}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              columnGap: 1,
              rowGap: 0.25,
              "& > span + span::before": {
                display: { xs: "none", sm: "inline" },
                content: '"·"',
                mr: 1,
                color: "rgba(250,250,250,0.24)",
              },
            }}
          >
            <span>{companyLegalName}</span>
            <span>CNPJ {companyTaxId}</span>
            <span>{companyLocation}</span>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
