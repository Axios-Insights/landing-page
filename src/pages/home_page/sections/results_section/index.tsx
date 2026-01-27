import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { CountUpWidget } from "@widgets/count_up_widget";
import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { SECTIONS } from "../constants";

import type { CardMetricType } from "./types";

export const ResultsSection = () => {
  const { t } = useTranslation();

  const cards = t("pages.home.sections.results.cards", {
    returnObjects: true,
  }) as CardMetricType[];

  return (
    <SectionWidget id={SECTIONS.RESULTS} alignItems="center" gap={8}>
      <Typography fontSize={32} color="inherit">
        {t("pages.home.sections.results.title")}
      </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={{
          xs: 2,
          md: 4,
        }}
      >
        {cards.map((value, index) => {
          return (
            <Grid
              size={{
                xs: 12,
                md: 12 / cards.length + 1,
              }}
              key={index}
            >
              <SpotlightCardWidget
                sx={{
                  aspectRatio: 2 / 1,
                  padding: 4,
                }}
              >
                <Stack width="100%" justifyContent="center" gap={1}>
                  <CountUpWidget
                    delay={index / 2}
                    prefix={value.metric.prefix && `${value.metric.prefix} `}
                    to={value.metric.amount}
                    suffix={value.metric.suffix && ` ${value.metric.suffix}`}
                    fontSize={42}
                    fontWeight={700}
                  />

                  <Typography fontSize={24}>{value.description}</Typography>
                </Stack>
              </SpotlightCardWidget>
            </Grid>
          );
        })}
      </Grid>
    </SectionWidget>
  );
};
