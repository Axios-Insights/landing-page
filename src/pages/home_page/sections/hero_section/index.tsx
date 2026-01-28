import { Box, Stack, Typography } from "@mui/material";
import { Trans } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

import { backgroundImage } from "./assets";

export const HeroSection = () => {
  return (
    <SectionWidget
      id={SECTIONS.HERO}
      height="97.5dvh"
      justifyContent="flex-end"
      alignItems="flex-start"
      color="text.secondary"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack spacing={1}>
        <Typography fontSize={64} fontWeight={600} color="inherit">
          <Trans
            i18nKey="pages.home.sections.hero.title"
            components={{
              1: <Box component="span" fontWeight={900} />,
            }}
          />
        </Typography>

        <Typography fontSize={32} color="inherit">
          <Trans i18nKey="pages.home.sections.hero.subtitle" />
        </Typography>
      </Stack>
    </SectionWidget>
  );
};
