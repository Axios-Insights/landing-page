import { Box, Stack, Typography } from "@mui/material";
import { useTranslation, Trans } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

import { backgroundImage } from "./assets";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWidget
      applyHeaderOffset
      id={SECTIONS.HERO}
      height="100dvh"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      color="text.secondary"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack direction="column" spacing={1}>
        <Typography
          fontSize={64}
          fontWeight={600}
          lineHeight={1}
          color="inherit"
        >
          <Trans
            t={t}
            i18nKey="pages.home.sections.hero.title"
            components={{
              1: <Box component="span" fontWeight={900} />,
            }}
          />
        </Typography>

        <Typography fontSize={32} color="inherit" lineHeight={1}>
          <Trans t={t} i18nKey="pages.home.sections.hero.subtitle" />
        </Typography>
      </Stack>
    </SectionWidget>
  );
};
