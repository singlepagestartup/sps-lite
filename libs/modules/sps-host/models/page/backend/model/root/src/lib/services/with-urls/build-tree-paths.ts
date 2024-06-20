export function util({
  toExpose = false,
  segments,
}: {
  toExpose?: boolean;
  segments: Array<string | string[]>;
}): string[][] {
  let paths: string[][] = [];

  for (const segmentItem of segments) {
    if (Array.isArray(segmentItem)) {
      const segmentPaths = util({ segments: segmentItem, toExpose: true });
      const newPaths: typeof paths = [];

      segmentPaths.forEach((segmentPath) => {
        const basePath = paths.flat();
        const fullPath = [...basePath, ...segmentPath];

        newPaths.push(fullPath);
      });

      paths = newPaths;
    } else {
      if (toExpose) {
        paths.push([segmentItem]);
        continue;
      }

      if (paths.length === 0) {
        paths.push([segmentItem]);
        continue;
      }

      paths = paths.map((path) => [...path, segmentItem]);
    }
  }

  return paths;
}
