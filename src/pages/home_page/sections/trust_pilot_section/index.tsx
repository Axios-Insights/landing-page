import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type PilotPhase = {
  range: string;
  title: string;
  description: string;
};

type GovernanceControl = {
  title: string;
  description: string;
};

export const TrustPilotSection = () => {
  const { t } = useTranslation();

  const phases = t("pages.home.sections.trust_pilot.pilot.phases", {
    returnObjects: true,
  }) as PilotPhase[];

  const controls = t("pages.home.sections.trust_pilot.governance.controls", {
    returnObjects: true,
  }) as GovernanceControl[];

  return (
    <SectionWidget
      id={SECTIONS.TRUST_PILOT}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FAFAFA",
        backgroundImage:
          "radial-gradient(circle at 88% 10%, rgba(255,110,0,0.065), transparent 23%)",
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
                  {t("pages.home.sections.trust_pilot.eyebrow")}
                </Typography>
              </Stack>
              <Typography
                component="h2"
                fontSize={{ xs: 36, md: 48 }}
                fontWeight={600}
                lineHeight={0.98}
                maxWidth={950}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.trust_pilot.title")}
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
              {t("pages.home.sections.trust_pilot.description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 3, lg: 4 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack
              gap={{ xs: 4, md: 5 }}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                p: { xs: 3.5, md: 5 },
                borderRadius: "16px",
                color: "#FAFAFA",
                backgroundColor: "#151515",
                backgroundImage:
                  "linear-gradient(rgba(250,250,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.025) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                boxShadow: "0 30px 48px -30px rgba(0,0,0,0.80)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: 250,
                  height: 250,
                  right: -142,
                  top: -148,
                  border: "40px solid rgba(255,110,0,0.12)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                },
              }}
            >
              <Stack gap={1.5} sx={{ position: "relative", zIndex: 1 }}>
                <Chip
                  label={t("pages.home.sections.trust_pilot.pilot.label")}
                  size="small"
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: "6px",
                    color: "#FAFAFA",
                    backgroundColor: "#FF6E00",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                />
                <Typography
                  color="inherit"
                  fontSize={{ xs: 28, md: 34 }}
                  fontWeight={650}
                  lineHeight={1}
                  maxWidth={720}
                  sx={{ textWrap: "balance" }}
                >
                  {t("pages.home.sections.trust_pilot.pilot.title")}
                </Typography>
              </Stack>

              <Box
                aria-hidden
                sx={{
                  position: "relative",
                  height: 3,
                  borderRadius: "3px",
                  background:
                    "linear-gradient(90deg, #FF6E00 0 33%, #F89E65 33% 66%, rgba(250,250,250,0.18) 66% 100%)",
                }}
              />

              <Grid container spacing={{ xs: 3, md: 0 }} sx={{ position: "relative", zIndex: 1 }}>
                {phases.map((phase, index) => (
                  <Grid key={phase.range} size={{ xs: 12, md: 4 }}>
                    <Stack
                      gap={1.5}
                      sx={{
                        height: "100%",
                        pr: { md: index === phases.length - 1 ? 0 : 3 },
                        pl: { md: index === 0 ? 0 : 3 },
                        borderRight: {
                          md:
                            index === phases.length - 1
                              ? "none"
                              : "1px solid rgba(250,250,250,0.09)",
                        },
                      }}
                    >
                      <Typography
                        color="#FF8034"
                        fontSize={12}
                        fontWeight={800}
                        sx={{ letterSpacing: "0.08em" }}
                      >
                        {phase.range}
                      </Typography>
                      <Typography color="inherit" fontSize={24} fontWeight={650}>
                        {phase.title}
                      </Typography>
                      <Typography
                        color="rgba(250,250,250,0.55)"
                        fontSize={14.5}
                        lineHeight={1.45}
                      >
                        {phase.description}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
                gap={2.5}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  p: 2.5,
                  borderRadius: "10px",
                  border: "1px solid rgba(250,250,250,0.09)",
                  backgroundColor: "rgba(250,250,250,0.035)",
                }}
              >
                <Stack gap={0.5}>
                  <Typography
                    color="#FF8034"
                    fontSize={11}
                    fontWeight={800}
                    sx={{ letterSpacing: "0.09em" }}
                  >
                    {t("pages.home.sections.trust_pilot.pilot.success_label")}
                  </Typography>
                  <Typography color="rgba(250,250,250,0.75)" fontWeight={600}>
                    {t("pages.home.sections.trust_pilot.pilot.success")}
                  </Typography>
                </Stack>

                <Button
                  component={Link}
                  to={{ hash: SECTIONS.GET_IN_TOUCH }}
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    flex: "0 0 auto",
                    minHeight: 46,
                    px: 2.5,
                    borderRadius: "8px",
                    fontWeight: 750,
                  }}
                >
                  {t("pages.home.sections.trust_pilot.cta")}
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack
              gap={4}
              sx={{
                height: "100%",
                p: { xs: 3.5, md: 5 },
                borderRadius: "16px",
                border: "1px solid #E2E2E2",
                backgroundColor: "#F4F4F2",
                boxShadow: "0 14px 28px -24px rgba(0,0,0,0.30)",
              }}
            >
              <Stack gap={1.5}>
                <Typography
                  color="#C65500"
                  fontSize={12}
                  fontWeight={800}
                  sx={{ letterSpacing: "0.11em" }}
                >
                  {t("pages.home.sections.trust_pilot.governance.eyebrow")}
                </Typography>
                <Typography
                  fontSize={{ xs: 28, md: 34 }}
                  fontWeight={650}
                  lineHeight={1}
                  sx={{ textWrap: "balance" }}
                >
                  {t("pages.home.sections.trust_pilot.governance.title")}
                </Typography>
                <Typography color="#5C5C5C" lineHeight={1.48}>
                  {t("pages.home.sections.trust_pilot.governance.description")}
                </Typography>
              </Stack>

              <Stack gap={1.5}>
                {controls.map((control, index) => (
                  <Stack
                    key={control.title}
                    direction="row"
                    gap={2}
                    sx={{
                      p: 2,
                      borderRadius: "10px",
                      border: "1px solid #E2E2E2",
                      backgroundColor: "#FAFAFA",
                    }}
                  >
                    <Typography
                      color="#FF6E00"
                      fontSize={12}
                      fontWeight={800}
                      lineHeight={1.5}
                    >
                      0{index + 1}
                    </Typography>
                    <Stack gap={0.5}>
                      <Typography fontSize={17} fontWeight={650}>
                        {control.title}
                      </Typography>
                      <Typography color="#5C5C5C" fontSize={14} lineHeight={1.4}>
                        {control.description}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>

              <Typography color="#7A7A7A" fontSize={12.5} lineHeight={1.4} mt="auto">
                {t("pages.home.sections.trust_pilot.governance.note")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </SectionWidget>
  );
};
