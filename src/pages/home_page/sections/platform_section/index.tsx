import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type MeasurementCard = {
  title: string;
  description: string;
};

export const PlatformSection = () => {
  const { t } = useTranslation();

  const sources = t("pages.home.sections.results.platform.sources.items", {
    returnObjects: true,
  }) as string[];

  const intelligenceItems = t(
    "pages.home.sections.results.platform.intelligence.items",
    { returnObjects: true },
  ) as string[];

  const outputs = t("pages.home.sections.results.platform.outputs.items", {
    returnObjects: true,
  }) as string[];

  const measurementCards = t(
    "pages.home.sections.results.measurement.cards",
    { returnObjects: true },
  ) as MeasurementCard[];

  const columns = [
    {
      number: "01",
      title: t("pages.home.sections.results.platform.sources.title"),
      items: sources,
      emphasis: false,
    },
    {
      number: "02 · AXIOS",
      title: t("pages.home.sections.results.platform.intelligence.title"),
      description: t(
        "pages.home.sections.results.platform.intelligence.description",
      ),
      items: intelligenceItems,
      emphasis: true,
    },
    {
      number: "03",
      title: t("pages.home.sections.results.platform.outputs.title"),
      items: outputs,
      emphasis: false,
    },
  ];

  return (
    <SectionWidget
      id={SECTIONS.RESULTS}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F4F4F2",
        backgroundImage:
          "radial-gradient(circle at 92% 8%, rgba(255,110,0,0.06), transparent 22%)",
      }}
    >
      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 8, md: 11 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack gap={2.5}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{ width: 34, height: "1px", backgroundColor: "#FF6E00" }}
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

        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
          {columns.map((column) => (
            <Grid
              key={column.number}
              size={{ xs: 12, md: column.emphasis ? 6 : 3 }}
            >
              <Stack
                gap={3}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: { md: 390 },
                  p: { xs: 3, md: column.emphasis ? 5 : 4 },
                  borderRadius: "16px",
                  color: column.emphasis ? "#FAFAFA" : "#151515",
                  backgroundColor: column.emphasis ? "#151515" : "#FAFAFA",
                  backgroundImage: column.emphasis
                    ? "linear-gradient(rgba(250,250,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.025) 1px, transparent 1px)"
                    : "none",
                  backgroundSize: "40px 40px",
                  border: column.emphasis
                    ? "1px solid rgba(21,21,21,0.96)"
                    : "1px solid #E2E2E2",
                  boxShadow: column.emphasis
                    ? "0 28px 44px -30px rgba(0,0,0,0.82)"
                    : "0 12px 22px -20px rgba(0,0,0,0.28)",
                  transition:
                    "transform 240ms cubic-bezier(.2,.8,.2,1), border-color 240ms ease, box-shadow 240ms ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: column.emphasis
                      ? "rgba(255,110,0,0.32)"
                      : "rgba(255,110,0,0.24)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: column.emphasis ? "58%" : "34%",
                    height: 3,
                    backgroundColor: "#FF6E00",
                    opacity: column.emphasis ? 1 : 0.56,
                  },
                }}
              >
                <Stack gap={1.25} sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    color={column.emphasis ? "#FF8034" : "#959595"}
                    fontSize={11}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.10em" }}
                  >
                    {column.number}
                  </Typography>
                  <Typography
                    color="inherit"
                    fontSize={{ xs: 24, md: column.emphasis ? 34 : 26 }}
                    fontWeight={650}
                    lineHeight={1.02}
                    sx={{ textWrap: "balance" }}
                  >
                    {column.title}
                  </Typography>
                  {column.description && (
                    <Typography
                      color="rgba(250,250,250,0.57)"
                      lineHeight={1.48}
                      sx={{ letterSpacing: "-0.01em" }}
                    >
                      {column.description}
                    </Typography>
                  )}
                </Stack>

                {column.emphasis ? (
                  <Grid container spacing={1.25} sx={{ position: "relative", zIndex: 1 }}>
                    {column.items.map((item, index) => (
                      <Grid key={item} size={{ xs: 12, sm: 6 }}>
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          gap={1.25}
                          sx={{
                            height: "100%",
                            p: 1.75,
                            borderRadius: "8px",
                            border:
                              index === 0
                                ? "1px solid rgba(255,110,0,0.24)"
                                : "1px solid rgba(250,250,250,0.09)",
                            backgroundColor:
                              index === 0
                                ? "rgba(255,110,0,0.045)"
                                : "rgba(250,250,250,0.03)",
                          }}
                        >
                          <Box
                            aria-hidden
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
                            lineHeight={1.3}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Stack gap={1} sx={{ position: "relative", zIndex: 1 }}>
                    {column.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        variant="outlined"
                        sx={{
                          height: "auto",
                          justifyContent: "flex-start",
                          borderRadius: "8px",
                          borderColor: "#E2E2E2",
                          backgroundColor: "#F4F4F2",
                          "& .MuiChip-label": {
                            display: "block",
                            py: 1,
                            whiteSpace: "normal",
                            textAlign: "left",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack gap={{ xs: 5, md: 7 }}>
          <Grid container spacing={{ xs: 3, md: 8 }} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack gap={1.75}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <Box
                    aria-hidden
                    sx={{ width: 34, height: "1px", backgroundColor: "#FF6E00" }}
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
                    minHeight: { md: 205 },
                    p: 3,
                    borderRadius: "16px",
                    border: "1px solid #E2E2E2",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "0 8px 18px -16px rgba(0,0,0,0.28)",
                    transition:
                      "transform 220ms cubic-bezier(.2,.8,.2,1), border-color 220ms ease, box-shadow 220ms ease",
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
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "rgba(255,110,0,0.24)",
                      boxShadow: "0 22px 32px -26px rgba(112,57,16,0.42)",
                    },
                  }}
                >
                  <Typography
                    color="#C65500"
                    fontSize={12}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.08em" }}
                  >
                    0{index + 1}
                  </Typography>
                  <Typography fontSize={21} fontWeight={650} lineHeight={1.05}>
                    {card.title}
                  </Typography>
                  <Typography color="#5C5C5C" fontSize={14} lineHeight={1.45}>
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
