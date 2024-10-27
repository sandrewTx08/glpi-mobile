export enum Urgency {
  Low = 1,
  Medium = 2,
  High = 3,
  VeryHigh = 4,
}

export namespace Urgency {
  export const color = {
    [Urgency.Low]: 'green',
    [Urgency.Medium]: 'orange',
    [Urgency.High]: 'red',
    [Urgency.VeryHigh]: 'red',
  };
}
