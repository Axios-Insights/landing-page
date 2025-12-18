import { AppBar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import CoreProviders from "./providers";

const Core = () => {
  const { t, i18n } = useTranslation();

  return (
    <CoreProviders>
      <AppBar>
        <p>
          <b>axios</b> insights
        </p>
      </AppBar>

      {/* {Array.from({ length: 50 - 1 + 1 }, (_, i) => 1 + i).map((v) => {
        return (
          <div key={v}>
            <Typography>AAA</Typography>
          </div>
        );
      })} */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button onClick={() => i18n.changeLanguage("en")}>
          {t("languages.english")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("es")}>
          {t("languages.spanish")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("pt")}>
          {t("languages.portuguese")}
        </Button>
      </div>
    </CoreProviders>
  );
};

export default Core;
