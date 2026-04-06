export function getDimensionsFromAspectRatio(aspectRatio: string): {
  height: number;
  width: number;
} {
  const [width, height] = aspectRatio.split(':').map(Number);
  return { height, width };
}
