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
      paddingTop={{ xs: 14, md: 17 }}
      paddingBottom={{ xs: 9, md: 11 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        backgroundColor: "#151515",
        backgroundImage:
          "radial-gradient(circle at 82% 24%, rgba(255,110,0,0.19), transparent 26%), radial-gradient(circle at 4% 92%, rgba(198,85,0,0.11), transparent 28%), linear-gradient(135deg, rgba(250,250,250,0.018), transparent 46%)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -2,
          opacity: 0.2,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(250,250,250,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.055) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.38) 68%, transparent 96%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.38) 68%, transparent 96%)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          zIndex: -1,
          left: "8%",
          right: "8%",
          bottom: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,110,0,0.45), transparent)",
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 190, md: 320 },
          height: { xs: 190, md: 320 },
          right: { xs: -120, md: -110 },
          top: { xs: 100, md: 116 },
          border: { xs: "30px solid", md: "50px solid" },
          borderColor: "rgba(255,110,0,0.15)",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(-18deg)",
          animation: "axios-drift 13s ease-in-out infinite",
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 150, md: 260 },
          height: { xs: 150, md: 260 },
          left: { xs: -100, md: -145 },
          bottom: { xs: 24, md: -36 },
          border: { xs: "24px solid", md: "40px solid" },
          borderColor: "rgba(250,250,250,0.045)",
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(16deg)",
        }}
      />

      <Box width="100%" maxWidth={1536} alignSelf="center">
        <Grid
          container
          spacing={{ xs: 8, lg: 10 }}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack gap={{ xs: 4, md: 5 }} maxWidth={760}>
              <Stack gap={{ xs: 2.5, md: 3 }}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <Box
                    aria-hidden
                    sx={{
                      width: 34,
                      height: 1,
                      backgroundColor: "#FF6E00",
                      boxShadow: "0 0 14px rgba(255,110,0,0.45)",
                    }}
                  />
                  <Typography
                    component="p"
                    fontSize={12}
                    fontWeight={700}
                    color="#FF8034"
                    sx={{ letterSpacing: "0.12em" }}
                  >
                    {t("pages.home.sections.hero.eyebrow")}
                  </Typography>
                </Stack>

                <Typography
                  component="h1"
                  color="inherit"
                  fontSize={{ xs: 44, sm: 52, md: 64 }}
                  fontWeight={600}
                  lineHeight={0.94}
                  maxWidth={720}
                  sx={{ textWrap: "balance" }}
                >
                  <Trans
                    i18nKey="pages.home.sections.hero.title"
                    components={{
                      1: (
                        <Box
                          component="span"
                          color="#FF6E00"
                          fontWeight={800}
                          sx={{
                            textShadow: "0 0 38px rgba(255,110,0,0.16)",
                          }}
                        />
                      ),
                    }}
                  />
                </Typography>

                <Typography
                  color="rgba(250,250,250,0.70)"
                  fontSize={{ xs: 18, md: 20 }}
                  lineHeight={1.48}
                  maxWidth={650}
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
                    boxShadow: "0 14px 24px -12px rgba(255,110,0,0.72)",
                    transition:
                      "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow:
                        "0 18px 30px -12px rgba(255,110,0,0.90)",
                    },
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
                    borderColor: "rgba(250,250,250,0.28)",
                    borderRadius: "8px",
                    fontWeight: 600,
                    backgroundColor: "rgba(250,250,250,0.015)",
                    transition:
                      "transform 180ms ease, border-color 180ms ease, background-color 180ms ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: "rgba(250,250,250,0.62)",
                      backgroundColor: "rgba(250,250,250,0.055)",
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
                      color: "rgba(250,250,250,0.68)",
                      borderColor: "rgba(250,250,250,0.12)",
                      borderRadius: "8px",
                      backgroundColor: "rgba(250,250,250,0.025)",
                      backdropFilter: "blur(8px)",
                      transition:
                        "border-color 180ms ease, background-color 180ms ease, color 180ms ease",
                      "&:hover": {
                        color: "rgba(250,250,250,0.92)",
                        borderColor: "rgba(255,110,0,0.40)",
                        backgroundColor: "rgba(255,110,0,0.05)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 660,
                mx: "auto",
                perspective: "1400px",
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  width: "72%",
                  height: "72%",
                  left: "14%",
                  top: "15%",
                  backgroundColor: "rgba(255,110,0,0.19)",
                  filter: "blur(78px)",
                  borderRadius: "50%",
                  animation: "axios-pulse 8s ease-in-out infinite",
                }}
              />

              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: { xs: "18px -8px -18px 18px", md: "24px -18px -24px 28px" },
                  borderRadius: "16px",
                  border: "1px solid rgba(255,110,0,0.12)",
                  backgroundColor: "rgba(255,110,0,0.025)",
                  transform: "rotate(2.2deg)",
                }}
              />

              <Stack
                gap={3}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "16px",
                  padding: { xs: 3, md: 4 },
                  color: "#FAFAFA",
                  background:
                    "linear-gradient(145deg, rgba(35,35,35,0.94), rgba(21,21,21,0.89))",
                  border: "1px solid rgba(250,250,250,0.15)",
                  boxShadow:
                    "0 32px 52px -24px rgba(0,0,0,0.88), inset 0 1px rgba(250,250,250,0.045)",
                  backdropFilter: "blur(18px)",
                  transform: { xs: "none", lg: "rotateY(-3.2deg) rotateX(1deg)" },
                  transformOrigin: "center center",
                  transition:
                    "transform 500ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease, box-shadow 300ms ease",
                  animation: "axios-float 10s ease-in-out infinite",
                  "&:hover": {
                    transform: "rotateY(0deg) rotateX(0deg) translateY(-3px)",
                    borderColor: "rgba(255,110,0,0.28)",
                    boxShadow:
                      "0 38px 62px -24px rgba(0,0,0,0.92), 0 0 0 1px rgba(255,110,0,0.05)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "22%",
                    opacity: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,110,0,0.055), transparent)",
                    animation: "axios-scan 9s ease-in-out 1.5s infinite",
                  },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    mx: { xs: -3, md: -4 },
                    mt: { xs: -3, md: -4 },
                    px: { xs: 2.5, md: 3 },
                    py: 1.5,
                    borderBottom: "1px solid rgba(250,250,250,0.075)",
                    backgroundColor: "rgba(250,250,250,0.018)",
                  }}
                >
                  <Stack direction="row" gap={0.75}>
                    {[0, 1, 2].map((dot) => (
                      <Box
                        key={dot}
                        aria-hidden
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor:
                            dot === 0
                              ? "#FF6E00"
                              : "rgba(250,250,250,0.18)",
                        }}
                      />
                    ))}
                  </Stack>
                  <Box
                    aria-hidden
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#FF8034",
                      boxShadow: "0 0 0 5px rgba(255,110,0,0.08)",
                      animation: "axios-pulse 2.8s ease-in-out infinite",
                    }}
                  />
                </Stack>

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
                      color="rgba(250,250,250,0.44)"
                      sx={{ letterSpacing: "0.10em" }}
                    >
                      {t("pages.home.sections.hero.demo.label")}
                    </Typography>
                    <Typography
                      color="inherit"
                      fontSize={{ xs: 24, md: 28 }}
                      fontWeight={600}
                      lineHeight={1}
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
                      boxShadow: "0 8px 18px -10px rgba(255,110,0,0.9)",
                    }}
                  />
                </Stack>

                <Divider sx={{ borderColor: "rgba(250,250,250,0.09)" }} />

                <Stack gap={1.75}>
                  <Typography
                    color="rgba(250,250,250,0.52)"
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
                            position: "relative",
                            overflow: "hidden",
                            height: "100%",
                            p: 2,
                            borderRadius: "8px",
                            border:
                              index === 0
                                ? "1px solid rgba(255,110,0,0.28)"
                                : "1px solid rgba(250,250,250,0.09)",
                            backgroundColor:
                              index === 0
                                ? "rgba(255,110,0,0.055)"
                                : "rgba(250,250,250,0.028)",
                            transition:
                              "transform 180ms ease, border-color 180ms ease, background-color 180ms ease",
                            "&:hover": {
                              transform: "translateY(-3px)",
                              borderColor: "rgba(255,110,0,0.30)",
                              backgroundColor: "rgba(255,110,0,0.055)",
                            },
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
                                    ? "0 0 0 5px rgba(255,110,0,0.09)"
                                    : "none",
                              }}
                            />
                            <Typography
                              color="rgba(250,250,250,0.40)"
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
                    position: "relative",
                    p: { xs: 2.5, md: 3 },
                    pl: { xs: 3, md: 3.5 },
                    borderRadius: "8px",
                    border: "1px solid rgba(255,110,0,0.38)",
                    backgroundColor: "rgba(255,110,0,0.09)",
                    boxShadow: "inset 3px 0 #FF6E00",
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
                    fontWeight={600}
                    lineHeight={1.25}
                  >
                    {t("pages.home.sections.hero.demo.action")}
                  </Typography>
                </Stack>

                <Typography
                  color="rgba(250,250,250,0.40)"
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
      </Box>
    </SectionWidget>
  );
};
