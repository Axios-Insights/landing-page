import { Box, Button, Typography } from "@mui/material";
import { HeaderWidget, LayoutWidget } from "@widgets";
import { Link } from "react-router";

import {
  AboutUsSection,
  HeroSection,
  SECTIONS,
  ServicesSection,
  UseCasesSection,
} from "./sections";
// import { useTranslation } from "react-i18next";

const HomePage = () => {
  // const { t, i18n } = useTranslation();

  return (
    <LayoutWidget>
      <HeaderWidget>
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

        <Box display="flex" gap="64px">
          <Box display="flex" gap="24px">
            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.SERVICES,
              }}
            >
              <Typography color="inherit">Services</Typography>
            </Button>

            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.USE_CASES,
              }}
            >
              <Typography color="inherit">Use cases</Typography>
            </Button>

            <Button
              component={Link}
              variant="clear"
              to={{
                hash: SECTIONS.ABOUT_US,
              }}
            >
              <Typography color="inherit">About us</Typography>
            </Button>
          </Box>

          <Button variant="clear">
            <Typography color="inherit">EN PT</Typography>
          </Button>

          <Button variant="clear">
            <Typography color="inherit">Get in touch</Typography>
          </Button>
        </Box>
      </HeaderWidget>

      <HeroSection />

      <ServicesSection />

      <UseCasesSection />

      <AboutUsSection />

      <Box sx={{ p: 2, bgcolor: "grey.200" }}>Footer</Box>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <Button onClick={() => i18n.changeLanguage("en")}>
          {t("languages.english")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("es")}>
          {t("languages.spanish")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("pt")}>
          {t("languages.portuguese")}
        </Button>
      </div> */}
    </LayoutWidget>
  );
};

export default HomePage;
