import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type Capability = {
  title: string;
  description: string;
};

type ProductScreen = {
  title: string;
  description: string;
  alt: string;
};

const screenshotPaths = [
  "/product/product-alert-queue-map.png",
  "/product/product-case-map-evidence.png",
  "/product/product-risk-rankings.png",
] as const;

export const ProductTodaySection = () => {
  const { t } = useTranslation();

  const capabilities = t("pages.home.sections.product_today.capabilities", {
    returnObjects: true,
  }) as Capability[];

  const screens: ProductScreen[] = [
    {
      title: t("pages.home.sections.product_today.demo.queue_title"),
      description: t("pages.home.sections.product_today.demo.queue_subtitle"),
      alt: `${t("pages.home.sections.product_today.demo.queue_title")} — ${t(
        "pages.home.sections.product_today.demo.queue_subtitle",
      )}`,
    },
    {
      title: t("pages.home.sections.product_today.demo.case_title"),
      description: capabilities[2]?.description ?? "",
      alt: t("pages.home.sections.product_today.demo.case_title"),
    },
    {
      title: capabilities[4]?.title ?? "",
      description: capabilities[4]?.description ?? "",
      alt: capabilities[4]?.title ?? "",
    },
  ];

  return (
    <SectionWidget
      id={SECTIONS.PRODUCT_TODAY}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        // "clip" instead of "hidden" so the sticky capability list still works.
        overflow: "clip",
        color: "#FAFAFA",
        backgroundColor: "#151515",
        backgroundImage:
          "radial-gradient(circle at 86% 12%, rgba(255,110,0,0.16), transparent 25%), linear-gradient(rgba(250,250,250,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.026) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
      }}
    >
      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 7, md: 9 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack gap={2.5}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{ width: 34, height: "1px", backgroundColor: "#FF6E00" }}
                />
                <Typography
                  component="p"
                  fontSize={12}
                  fontWeight={800}
                  color="#FF8034"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.product_today.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                color="inherit"
                fontSize={{ xs: 38, md: 52 }}
                fontWeight={650}
                lineHeight={0.96}
                maxWidth={900}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.product_today.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack gap={2}>
              <Typography
                color="rgba(250,250,250,0.62)"
                fontSize={{ xs: 17, md: 18 }}
                lineHeight={1.52}
                sx={{ letterSpacing: "-0.02em" }}
              >
                {t("pages.home.sections.product_today.description")}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                <Chip
                  label={t("pages.home.sections.product_today.status")}
                  size="small"
                  sx={{
                    borderRadius: "6px",
                    color: "#FAFAFA",
                    backgroundColor: "#FF6E00",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                />
                <Chip
                  label={t("pages.home.sections.product_today.demo.data_label")}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: "6px",
                    color: "rgba(250,250,250,0.68)",
                    borderColor: "rgba(250,250,250,0.18)",
                    fontWeight: 700,
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* One hairline-divided panel sized to its content: 1 column on
                phones, 2 on tablets and a sticky sidebar next to the
                screenshots on large screens, instead of cards stretched to
                the screenshots' height. */}
            <Box
              component="ol"
              sx={{
                m: 0,
                p: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  lg: "1fr",
                },
                gap: "1px",
                overflow: "hidden",
                borderRadius: "14px",
                border: "1px solid rgba(250,250,250,0.10)",
                backgroundColor: "rgba(250,250,250,0.08)",
                "@media (min-width: 1200px) and (min-height: 760px)": {
                  position: "sticky",
                  top: "calc(var(--header-height, 72px) + 32px)",
                },
              }}
            >
              {capabilities.map((capability, index) => (
                <Stack
                  key={capability.title}
                  component="li"
                  direction="row"
                  gap={2}
                  sx={{
                    px: { xs: 2.25, md: 2.5 },
                    py: { xs: 2, md: 2.25, lg: 2 },
                    backgroundColor: "#1A1A1A",
                    transition: "background-color 180ms ease",
                    "&:hover": {
                      backgroundColor: "#211B17",
                    },
                  }}
                >
                  <Typography
                    color="#FF8034"
                    fontSize={12}
                    fontWeight={800}
                    lineHeight={1.6}
                    sx={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    0{index + 1}
                  </Typography>
                  <Stack gap={0.4} minWidth={0}>
                    <Typography
                      color="inherit"
                      fontSize={16}
                      fontWeight={650}
                      lineHeight={1.3}
                    >
                      {capability.title}
                    </Typography>
                    <Typography
                      color="rgba(250,250,250,0.56)"
                      fontSize={13.5}
                      lineHeight={1.45}
                    >
                      {capability.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack gap={2.5} height="100%">
              <Stack
                gap={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: "16px",
                  border: "1px solid rgba(250,250,250,0.14)",
                  backgroundColor: "#202020",
                  boxShadow: "0 32px 52px -28px rgba(0,0,0,0.92)",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                  gap={1.5}
                  sx={{ px: { xs: 2.5, md: 3 }, py: 2 }}
                >
                  <Stack gap={0.35}>
                    <Typography
                      color="#FF8034"
                      fontSize={11}
                      fontWeight={800}
                      sx={{ letterSpacing: "0.10em" }}
                    >
                      01 · {t("pages.home.sections.product_today.status")}
                    </Typography>
                    <Typography color="inherit" fontSize={20} fontWeight={650}>
                      {screens[0].title}
                    </Typography>
                  </Stack>
                  <Chip
                    label={t("pages.home.sections.product_today.demo.data_label")}
                    size="small"
                    sx={{
                      borderRadius: "6px",
                      color: "#FAFAFA",
                      backgroundColor: "#FF6E00",
                      fontWeight: 800,
                    }}
                  />
                </Stack>

                <Box
                  component="img"
                  src={screenshotPaths[0]}
                  alt={screens[0].alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#FAFAFA",
                  }}
                />

                <Typography
                  color="rgba(250,250,250,0.54)"
                  fontSize={13}
                  lineHeight={1.45}
                  sx={{ px: { xs: 2.5, md: 3 }, py: 2 }}
                >
                  {screens[0].description}
                </Typography>
              </Stack>

              <Grid container spacing={2.5}>
                {screens.slice(1).map((screen, index) => {
                  const path = screenshotPaths[index + 1];

                  return (
                    <Grid key={screen.title} size={{ xs: 12, md: 6 }}>
                      <Stack
                        height="100%"
                        gap={0}
                        sx={{
                          overflow: "hidden",
                          borderRadius: "14px",
                          border: "1px solid rgba(250,250,250,0.11)",
                          backgroundColor: "rgba(250,250,250,0.035)",
                          transition:
                            "transform 220ms cubic-bezier(.2,.8,.2,1), border-color 220ms ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor: "rgba(255,110,0,0.30)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            overflow: "hidden",
                            aspectRatio: "16 / 9.2",
                            backgroundColor: "#FAFAFA",
                          }}
                        >
                          <Box
                            component="img"
                            src={path}
                            alt={screen.alt}
                            loading="lazy"
                            decoding="async"
                            sx={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top center",
                            }}
                          />
                        </Box>

                        <Stack gap={0.8} sx={{ p: 2.5 }}>
                          <Typography
                            color="#FF8034"
                            fontSize={11}
                            fontWeight={800}
                            sx={{ letterSpacing: "0.09em" }}
                          >
                            0{index + 2}
                          </Typography>
                          <Typography color="inherit" fontSize={18} fontWeight={650}>
                            {screen.title}
                          </Typography>
                          <Typography
                            color="rgba(250,250,250,0.50)"
                            fontSize={13}
                            lineHeight={1.4}
                          >
                            {screen.description}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          color="rgba(250,250,250,0.44)"
          fontSize={12.5}
          lineHeight={1.5}
          maxWidth={960}
        >
          {t("pages.home.sections.product_today.demo.note")}
        </Typography>
      </Box>
    </SectionWidget>
  );
};
