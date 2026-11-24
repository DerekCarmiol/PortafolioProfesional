export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const limits = { name: [2, 100], message: [10, 2000] } as const;

export function inRange(value: string, [min, max]: readonly [number, number]) {
  return value.length >= min && value.length <= max;
}
