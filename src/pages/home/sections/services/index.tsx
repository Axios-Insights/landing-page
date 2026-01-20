import { Button } from "@mui/material";
import { SectionWidget } from "@widgets";
import { useTranslation } from "react-i18next";

import { SECTIONS } from "../constants";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWidget id={SECTIONS.SERVICES} height="100vh">
      {SECTIONS.SERVICES}

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
    </SectionWidget>
  );
};

export default ServicesSection;
