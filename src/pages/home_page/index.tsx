import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { HeaderWidget } from "@widgets/header_widget";
import { LanguageSwitcherWidget } from "@widgets/language_switcher_widget";
import { LayoutWidget } from "@widgets/layout_widget";

import { AboutUsSection } from "./sections/about_us_section";
import { SECTIONS } from "./sections/constants";
import { HeroSection } from "./sections/hero_section";
import { ResultsSection } from "./sections/results_section";
import { ServicesSection } from "./sections/services_section";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <LayoutWidget>
      <HeaderWidget
        brand={
          <Button
            component={Link}
            variant="clear"
            to={{
              hash: SECTIONS.HERO,
            }}
          >
            <Typography flexGrow={1} fontSize={24} color="inherit">
              <b>axios</b> insights
            </Typography>
          </Button>
        }
        navigation={
          <>
            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.RESULTS,
              }}
            >
              <Typography color="inherit">
                {t("pages.home.header.navigation.results")}
              </Typography>
            </Button>

            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.SERVICES,
              }}
            >
              <Typography color="inherit">
                {t("pages.home.header.navigation.services")}
              </Typography>
            </Button>

            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.ABOUT_US,
              }}
            >
              <Typography color="inherit">
                {t("pages.home.header.navigation.about_us")}
              </Typography>
            </Button>
          </>
        }
        actions={
          <>
            <LanguageSwitcherWidget />

            <Button variant="clear">
              <Typography color="inherit">
                {t("pages.home.header.actions.get_in_touch")}
              </Typography>
            </Button>
          </>
        }
      />

      <HeroSection />

      <ResultsSection />

      <ServicesSection />

      <AboutUsSection />

      <Box sx={{ backgroundColor: "grey.200" }}>Footer</Box>
    </LayoutWidget>
  );
};
