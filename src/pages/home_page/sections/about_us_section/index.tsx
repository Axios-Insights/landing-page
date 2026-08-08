import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type ContentCard = {
  title: string;
  description: string;
};

export const AboutUsSection = () => {
  const { t } = useTranslation();

  const painPoints = t("pages.home.sections.about_us.pain_points", {
    returnObjects: true,
  }) as ContentCard[];

  const flowSteps = t("pages.home.sections.about_us.flow.steps", {
    returnObjects: true,
  }) as ContentCard[];

  return (
    <SectionWidget
      id={SECTIONS.ABOUT_US}
      gap={{ xs: 8, md: 12 }}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 160, md: 260 },
          height: { xs: 160, md: 260 },
          left: { xs: -110, md: -150 },
          top: { xs: 180, md: 120 },
          border: { xs: "28px solid", md: "44px solid" },
          borderColor: "rgba(255,110,0,0.08)",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
        }}
      />

      <Grid
        container
        spacing={{ xs: 5, md: 8 }}
        alignItems="flex-end"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack gap={2}>
            <Typography
              component="p"
              fontSize={12}
              fontWeight={800}
              color="#C65500"
              sx={{ letterSpacing: "0.12em" }}
            >
              {t("pages.home.sections.about_us.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              fontSize={{ xs: 36, md: 48 }}
              fontWeight={650}
              lineHeight={1}
              maxWidth={820}
            >
              {t("pages.home.sections.about_us.title")}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            color="#5C5C5C"
            fontSize={{ xs: 17, md: 18 }}
            lineHeight={1.5}
            sx={{ letterSpacing: "-0.02em" }}
          >
            {t("pages.home.sections.about_us.description")}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        {painPoints.map((point, index) => (
          <Grid key={point.title} size={{ xs: 12, md: 4 }}>
            <Stack
              gap={3}
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                border: "1px solid #E2E2E2",
                backgroundColor: "rgba(250,250,250,0.92)",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.04)",
              }}
            >
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Typography
                  color="#FF6E00"
                  fontSize={12}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.08em" }}
                >
                  0{index + 1}
                </Typography>
                <Box
                  sx={{
                    width: 36,
                    height: 1,
                    backgroundColor: "#CACACA",
                  }}
                />
              </Stack>

              <Stack gap={1.5}>
                <Typography fontSize={24} fontWeight={650} lineHeight={1.05}>
                  {point.title}
                </Typography>
                <Typography
                  color="#5C5C5C"
                  lineHeight={1.5}
                  sx={{ letterSpacing: "-0.015em" }}
                >
                  {point.description}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack
        gap={{ xs: 6, md: 8 }}
        sx={{
          position: "relative",
          overflow: "hidden",
          p: { xs: 4, md: 6 },
          borderRadius: "16px",
          color: "#FAFAFA",
          backgroundColor: "#151515",
          boxShadow: "0 16px 24px -1px rgba(0,0,0,0.16)",
          "&::after": {
            content: '""',
            position: "absolute",
            width: 260,
            height: 260,
            right: -150,
            bottom: -165,
            border: "44px solid rgba(255,110,0,0.14)",
            borderRadius: "50%",
          },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack gap={2}>
              <Typography
                color="#FF8034"
                fontSize={12}
                fontWeight={800}
                sx={{ letterSpacing: "0.12em" }}
              >
                {t("pages.home.sections.about_us.flow.eyebrow")}
              </Typography>
              <Typography
                color="inherit"
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={650}
                lineHeight={1}
              >
                {t("pages.home.sections.about_us.flow.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              color="rgba(250,250,250,0.62)"
              lineHeight={1.5}
              sx={{ letterSpacing: "-0.015em" }}
            >
              {t("pages.home.sections.about_us.flow.description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 4, md: 0 }} sx={{ zIndex: 1 }}>
          {flowSteps.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack
                gap={2}
                sx={{
                  height: "100%",
                  px: { xs: 0, md: 3 },
                  borderLeft: {
                    xs: "none",
                    md:
                      index === 0
                        ? "none"
                        : "1px solid rgba(250,250,250,0.12)",
                  },
                }}
              >
                <Typography
                  color="#FF6E00"
                  fontSize={32}
                  fontWeight={800}
                >
                  0{index + 1}
                </Typography>
                <Typography
                  color="inherit"
                  fontSize={22}
                  fontWeight={650}
                  lineHeight={1.05}
                >
                  {step.title}
                </Typography>
                <Typography
                  color="rgba(250,250,250,0.58)"
                  fontSize={15}
                  lineHeight={1.45}
                  sx={{ letterSpacing: "-0.01em" }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </SectionWidget>
  );
};
