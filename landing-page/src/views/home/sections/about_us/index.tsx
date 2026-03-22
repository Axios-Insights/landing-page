import { Grid, GridItem, styled, VStack } from "@styled-system/jsx";
import { CardWidget } from "@widgets/card";
import { SectionWidget } from "@widgets/section";

import { SECTIONS } from "../constants";
import type { AboutUsSectionPropsType } from "./types";

export const AboutUsSection = ({
  title,
  subtitle,
  pillars,
  workflow,
}: AboutUsSectionPropsType) => {
  return (
    <SectionWidget
      id={SECTIONS.ABOUT_US}
      height="auto"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      <VStack gap={4}>
        <VStack gap={1} textAlign="center">
          <styled.h2 fontSize={32} fontWeight={500}>
            {title}
          </styled.h2>
          <styled.h3
            dangerouslySetInnerHTML={{
              __html: subtitle,
            }}
          />
        </VStack>

        <Grid width="100%" columns={3} gap={2}>
          {pillars.map((pillar, index) => (
            <GridItem key={index} colSpan={{ base: 3, md: 1 }}>
              <CardWidget variant="outline" height="100%">
                <VStack
                  padding={4}
                  gap={1}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <styled.h4 fontSize={18} fontWeight={600}>
                    {pillar.title}
                  </styled.h4>
                  <styled.p
                    dangerouslySetInnerHTML={{
                      __html: pillar.description,
                    }}
                  />
                </VStack>
              </CardWidget>
            </GridItem>
          ))}
        </Grid>

        <Grid
          columns={2}
          width="100%"
          gap={{ base: 6, md: 0 }}
          justifyContent="center"
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack
              height="100%"
              gap={1}
              justifyContent="center"
              alignItems="flex-start"
            >
              <styled.h4 fontSize={24} fontWeight={500}>
                {workflow.title}
              </styled.h4>
              <styled.p>{workflow.description}</styled.p>
            </VStack>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 1 }}>A</GridItem>
        </Grid>
      </VStack>
    </SectionWidget>
  );
};
