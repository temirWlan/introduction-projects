class ProgrammingLanguage {
  readonly typing: string;

  constructor(typing: string) {
    this.typing = typing;
  }

  getTyping(name: string) {
    return `Programming Language: ${name}, with static typing: ${this.typing}`;
  }
}

// 1 === 2
// class Car {
//   readonly model: string;
//   readonly maxSpeed: string;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  constructor(readonly model: string) {}
}

// modifiers
class GeometricFigure {
  public readonly name: string;
  protected height: number;

  constructor() {
    this.draw();
  }

  private draw(): number {
    return this.height * 2;
  }

  protected lie(): void {
    console.log('lie');
  }
}

class Circle extends GeometricFigure{
  constructor() {
    super();
    this.spin();
    this.lie();
  }

  public spin(): number {
    return this.height;
  }
}

// abstract class
abstract class Component {
  abstract componentDidMount(): void;
  abstract componentDidUpdate(): void;
  abstract render(): void;
}

// guards
class SomeResponse {
  readonly statusCode = 200;
  readonly response = 'Data has been deleted';
}

class SomeError {
  readonly statusCode = 404;
  readonly message = 'Could not defined';
}

function handle(res: SomeResponse | SomeError) {
  if (res instanceof SomeResponse) {
    return {
      info: `Status code: ${res.statusCode}, Response: ${res.response}`
    }
  } else {
    return {
      info: `Status code: ${res.statusCode}, Error message: ${res.message}`
    }
  }

}
