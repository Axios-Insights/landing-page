import type { CardMetricType } from "./types";

export const cardNumbers: CardMetricType[] = [
  {
    metric: {
      prefix: "-",
      amount: 75,
      suffix: "%",
    },
    description: "em acidentes por tombamento",
  },
  {
    metric: {
      prefix: "-",
      amount: 90,
      suffix: "%",
    },
    description: "em casos de sonolência e distração",
  },
  {
    metric: {
      prefix: "-",
      amount: 40,
      suffix: "%",
    },
    description: "em ocorrências com veículos",
  },
  {
    metric: {
      prefix: "-",
      amount: 96,
      suffix: "%",
    },
    description: "em eventos de telemetria",
  },
  {
    metric: {
      prefix: "+",
      amount: 40,
      suffix: "Milhões",
    },
    description: "de alertas gerados para garantir a segurança",
  },
];
