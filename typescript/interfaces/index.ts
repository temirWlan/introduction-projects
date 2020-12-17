// interface
interface Circle {
  readonly id: number;
  color?: string;
  size: {
    radius: number;
    circumference: number;
  },
  getDiameter?: () => number
}


// objects
const firstCircle: Circle = {
  id: 234,
  size: {
    radius: 4314,
    circumference: 143242
  }
};

const secondCircle: Circle = {
  id: 25435,
  size: {
    radius: 2424,
    circumference: 223462
  }
};

secondCircle.color = 'green';

const thirdCircle = {} as Circle;
const fourthCircle = <Circle>{};


// interface inheritance 
interface Cylinder extends Circle {
  size: {
    radius: number;
    circumference: number;
    height: number;
  }
};

const firstCylinder: Cylinder = {
  id: 324515,
  size: {
    radius: 5345,
    circumference: 624532,
    height: 2452
  },
  getDiameter(): number {
    return this.size.radius * 2;
  }
};


// implements class from inheritance 
interface IClock {
  time: Date;
  getTime?(): number;
  setTime(date: Date): void;
};

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
};


// universal interface properties
interface Styles {
  [key: string]: string;
};

const elementStyle: Styles = {
  width: '250px',
  height: '300px',
  borderRadius: '50%',
  backgroundColor: 'red'
};