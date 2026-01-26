import { Button, Typography } from "@mui/material";
import { Link } from "react-router";

import { HeaderWidget } from "@widgets/header_widget";
import { LanguageSwitcherWidget } from "@widgets/language_switcher_widget";
import { LayoutWidget } from "@widgets/layout_widget";

import { HeroSection } from "./sections/hero_section";

export const NotFoundPage = () => {
  return (
    <LayoutWidget>
      <HeaderWidget
        sx={{ color: "text.primary" }}
        brand={
          <Button
            component={Link}
            variant="clear"
            to={{
              pathname: "/",
            }}
          >
            <Typography flexGrow={1} fontSize={24} color="inherit">
              <b>axios</b> insights
            </Typography>
          </Button>
        }
        actions={<LanguageSwitcherWidget />}
      />

      <HeroSection />
    </LayoutWidget>
  );
};
