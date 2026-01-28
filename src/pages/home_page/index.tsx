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
import { SolutionsSection } from "./sections/solutions_section";

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
        navigation={[
          SECTIONS.ABOUT_US,
          SECTIONS.RESULTS,
          SECTIONS.SOLUTIONS,
        ].map((value, index) => (
          <Button
            key={index}
            component={Link}
            variant="clear"
            to={{
              hash: value,
            }}
          >
            <Typography color="inherit">
              {t(`pages.home.header.navigation.${value.replace("-", "_")}`)}
            </Typography>
          </Button>
        ))}
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

      <AboutUsSection />

      <ResultsSection />

      <SolutionsSection />

      <Box sx={{ backgroundColor: "grey.200" }}>Footer</Box>
    </LayoutWidget>
  );
};
