import { defineTokens, defineGlobalStyles } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  body: {
    value:
      '"Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },
});

export const typographyCss = defineGlobalStyles({
  "html, body": {
    fontFamily: "body",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "1",
    letterSpacing: "-0.05em",
    color: "text.dark",
  },
});
