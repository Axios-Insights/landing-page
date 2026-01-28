import { Button } from "@mui/material";
import { Link } from "react-router";

import { HeaderWidget } from "@widgets/header_widget";
import { LanguageSwitcherWidget } from "@widgets/language_switcher_widget";
import { LayoutWidget } from "@widgets/layout_widget";
import { LogoWidget } from "@widgets/logo_widget";

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
            <LogoWidget />
          </Button>
        }
        actions={<LanguageSwitcherWidget />}
      />

      <HeroSection />
    </LayoutWidget>
  );
};
