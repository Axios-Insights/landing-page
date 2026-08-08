import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const HeroSection = () => {
  const { t } = useTranslation();

  const trustPoints = t("pages.home.sections.hero.trust", {
    returnObjects: true,
  }) as string[];

  const signals = t("pages.home.sections.hero.demo.signals", {
    returnObjects: true,
  }) as string[];

  return (
    <SectionWidget
      id={SECTIONS.HERO}
      applyHeaderOffset={false}
      minHeight="100dvh"
      justifyContent="center"
      color="#FAFAFA"
      paddingTop={{ xs: 14, md: 16 }}
      paddingBottom={{ xs: 8, md: 10 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#151515",
        backgroundImage:
          "radial-gradient(circle at 85% 22%, rgba(255,110,0,0.22), transparent 28%), radial-gradient(circle at 15% 100%, rgba(255,110,0,0.10), transparent 32%)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(250,250,250,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.055) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.85), transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.85), transparent 88%)",
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          right: { xs: -105, md: -120 },
          top: { xs: 90, md: 120 },
          border: { xs: "32px solid", md: "52px solid" },
          borderColor: "rgba(255,110,0,0.16)",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(-18deg)",
        }}
      />

      <Grid
        container
        spacing={{ xs: 8, lg: 10 }}
        alignItems="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack gap={{ xs: 4, md: 5 }} maxWidth={760}>
            <Stack gap={2}>
              <Typography
                component="p"
                fontSize={12}
                fontWeight={700}
                color="#FF8034"
                sx={{ letterSpacing: "0.12em" }}
              >
                {t("pages.home.sections.hero.eyebrow")}
              </Typography>

              <Typography
                component="h1"
                color="inherit"
                fontSize={{ xs: 44, sm: 52, md: 64 }}
                fontWeight={650}
                lineHeight={0.96}
                maxWidth={720}
              >
                <Trans
                  i18nKey="pages.home.sections.hero.title"
                  components={{
                    1: (
                      <Box
                        component="span"
                        color="#FF6E00"
                        fontWeight={800}
                      />
                    ),
                  }}
                />
              </Typography>

              <Typography
                color="rgba(250,250,250,0.74)"
                fontSize={{ xs: 18, md: 20 }}
                lineHeight={1.45}
                maxWidth={660}
                sx={{ letterSpacing: "-0.025em" }}
              >
                {t("pages.home.sections.hero.subtitle")}
              </Typography>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
              <Button
                component={Link}
                to={{ hash: SECTIONS.ABOUT_US }}
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: 48,
                  px: 3,
                  borderRadius: "8px",
                  fontWeight: 700,
                  boxShadow: "0 12px 18px -1px rgba(255,110,0,0.18)",
                }}
              >
                {t("pages.home.sections.hero.primary_cta")}
              </Button>

              <Button
                component={Link}
                to={{ hash: SECTIONS.GET_IN_TOUCH }}
                variant="outlined"
                sx={{
                  minHeight: 48,
                  px: 3,
                  color: "#FAFAFA",
                  borderColor: "rgba(250,250,250,0.32)",
                  borderRadius: "8px",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#FAFAFA",
                    backgroundColor: "rgba(250,250,250,0.05)",
                  },
                }}
              >
                {t("pages.home.sections.hero.secondary_cta")}
              </Button>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {trustPoints.map((point) => (
                <Chip
                  key={point}
                  label={point}
                  variant="outlined"
                  sx={{
                    color: "rgba(250,250,250,0.72)",
                    borderColor: "rgba(250,250,250,0.14)",
                    borderRadius: "8px",
                    backgroundColor: "rgba(250,250,250,0.025)",
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ position: "relative", maxWidth: 640, mx: "auto" }}>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                width: "70%",
                height: "70%",
                left: "15%",
                top: "16%",
                backgroundColor: "rgba(255,110,0,0.20)",
                filter: "blur(72px)",
                borderRadius: "50%",
              }}
            />

            <Stack
              gap={3}
              sx={{
                position: "relative",
                borderRadius: "16px",
                padding: { xs: 3, md: 4 },
                color: "#FAFAFA",
                backgroundColor: "rgba(21,21,21,0.82)",
                border: "1px solid rgba(250,250,250,0.14)",
                boxShadow: "0 24px 36px -1px rgba(0,0,0,0.42)",
                backdropFilter: "blur(18px)",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                gap={2}
              >
                <Stack gap={0.5}>
                  <Typography
                    fontSize={11}
                    fontWeight={700}
                    color="rgba(250,250,250,0.48)"
                    sx={{ letterSpacing: "0.10em" }}
                  >
                    {t("pages.home.sections.hero.demo.label")}
                  </Typography>
                  <Typography
                    color="inherit"
                    fontSize={{ xs: 24, md: 28 }}
                    fontWeight={650}
                  >
                    {t("pages.home.sections.hero.demo.title")}
                  </Typography>
                </Stack>

                <Chip
                  label={t("pages.home.sections.hero.demo.priority")}
                  size="small"
                  sx={{
                    color: "#151515",
                    backgroundColor: "#FF8034",
                    borderRadius: "4px",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                  }}
                />
              </Stack>

              <Divider sx={{ borderColor: "rgba(250,250,250,0.10)" }} />

              <Stack gap={1.5}>
                <Typography
                  color="rgba(250,250,250,0.56)"
                  fontSize={13}
                  fontWeight={600}
                >
                  {t("pages.home.sections.hero.demo.context")}
                </Typography>

                <Grid container spacing={1.5}>
                  {signals.map((signal, index) => (
                    <Grid key={signal} size={{ xs: 12, sm: 4 }}>
                      <Stack
                        gap={1.5}
                        sx={{
                          height: "100%",
                          p: 2,
                          borderRadius: "8px",
                          border: "1px solid rgba(250,250,250,0.10)",
                          backgroundColor: "rgba(250,250,250,0.035)",
                        }}
                      >
                        <Stack direction="row" alignItems="center" gap={1}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor:
                                index === 0 ? "#FF6E00" : "#F89E65",
                              boxShadow:
                                index === 0
                                  ? "0 0 0 5px rgba(255,110,0,0.10)"
                                  : "none",
                            }}
                          />
                          <Typography
                            color="rgba(250,250,250,0.46)"
                            fontSize={12}
                            fontWeight={600}
                          >
                            0{index + 1}
                          </Typography>
                        </Stack>
                        <Typography
                          color="inherit"
                          fontSize={15}
                          fontWeight={600}
                          lineHeight={1.2}
                        >
                          {signal}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>

              <Stack
                gap={1}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "8px",
                  border: "1px solid rgba(255,110,0,0.44)",
                  backgroundColor: "rgba(255,110,0,0.11)",
                }}
              >
                <Typography
                  color="#FF9E65"
                  fontSize={12}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.08em" }}
                >
                  {t("pages.home.sections.hero.demo.action_label")}
                </Typography>
                <Typography
                  color="inherit"
                  fontSize={{ xs: 17, md: 19 }}
                  fontWeight={650}
                  lineHeight={1.25}
                >
                  {t("pages.home.sections.hero.demo.action")}
                </Typography>
              </Stack>

              <Typography
                color="rgba(250,250,250,0.46)"
                fontSize={12}
                lineHeight={1.35}
                sx={{ letterSpacing: "-0.01em" }}
              >
                {t("pages.home.sections.hero.demo.audit")}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </SectionWidget>
  );
};
