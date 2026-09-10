import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

type AxisCard = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export const UseCasesSection = () => {
  const { t } = useTranslation();

  const axes = t("pages.home.sections.use_cases.axes", {
    returnObjects: true,
  }) as AxisCard[];

  const geoMetrics = t("pages.home.sections.use_cases.geo_visual.metrics", {
    returnObjects: true,
  }) as string[];

  return (
    <SectionWidget
      id="use-cases"
      gap={{ xs: 7, md: 10 }}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#151515",
        color: "#FAFAFA",
        backgroundImage:
          "radial-gradient(circle at 92% 18%, rgba(255,110,0,0.14), transparent 24%), linear-gradient(rgba(250,250,250,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.028) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
      }}
    >
      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 7, md: 10 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack gap={2.5}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{ width: 34, height: 1, backgroundColor: "#FF6E00" }}
                />
                <Typography
                  component="p"
                  fontSize={12}
                  fontWeight={800}
                  color="#FF8034"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.use_cases.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                color="inherit"
                fontSize={{ xs: 36, md: 48 }}
                fontWeight={600}
                lineHeight={0.98}
                maxWidth={880}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.use_cases.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              color="rgba(250,250,250,0.62)"
              fontSize={{ xs: 17, md: 18 }}
              lineHeight={1.55}
              sx={{ letterSpacing: "-0.02em" }}
            >
              {t("pages.home.sections.use_cases.description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 3, md: 3 }} alignItems="stretch">
          {axes.map((axis, index) => (
            <Grid key={axis.title} size={{ xs: 12, lg: 6 }}>
              <Stack
                gap={4}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: { md: 430 },
                  p: { xs: 3.5, md: 5 },
                  borderRadius: "16px",
                  border:
                    index === 1
                      ? "1px solid rgba(255,110,0,0.38)"
                      : "1px solid rgba(250,250,250,0.12)",
                  background:
                    index === 1
                      ? "linear-gradient(145deg, rgba(54,31,16,0.92), rgba(21,21,21,0.96))"
                      : "linear-gradient(145deg, rgba(38,38,38,0.94), rgba(21,21,21,0.96))",
                  boxShadow:
                    index === 1
                      ? "0 28px 46px -32px rgba(255,110,0,0.60)"
                      : "0 28px 46px -32px rgba(0,0,0,0.82)",
                  transition:
                    "transform 260ms cubic-bezier(.2,.8,.2,1), border-color 260ms ease, box-shadow 260ms ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor:
                      index === 1
                        ? "rgba(255,110,0,0.58)"
                        : "rgba(250,250,250,0.22)",
                  },
                }}
              >
                <Stack gap={2.5} sx={{ position: "relative", zIndex: 1 }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                    gap={2}
                  >
                    <Typography
                      color={index === 1 ? "#FF8034" : "rgba(250,250,250,0.48)"}
                      fontSize={12}
                      fontWeight={800}
                      sx={{ letterSpacing: "0.11em" }}
                    >
                      {axis.eyebrow}
                    </Typography>

                    <Chip
                      label={`0${index + 1}`}
                      size="small"
                      sx={{
                        minWidth: 42,
                        borderRadius: "4px",
                        color: index === 1 ? "#151515" : "rgba(250,250,250,0.62)",
                        backgroundColor:
                          index === 1 ? "#FF8034" : "rgba(250,250,250,0.07)",
                        fontWeight: 800,
                      }}
                    />
                  </Stack>

                  <Typography
                    color="inherit"
                    fontSize={{ xs: 30, md: 38 }}
                    fontWeight={600}
                    lineHeight={1}
                    sx={{ textWrap: "balance" }}
                  >
                    {axis.title}
                  </Typography>

                  <Typography
                    color="rgba(250,250,250,0.60)"
                    fontSize={17}
                    lineHeight={1.5}
                    maxWidth={680}
                    sx={{ letterSpacing: "-0.015em" }}
                  >
                    {axis.description}
                  </Typography>
                </Stack>

                <Grid container spacing={1.5} sx={{ position: "relative", zIndex: 1 }}>
                  {axis.items.map((item) => (
                    <Grid key={item} size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        gap={1.5}
                        sx={{
                          height: "100%",
                          p: 2,
                          borderRadius: "8px",
                          border: "1px solid rgba(250,250,250,0.09)",
                          backgroundColor: "rgba(250,250,250,0.035)",
                        }}
                      >
                        <Box
                          aria-hidden
                          sx={{
                            flex: "0 0 auto",
                            mt: "6px",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: index === 1 ? "#FF6E00" : "#F89E65",
                            boxShadow:
                              index === 1
                                ? "0 0 0 5px rgba(255,110,0,0.08)"
                                : "none",
                          }}
                        />
                        <Typography
                          color="rgba(250,250,250,0.78)"
                          fontSize={15}
                          fontWeight={500}
                          lineHeight={1.35}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>

                {index === 1 && (
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      mt: "auto",
                      minHeight: 150,
                      borderRadius: "12px",
                      border: "1px solid rgba(255,110,0,0.18)",
                      backgroundColor: "rgba(0,0,0,0.20)",
                      backgroundImage:
                        "linear-gradient(rgba(250,250,250,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.045) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        position: "absolute",
                        left: "12%",
                        top: "18%",
                        width: "36%",
                        height: "58%",
                        border: "1px dashed rgba(255,110,0,0.72)",
                        borderRadius: "40% 28% 46% 32%",
                        transform: "rotate(-7deg)",
                        backgroundColor: "rgba(255,110,0,0.06)",
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: "absolute",
                        left: "24%",
                        top: "42%",
                        width: 11,
                        height: 11,
                        borderRadius: "50%",
                        backgroundColor: "#FF6E00",
                        boxShadow: "0 0 0 7px rgba(255,110,0,0.12)",
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: "absolute",
                        left: "57%",
                        top: "28%",
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#F89E65",
                        boxShadow: "0 0 0 6px rgba(248,158,101,0.09)",
                      }}
                    />

                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={1}
                      sx={{
                        position: "absolute",
                        right: 14,
                        bottom: 14,
                        maxWidth: "62%",
                        justifyContent: "flex-end",
                      }}
                    >
                      {geoMetrics.map((metric) => (
                        <Chip
                          key={metric}
                          label={metric}
                          size="small"
                          sx={{
                            color: "rgba(250,250,250,0.70)",
                            borderRadius: "6px",
                            backgroundColor: "rgba(21,21,21,0.78)",
                            border: "1px solid rgba(250,250,250,0.09)",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWidget>
  );
};
