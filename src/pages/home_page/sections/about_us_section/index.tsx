import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import { CardSwapWidget } from "@widgets/card_swap_widget";
import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { SECTIONS } from "../constants";

import type { FlowStepType, PillarType } from "./types";

export const AboutUsSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const pillars = t("pages.home.sections.about_us.pillars", {
    returnObjects: true,
  }) as PillarType[];

  const flowSteps = t("pages.home.sections.about_us.flow.steps", {
    returnObjects: true,
  }) as FlowStepType[];

  return (
    <SectionWidget id={SECTIONS.ABOUT_US} gap={10}>
      <Stack gap={4}>
        <Stack gap={1} textAlign="center">
          <Typography fontSize={32} fontWeight={500} lineHeight={1.2}>
            {t("pages.home.sections.about_us.title")}
          </Typography>
          <Typography>
            <Trans i18nKey="pages.home.sections.about_us.subtitle" />
          </Typography>
        </Stack>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {pillars.map((pillar, index) => (
            <Grid key={index} size={{ xs: 12, md: "grow" }}>
              <SpotlightCardWidget variant="outlined" sx={{ height: "100%" }}>
                <Stack padding={4} gap={1}>
                  <Typography fontWeight={600}>{pillar.title}</Typography>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: pillar.description,
                    }}
                  />
                </Stack>
              </SpotlightCardWidget>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Grid
        container
        width="100%"
        spacing={{
          xs: 6,
          md: 0,
        }}
        justifyContent="center"
      >
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Stack gap={2} height="100%" justifyContent="center">
            <Typography fontSize={32} fontWeight={500}>
              {t("pages.home.sections.about_us.flow.title")}
            </Typography>
            <Typography>
              {t("pages.home.sections.about_us.flow.description")}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          minHeight={{
            xs: "50dvh",
            md: "25dvh",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box height="100%" width={{ xs: "100%", md: "75%" }}>
            <CardSwapWidget pauseOnHover={true} clickToSwap={true}>
              {flowSteps.map((value, index) => (
                <SpotlightCardWidget
                  key={index}
                  variant="outlined"
                  spotlightColor={theme.palette.primary.contrastText}
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: 4,
                    color: "text.primary",
                  }}
                >
                  <Typography fontSize={48} fontWeight={900} color="inherit">
                    {t("pages.home.sections.about_us.flow.step_suffix", {
                      step: index + 1,
                    })}
                  </Typography>
                  <Typography fontSize={24} fontWeight={500} color="inherit">
                    {value.title}
                  </Typography>
                  <Typography color="inherit">{value.description}</Typography>
                </SpotlightCardWidget>
              ))}
            </CardSwapWidget>
          </Box>
        </Grid>
      </Grid>
    </SectionWidget>
  );
};
