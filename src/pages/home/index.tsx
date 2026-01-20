import { Box, Button, Typography } from "@mui/material";
import { HeaderWidget, LayoutWidget } from "@widgets";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import {
  AboutUsSection,
  HeroSection,
  SECTIONS,
  ServicesSection,
  UseCasesSection,
} from "./sections";

const HomePage = () => {
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
                hash: SECTIONS.USE_CASES,
              }}
            >
              <Typography color="inherit">
                {t("pages.home.header.navigation.use_cases")}
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
            <Button variant="clear">
              <Typography color="inherit">EN PT</Typography>
            </Button>

            <Button variant="clear">
              <Typography color="inherit">
                {t("pages.home.header.actions.get_in_touch")}
              </Typography>
            </Button>
          </>
        }
      />

      <HeroSection />

      <ServicesSection />

      <UseCasesSection />

      <AboutUsSection />

      <Box sx={{ backgroundColor: "grey.200" }}>Footer</Box>
    </LayoutWidget>
  );
};

export default HomePage;
