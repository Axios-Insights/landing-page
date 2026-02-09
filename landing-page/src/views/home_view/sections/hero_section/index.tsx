import { styled,VStack } from "@styled-system/jsx";
import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";
import { backgroundImage } from "./assets";
import type { HeroSectionPropsType } from "./types";

export const HeroSection = ({ title, subtitle }: HeroSectionPropsType) => {
  return (
    <SectionWidget
      id={SECTIONS.HERO}
      height="97.5dvh"
      justifyContent="flex-end"
      alignItems="flex-start"
      color="text.light"
      backgroundColor="primary"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <VStack gap={1} justifyContent="center" alignItems="flex-start">
        <styled.h1
          fontSize={64}
          fontWeight={600}
          css={{
            "& strong": {
              fontWeight: 900,
            },
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <styled.h2 fontSize={32}>{subtitle}</styled.h2>
      </VStack>
    </SectionWidget>
  );
};
