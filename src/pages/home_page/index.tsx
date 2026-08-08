import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { HeaderWidget } from "@widgets/header_widget";
import { LanguageSwitcherWidget } from "@widgets/language_switcher_widget";
import { LayoutWidget } from "@widgets/layout_widget";
import { LogoWidget } from "@widgets/logo_widget";

import { AboutUsSection } from "./sections/about_us_section";
import { SECTIONS } from "./sections/constants";
import { GetInTouchSection } from "./sections/get_in_touch_section";
import { HeroSection } from "./sections/hero_section";
import { ResultsSection } from "./sections/results_section";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <LayoutWidget>
      <HeaderWidget
        sx={{
          color: "#FAFAFA",
          backgroundColor: "rgba(21,21,21,0.78)",
          borderBottom: "1px solid rgba(250,250,250,0.08)",
          backdropFilter: "blur(14px)",
          "&::before": {
            display: "none",
          },
        }}
        brand={
          <Button
            component={Link}
            variant="clear"
            to={{
              hash: SECTIONS.HERO,
            }}
          >
            <LogoWidget />
          </Button>
        }
        navigation={[
          SECTIONS.ABOUT_US,
          SECTIONS.RESULTS,
          SECTIONS.GET_IN_TOUCH,
        ].map((value, index) => {
          const isContact = value === SECTIONS.GET_IN_TOUCH;

          return (
            <Button
              key={index}
              component={Link}
              variant={isContact ? "contained" : "clear"}
              to={{
                hash: value,
              }}
              sx={
                isContact
                  ? {
                      minHeight: 38,
                      px: 2,
                      borderRadius: "8px",
                      fontWeight: 700,
                    }
                  : undefined
              }
            >
              <Typography color="inherit" fontWeight={isContact ? 600 : 500}>
                {t(`pages.home.header.navigation.${value.replaceAll("-", "_")}`)}
              </Typography>
            </Button>
          );
        })}
        actions={<LanguageSwitcherWidget />}
      />

      <HeroSection />

      <AboutUsSection />

      <ResultsSection />

      <GetInTouchSection />
    </LayoutWidget>
  );
};
