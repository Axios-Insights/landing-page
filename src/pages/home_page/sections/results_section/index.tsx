import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type MeasurementCard = {
  title: string;
  description: string;
};

export const ResultsSection = () => {
  const { t } = useTranslation();

  const sources = t("pages.home.sections.results.platform.sources.items", {
    returnObjects: true,
  }) as string[];

  const intelligenceItems = t(
    "pages.home.sections.results.platform.intelligence.items",
    {
      returnObjects: true,
    },
  ) as string[];

  const outputs = t("pages.home.sections.results.platform.outputs.items", {
    returnObjects: true,
  }) as string[];

  const scoreSignals = t("pages.home.sections.results.score.signals", {
    returnObjects: true,
  }) as string[];

  const scorePrinciples = t("pages.home.sections.results.score.principles", {
    returnObjects: true,
  }) as string[];

  const measurementCards = t(
    "pages.home.sections.results.measurement.cards",
    {
      returnObjects: true,
    },
  ) as MeasurementCard[];

  return (
    <SectionWidget
      id={SECTIONS.RESULTS}
      gap={{ xs: 10, md: 14 }}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F4F4F2",
        backgroundImage:
          "radial-gradient(circle at 92% 12%, rgba(255,110,0,0.05), transparent 23%)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          right: { xs: -105, md: -130 },
          top: { xs: 120, md: 86 },
          border: { xs: "24px solid", md: "38px solid" },
          borderColor: "rgba(255,110,0,0.055)",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(-14deg)",
        }}
      />

      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 10, md: 14 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack gap={2.5}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{ width: 34, height: 1, backgroundColor: "#FF6E00" }}
                />
                <Typography
                  component="p"
                  color="#C65500"
                  fontSize={12}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.results.eyebrow")}
                </Typography>
              </Stack>
              <Typography
                component="h2"
                fontSize={{ xs: 36, md: 48 }}
                fontWeight={600}
                lineHeight={0.98}
                maxWidth={900}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.results.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="#5C5C5C"
              fontSize={{ xs: 17, md: 18 }}
              lineHeight={1.55}
              sx={{ letterSpacing: "-0.02em" }}
            >
              {t("pages.home.sections.results.description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          alignItems="stretch"
          sx={{ position: "relative" }}
        >
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack
              gap={3}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                border: "1px solid #E2E2E2",
                backgroundColor: "rgba(250,250,250,0.96)",
                boxShadow: "0 8px 18px -16px rgba(0,0,0,0.32)",
                transition:
                  "transform 240ms cubic-bezier(.2,.8,.2,1), border-color 240ms ease, box-shadow 240ms ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgba(255,110,0,0.62), rgba(255,110,0,0.08), transparent)",
                },
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "rgba(255,110,0,0.24)",
                  boxShadow: "0 22px 34px -26px rgba(112,57,16,0.42)",
                },
              }}
            >
              <Stack gap={0.5}>
                <Typography
                  color="#959595"
                  fontSize={11}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.10em" }}
                >
                  01
                </Typography>
                <Typography fontSize={24} fontWeight={600} lineHeight={1.05}>
                  {t("pages.home.sections.results.platform.sources.title")}
                </Typography>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {sources.map((source) => (
                  <Chip
                    key={source}
                    label={source}
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      borderColor: "#CACACA",
                      backgroundColor: "#FAFAFA",
                      transition:
                        "border-color 160ms ease, background-color 160ms ease",
                      "&:hover": {
                        borderColor: "rgba(255,110,0,0.35)",
                        backgroundColor: "rgba(255,110,0,0.04)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              gap={4}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                p: { xs: 4, md: 5 },
                borderRadius: "16px",
                color: "#FAFAFA",
                backgroundColor: "#151515",
                backgroundImage:
                  "linear-gradient(rgba(250,250,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.025) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                border: "1px solid rgba(21,21,21,0.96)",
                boxShadow: "0 24px 38px -26px rgba(0,0,0,0.78)",
                transition:
                  "transform 260ms cubic-bezier(.2,.8,.2,1), box-shadow 260ms ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 30px 46px -26px rgba(0,0,0,0.88)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 86% 0%, rgba(255,110,0,0.14), transparent 30%)",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 220,
                  height: 220,
                  right: -126,
                  top: -136,
                  border: "38px solid rgba(255,110,0,0.15)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                },
              }}
            >
              <Stack gap={1.25} sx={{ position: "relative", zIndex: 1 }}>
                <Stack direction="row" alignItems="center" gap={1.25}>
                  <Box
                    aria-hidden
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FF6E00",
                      boxShadow: "0 0 0 5px rgba(255,110,0,0.08)",
                      animation: "axios-pulse 3.4s ease-in-out infinite",
                    }}
                  />
                  <Typography
                    color="#FF8034"
                    fontSize={11}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.10em" }}
                  >
                    02 · AXIOS
                  </Typography>
                </Stack>
                <Typography
                  color="inherit"
                  fontSize={{ xs: 28, md: 36 }}
                  fontWeight={700}
                  lineHeight={0.98}
                >
                  {t("pages.home.sections.results.platform.intelligence.title")}
                </Typography>
                <Typography
                  color="rgba(250,250,250,0.57)"
                  lineHeight={1.48}
                  maxWidth={620}
                  sx={{ letterSpacing: "-0.01em" }}
                >
                  {t(
                    "pages.home.sections.results.platform.intelligence.description",
                  )}
                </Typography>
              </Stack>

              <Grid container spacing={1.5} sx={{ position: "relative", zIndex: 1 }}>
                {intelligenceItems.map((item, index) => (
                  <Grid key={item} size={{ xs: 12, sm: 6 }}>
                    <Stack
                      direction="row"
                      alignItems="flex-start"
                      gap={1.5}
                      sx={{
                        height: "100%",
                        p: 2,
                        borderRadius: "8px",
                        border:
                          index === 0
                            ? "1px solid rgba(255,110,0,0.24)"
                            : "1px solid rgba(250,250,250,0.09)",
                        backgroundColor:
                          index === 0
                            ? "rgba(255,110,0,0.045)"
                            : "rgba(250,250,250,0.03)",
                        transition:
                          "transform 180ms ease, border-color 180ms ease, background-color 180ms ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          borderColor: "rgba(255,110,0,0.28)",
                          backgroundColor: "rgba(255,110,0,0.05)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          flex: "0 0 auto",
                          mt: "5px",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor:
                            index === 0 ? "#FF6E00" : "#F89E65",
                        }}
                      />
                      <Typography
                        color="inherit"
                        fontSize={15}
                        fontWeight={500}
                        lineHeight={1.25}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Stack
              gap={3}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                border: "1px solid #E2E2E2",
                backgroundColor: "rgba(250,250,250,0.96)",
                boxShadow: "0 8px 18px -16px rgba(0,0,0,0.32)",
                transition:
                  "transform 240ms cubic-bezier(.2,.8,.2,1), border-color 240ms ease, box-shadow 240ms ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgba(255,110,0,0.62), rgba(255,110,0,0.08), transparent)",
                },
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "rgba(255,110,0,0.24)",
                  boxShadow: "0 22px 34px -26px rgba(112,57,16,0.42)",
                },
              }}
            >
              <Stack gap={0.5}>
                <Typography
                  color="#959595"
                  fontSize={11}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.10em" }}
                >
                  03
                </Typography>
                <Typography fontSize={24} fontWeight={600} lineHeight={1.05}>
                  {t("pages.home.sections.results.platform.outputs.title")}
                </Typography>
              </Stack>

              <Stack gap={1}>
                {outputs.map((output) => (
                  <Stack
                    key={output}
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                      p: 1.5,
                      borderRadius: "8px",
                      border: "1px solid transparent",
                      backgroundColor: "#F4F4F2",
                      transition:
                        "transform 160ms ease, border-color 160ms ease, background-color 160ms ease",
                      "&:hover": {
                        transform: "translateX(2px)",
                        borderColor: "rgba(255,110,0,0.18)",
                        backgroundColor: "rgba(255,110,0,0.04)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#FF6E00",
                      }}
                    />
                    <Typography fontWeight={500}>{output}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
          sx={{
            position: "relative",
            overflow: "hidden",
            p: { xs: 4, md: 6 },
            borderRadius: "16px",
            color: "#FAFAFA",
            backgroundColor: "#151515",
            backgroundImage:
              "linear-gradient(rgba(250,250,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            border: "1px solid rgba(250,250,250,0.045)",
            boxShadow: "0 24px 38px -28px rgba(0,0,0,0.82)",
            "&::before": {
              content: '""',
              position: "absolute",
              width: 280,
              height: 280,
              right: -164,
              bottom: -174,
              border: "44px solid rgba(255,110,0,0.12)",
              borderRadius: "50%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 74% 38%, rgba(255,110,0,0.08), transparent 27%)",
              pointerEvents: "none",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative", zIndex: 1 }}>
            <Stack gap={3.5}>
              <Stack gap={1.75}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <Box
                    aria-hidden
                    sx={{ width: 34, height: 1, backgroundColor: "#FF6E00" }}
                  />
                  <Typography
                    color="#FF8034"
                    fontSize={12}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.12em" }}
                  >
                    {t("pages.home.sections.results.score.eyebrow")}
                  </Typography>
                </Stack>
                <Typography
                  color="inherit"
                  fontSize={{ xs: 32, md: 40 }}
                  fontWeight={600}
                  lineHeight={0.98}
                  sx={{ textWrap: "balance" }}
                >
                  {t("pages.home.sections.results.score.title")}
                </Typography>
                <Typography
                  color="rgba(250,250,250,0.60)"
                  fontSize={17}
                  lineHeight={1.52}
                  maxWidth={680}
                  sx={{ letterSpacing: "-0.015em" }}
                >
                  {t("pages.home.sections.results.score.description")}
                </Typography>
              </Stack>

              <Stack gap={1.25}>
                {scorePrinciples.map((principle, index) => (
                  <Stack
                    key={principle}
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                      p: 1.25,
                      pl: 0,
                      borderRadius: "8px",
                      transition: "transform 160ms ease",
                      "&:hover": { transform: "translateX(3px)" },
                    }}
                  >
                    <Box
                      sx={{
                        flex: "0 0 auto",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: index === 0 ? "#FF6E00" : "#F89E65",
                        boxShadow:
                          index === 0
                            ? "0 0 0 5px rgba(255,110,0,0.08)"
                            : "none",
                      }}
                    />
                    <Typography
                      color="rgba(250,250,250,0.76)"
                      fontWeight={500}
                      lineHeight={1.25}
                    >
                      {principle}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative", zIndex: 1 }}>
            <Stack
              gap={3}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                border: "1px solid rgba(250,250,250,0.13)",
                backgroundColor: "rgba(250,250,250,0.04)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px rgba(250,250,250,0.035)",
                transition:
                  "transform 260ms cubic-bezier(.2,.8,.2,1), border-color 260ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(255,110,0,0.28)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: 150,
                  height: 150,
                  right: -88,
                  top: -90,
                  border: "24px solid rgba(255,110,0,0.09)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                },
              }}
            >
              <Typography
                color="rgba(250,250,250,0.43)"
                fontSize={11}
                fontWeight={800}
                sx={{ letterSpacing: "0.10em" }}
              >
                {t("pages.home.sections.results.score.visual_label")}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {scoreSignals.map((signal, index) => (
                  <Chip
                    key={signal}
                    label={signal}
                    sx={{
                      color: "rgba(250,250,250,0.72)",
                      borderRadius: "8px",
                      border:
                        index === 0
                          ? "1px solid rgba(255,110,0,0.24)"
                          : "1px solid transparent",
                      backgroundColor:
                        index === 0
                          ? "rgba(255,110,0,0.07)"
                          : "rgba(250,250,250,0.065)",
                    }}
                  />
                ))}
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  height: 1,
                  background:
                    "linear-gradient(90deg, rgba(255,110,0,0), rgba(255,110,0,0.82), rgba(255,110,0,0))",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#FF6E00",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 0 5px rgba(255,110,0,0.08)",
                  },
                }}
              />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "flex-end" }}
                gap={2}
              >
                <Stack gap={0.5}>
                  <Typography
                    color="rgba(250,250,250,0.43)"
                    fontSize={12}
                    fontWeight={600}
                  >
                    {t("pages.home.sections.results.score.output_label")}
                  </Typography>
                  <Typography
                    color="inherit"
                    fontSize={{ xs: 26, md: 32 }}
                    fontWeight={700}
                  >
                    Score Axios
                  </Typography>
                </Stack>

                <Stack
                  gap={0.5}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderRadius: "8px",
                    border: "1px solid rgba(255,110,0,0.44)",
                    backgroundColor: "rgba(255,110,0,0.10)",
                    boxShadow: "0 12px 24px -18px rgba(255,110,0,0.72)",
                  }}
                >
                  <Typography
                    color="#FF9E65"
                    fontSize={11}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.08em" }}
                  >
                    {t("pages.home.sections.results.score.priority_label")}
                  </Typography>
                  <Typography color="inherit" fontWeight={700}>
                    {t("pages.home.sections.results.score.priority_value")}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Stack gap={{ xs: 5, md: 7 }}>
          <Grid container spacing={{ xs: 3, md: 8 }} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack gap={1.75}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <Box
                    aria-hidden
                    sx={{ width: 34, height: 1, backgroundColor: "#FF6E00" }}
                  />
                  <Typography
                    color="#C65500"
                    fontSize={12}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.12em" }}
                  >
                    {t("pages.home.sections.results.measurement.eyebrow")}
                  </Typography>
                </Stack>
                <Typography
                  fontSize={{ xs: 32, md: 40 }}
                  fontWeight={600}
                  lineHeight={0.98}
                  sx={{ textWrap: "balance" }}
                >
                  {t("pages.home.sections.results.measurement.title")}
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                color="#5C5C5C"
                lineHeight={1.52}
                sx={{ letterSpacing: "-0.015em" }}
              >
                {t("pages.home.sections.results.measurement.description")}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {measurementCards.map((card, index) => (
              <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack
                  gap={2}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    minHeight: { md: 220 },
                    p: 3,
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "0 8px 18px -16px rgba(0,0,0,0.28)",
                    transition:
                      "transform 240ms cubic-bezier(.2,.8,.2,1), border-color 240ms ease, box-shadow 240ms ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: index === 0 ? "54%" : "28%",
                      height: 3,
                      backgroundColor: "#FF6E00",
                      opacity: index === 0 ? 0.92 : 0.42,
                    },
                    "&::after": {
                      content: `"0${index + 1}"`,
                      position: "absolute",
                      right: 14,
                      bottom: -22,
                      color: "rgba(21,21,21,0.03)",
                      fontSize: 90,
                      fontWeight: 900,
                      letterSpacing: "-0.08em",
                      lineHeight: 1,
                    },
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(255,110,0,0.24)",
                      boxShadow: "0 22px 34px -26px rgba(112,57,16,0.38)",
                    },
                  }}
                >
                  <Typography
                    color="#FF6E00"
                    fontSize={12}
                    fontWeight={800}
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    0{index + 1}
                  </Typography>
                  <Typography
                    fontSize={20}
                    fontWeight={600}
                    lineHeight={1.1}
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    color="#5C5C5C"
                    fontSize={15}
                    lineHeight={1.48}
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </SectionWidget>
  );
};
