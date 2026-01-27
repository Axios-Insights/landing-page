import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { SectionWidget } from "@widgets/section_widget";

export const HeroSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const backgroundLetterSpacing = theme.typography.h1.letterSpacing;

  return (
    <SectionWidget
      height="100dvh"
      position="relative"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        position="absolute"
        display="flex"
        zIndex={0}
        align="center"
        alignItems="center"
        justifyContent="center"
        color="primary.contrastText"
        fontSize="100vmax"
        fontWeight={900}
        letterSpacing={backgroundLetterSpacing}
        marginRight={`calc(${backgroundLetterSpacing} * -1)`}
        sx={{
          inset: 0,
          pointerEvents: "none",
          filter: "blur(4px)",
          textShadow: "0 0 32px currentColor",
        }}
      >
        404
      </Typography>

      <Stack
        spacing={4}
        alignItems="center"
        textAlign="center"
        zIndex={1}
        color="text.primary"
      >
        <Stack>
          <Typography fontSize={64} fontWeight={700} color="inherit">
            404
          </Typography>

          <Typography fontSize={32} color="inherit">
            {t("pages.not_found.sections.hero.title")}
          </Typography>
        </Stack>

        <Button
          component={Link}
          variant="outlined"
          size="large"
          color="inherit"
          to={{
            pathname: "/",
          }}
        >
          <Typography color="inherit">
            {t("pages.not_found.sections.hero.buttons.redirect")}
          </Typography>
        </Button>
      </Stack>
    </SectionWidget>
  );
};
