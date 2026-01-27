import { Grid, Stack, Typography } from "@mui/material";

import { CountUpWidget } from "@widgets/count_up_widget";
import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { SECTIONS } from "../constants";

import { cardNumbers } from "./constants";

export const ResultsSection = () => {
  return (
    <SectionWidget
      id={SECTIONS.RESULTS}
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Typography fontSize={32} color="inherit">
        Resultados que transformam operações
      </Typography>

      <Grid
        container
        width="100%"
        justifyContent="center"
        spacing={{
          xs: 2,
          md: 4,
        }}
      >
        {cardNumbers.map((value, index) => {
          // const isMiddle = index === 2;

          return (
            <Grid
              size={{
                xs: 12,
                md: 12 / cardNumbers.length,
              }}
              key={index}
            >
              <SpotlightCardWidget sx={{ height: "100%", aspectRatio: 2 / 1 }}>
                <Stack padding={4}>
                  <CountUpWidget
                    delay={index / 2}
                    prefix={value.metric.prefix && `${value.metric.prefix} `}
                    to={value.metric.amount}
                    suffix={value.metric.suffix && ` ${value.metric.suffix}`}
                    fontSize={42}
                    fontWeight={700}
                  />

                  <Typography>{value.description}</Typography>
                </Stack>
              </SpotlightCardWidget>
            </Grid>
          );
        })}
      </Grid>
    </SectionWidget>
  );
};
