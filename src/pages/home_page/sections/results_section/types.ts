interface CardMetricValueType {
  prefix?: string;
  amount: number;
  suffix?: string;
}

export interface CardMetricType {
  metric: CardMetricValueType;
  description: string;
}
