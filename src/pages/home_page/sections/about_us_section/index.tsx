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
        backgroundImage:
          "radial-gradient(circle at 88% 12%, rgba(255,110,0,0.055), transparent 22%)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 160, md: 270 },
          height: { xs: 160, md: 270 },
          left: { xs: -112, md: -158 },
          top: { xs: 180, md: 118 },
          border: { xs: "28px solid", md: "44px solid" },
          borderColor: "rgba(255,110,0,0.075)",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(-8deg)",
        }}
      />

      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 8, md: 12 }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="flex-end"
          sx={{ position: "relative", zIndex: 1 }}
        >
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
                  color="#C65500"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.about_us.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                fontSize={{ xs: 36, md: 48 }}
                fontWeight={600}
                lineHeight={0.98}
                maxWidth={820}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.about_us.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              color="#5C5C5C"
              fontSize={{ xs: 17, md: 18 }}
              lineHeight={1.55}
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
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: { md: 260 },
                  p: { xs: 3, md: 4 },
                  borderRadius: "16px",
                  border: "1px solid #E2E2E2",
                  backgroundColor: "rgba(250,250,250,0.95)",
                  boxShadow: "0 8px 18px -14px rgba(0,0,0,0.30)",
                  transition:
                    "transform 260ms cubic-bezier(.2,.8,.2,1), border-color 260ms ease, box-shadow 260ms ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: 3,
                    opacity: index === 0 ? 1 : 0.42,
                    background:
                      "linear-gradient(90deg, #FF6E00, rgba(255,110,0,0.10), transparent 76%)",
                  },
                  "&::after": {
                    content: `"0${index + 1}"`,
                    position: "absolute",
                    right: 18,
                    bottom: -26,
                    color: "rgba(21,21,21,0.032)",
                    fontSize: { xs: 96, md: 124 },
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.08em",
                    pointerEvents: "none",
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(255,110,0,0.28)",
                    boxShadow: "0 24px 36px -24px rgba(112,57,16,0.42)",
                  },
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
                      width: 42,
                      height: 1,
                      backgroundColor: "#CACACA",
                    }}
                  />
                </Stack>

                <Stack gap={1.75} sx={{ position: "relative", zIndex: 1 }}>
                  <Typography fontSize={24} fontWeight={600} lineHeight={1.05}>
                    {point.title}
                  </Typography>
                  <Typography
                    color="#5C5C5C"
                    lineHeight={1.52}
                    maxWidth={420}
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
            backgroundImage:
              "linear-gradient(rgba(250,250,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            border: "1px solid rgba(21,21,21,0.92)",
            boxShadow: "0 24px 36px -24px rgba(0,0,0,0.72)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 78% 0%, rgba(255,110,0,0.12), transparent 28%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: 270,
              height: 270,
              right: -156,
              bottom: -170,
              border: "44px solid rgba(255,110,0,0.12)",
              borderRadius: "50%",
            },
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            alignItems="flex-end"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack gap={2}>
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
                    {t("pages.home.sections.about_us.flow.eyebrow")}
                  </Typography>
                </Stack>
                <Typography
                  color="inherit"
                  fontSize={{ xs: 32, md: 40 }}
                  fontWeight={600}
                  lineHeight={1}
                  sx={{ textWrap: "balance" }}
                >
                  {t("pages.home.sections.about_us.flow.title")}
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                color="rgba(250,250,250,0.60)"
                lineHeight={1.52}
                sx={{ letterSpacing: "-0.015em" }}
              >
                {t("pages.home.sections.about_us.flow.description")}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 4, md: 0 }}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {flowSteps.map((step, index) => (
              <Grid key={step.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack
                  gap={2.25}
                  sx={{
                    height: "100%",
                    px: { xs: 0, md: 3 },
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1.25}>
                    <Box
                      aria-hidden
                      sx={{
                        position: "relative",
                        flex: "0 0 auto",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "#FF6E00",
                        boxShadow:
                          index === 0
                            ? "0 0 0 6px rgba(255,110,0,0.10)"
                            : "0 0 0 4px rgba(255,110,0,0.06)",
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        display: { xs: "none", md: index === flowSteps.length - 1 ? "none" : "block" },
                        flex: 1,
                        height: 1,
                        background:
                          "linear-gradient(90deg, rgba(255,110,0,0.62), rgba(250,250,250,0.10))",
                      }}
                    />
                  </Stack>

                  <Typography
                    color="#FF6E00"
                    fontSize={32}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    0{index + 1}
                  </Typography>
                  <Typography
                    color="inherit"
                    fontSize={22}
                    fontWeight={600}
                    lineHeight={1.05}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    color="rgba(250,250,250,0.56)"
                    fontSize={15}
                    lineHeight={1.48}
                    sx={{ letterSpacing: "-0.01em" }}
                  >
                    {step.description}
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
