type Point = {
  x: number;
  y: number;
  z: number;
};

type somePoint = keyof Point;
type materialPoint = Exclude<keyof Point, 'z'>; // x, y
type newPoint = Pick<Point, 'x' | 'y'>; // x, y