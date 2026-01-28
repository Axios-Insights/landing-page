import { Card, Stack } from "@mui/material";

import { ScrollStackWidget } from "@widgets/scroll_stack_widget";
import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";
const CARDS = [
  { title: "Discovery", color: "#f0f0f0" },
  { title: "Design", color: "#e0e0e0" },
  { title: "Development", color: "#d0d0d0" },
  { title: "Launch", color: "#c0c0c0" },
];

export const AboutUsSection = () => {
  return (
    <SectionWidget id={SECTIONS.ABOUT_US} height="auto" minHeight="97.5dvh">
      {/* <Stack position="absolute" width="100%" textAlign="center">
        <h2>Nossos Serviços</h2>
        <p>Continue rolando para ver os cards empilharem</p>
      </Stack> */}

      <ScrollStackWidget>
        {CARDS.map((card, index) => (
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Stack
              key={index}
              // sx={{
              //   height: "100%",
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   bgcolor: card.color,
              // }}
              padding={8}
            >
              <h2>{card.title}</h2>
              <p>Conteúdo do serviço {index + 1}...</p>
            </Stack>
          </Card>
        ))}
      </ScrollStackWidget>
    </SectionWidget>
  );
};
