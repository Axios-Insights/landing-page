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
      }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack gap={2}>
            <Typography
              component="p"
              color="#C65500"
              fontSize={12}
              fontWeight={800}
              sx={{ letterSpacing: "0.12em" }}
            >
              {t("pages.home.sections.results.eyebrow")}
            </Typography>
            <Typography
              component="h2"
              fontSize={{ xs: 36, md: 48 }}
              fontWeight={650}
              lineHeight={1}
              maxWidth={900}
            >
              {t("pages.home.sections.results.title")}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            color="#5C5C5C"
            fontSize={{ xs: 17, md: 18 }}
            lineHeight={1.5}
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
              height: "100%",
              p: { xs: 3, md: 4 },
              borderRadius: "16px",
              border: "1px solid #E2E2E2",
              backgroundColor: "#FAFAFA",
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
              <Typography fontSize={24} fontWeight={650}>
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
              border: "1px solid #151515",
              boxShadow: "0 16px 24px -1px rgba(0,0,0,0.14)",
              "&::after": {
                content: '""',
                position: "absolute",
                width: 220,
                height: 220,
                right: -125,
                top: -135,
                border: "38px solid rgba(255,110,0,0.17)",
                borderRadius: "50%",
              },
            }}
          >
            <Stack gap={1} sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                color="#FF8034"
                fontSize={11}
                fontWeight={800}
                sx={{ letterSpacing: "0.10em" }}
              >
                02 · AXIOS
              </Typography>
              <Typography
                color="inherit"
                fontSize={{ xs: 28, md: 36 }}
                fontWeight={700}
                lineHeight={1}
              >
                {t(
                  "pages.home.sections.results.platform.intelligence.title",
                )}
              </Typography>
              <Typography
                color="rgba(250,250,250,0.58)"
                lineHeight={1.45}
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
                      border: "1px solid rgba(250,250,250,0.10)",
                      backgroundColor: "rgba(250,250,250,0.035)",
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
                      fontWeight={550}
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
              height: "100%",
              p: { xs: 3, md: 4 },
              borderRadius: "16px",
              border: "1px solid #E2E2E2",
              backgroundColor: "#FAFAFA",
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
              <Typography fontSize={24} fontWeight={650}>
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
                    backgroundColor: "#F4F4F2",
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
                  <Typography fontWeight={550}>{output}</Typography>
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
          p: { xs: 4, md: 6 },
          borderRadius: "16px",
          color: "#FAFAFA",
          backgroundColor: "#151515",
          overflow: "hidden",
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={3}>
            <Stack gap={1.5}>
              <Typography
                color="#FF8034"
                fontSize={12}
                fontWeight={800}
                sx={{ letterSpacing: "0.12em" }}
              >
                {t("pages.home.sections.results.score.eyebrow")}
              </Typography>
              <Typography
                color="inherit"
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={650}
                lineHeight={1}
              >
                {t("pages.home.sections.results.score.title")}
              </Typography>
              <Typography
                color="rgba(250,250,250,0.62)"
                fontSize={17}
                lineHeight={1.5}
                maxWidth={680}
                sx={{ letterSpacing: "-0.015em" }}
              >
                {t("pages.home.sections.results.score.description")}
              </Typography>
            </Stack>

            <Stack gap={1.25}>
              {scorePrinciples.map((principle) => (
                <Stack
                  key={principle}
                  direction="row"
                  alignItems="center"
                  gap={1.5}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FF6E00",
                    }}
                  />
                  <Typography
                    color="rgba(250,250,250,0.78)"
                    fontWeight={550}
                    lineHeight={1.25}
                  >
                    {principle}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            gap={3}
            sx={{
              position: "relative",
              p: { xs: 3, md: 4 },
              borderRadius: "16px",
              border: "1px solid rgba(250,250,250,0.14)",
              backgroundColor: "rgba(250,250,250,0.045)",
            }}
          >
            <Typography
              color="rgba(250,250,250,0.46)"
              fontSize={11}
              fontWeight={800}
              sx={{ letterSpacing: "0.10em" }}
            >
              {t("pages.home.sections.results.score.visual_label")}
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {scoreSignals.map((signal) => (
                <Chip
                  key={signal}
                  label={signal}
                  sx={{
                    color: "rgba(250,250,250,0.74)",
                    borderRadius: "8px",
                    backgroundColor: "rgba(250,250,250,0.07)",
                  }}
                />
              ))}
            </Stack>

            <Box
              sx={{
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(255,110,0,0), rgba(255,110,0,0.85), rgba(255,110,0,0))",
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
                  color="rgba(250,250,250,0.46)"
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
                  border: "1px solid rgba(255,110,0,0.48)",
                  backgroundColor: "rgba(255,110,0,0.12)",
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
            <Stack gap={1.5}>
              <Typography
                color="#C65500"
                fontSize={12}
                fontWeight={800}
                sx={{ letterSpacing: "0.12em" }}
              >
                {t("pages.home.sections.results.measurement.eyebrow")}
              </Typography>
              <Typography
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={650}
                lineHeight={1}
              >
                {t("pages.home.sections.results.measurement.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              color="#5C5C5C"
              lineHeight={1.5}
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
                  height: "100%",
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid #E2E2E2",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <Typography
                  color="#FF6E00"
                  fontSize={12}
                  fontWeight={800}
                >
                  0{index + 1}
                </Typography>
                <Typography fontSize={20} fontWeight={650} lineHeight={1.1}>
                  {card.title}
                </Typography>
                <Typography
                  color="#5C5C5C"
                  fontSize={15}
                  lineHeight={1.45}
                  sx={{ letterSpacing: "-0.01em" }}
                >
                  {card.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </SectionWidget>
  );
};
