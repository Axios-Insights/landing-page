import { useState } from "react";

import { locales } from "@i18n";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import type { LanguageSwitcherWidgetPropsType } from "./types";

export const LanguageSwitcherWidget = ({
  ...props
}: LanguageSwitcherWidgetPropsType) => {
  const { t, i18n } = useTranslation();

  const [menuRef, setMenuRef] = useState<HTMLElement | null>(null);
  const open = Boolean(menuRef);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuRef(event.currentTarget);
  };

  const handleClose = () => {
    setMenuRef(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <Box {...props} color="inherit">
      <Button variant="clear" color="inherit" onClick={handleClick}>
        <Typography color="inherit">{i18n.language.toUpperCase()}</Typography>
      </Button>

      <Menu
        anchorEl={menuRef}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {Object.keys(locales).map((value) => (
          <MenuItem
            key={value}
            onClick={() => handleLanguageChange(value)}
            selected={i18n.language === value}
          >
            <ListItemIcon>{value.toUpperCase()}</ListItemIcon>
            <ListItemText>{t(`languages.${value}.label`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
