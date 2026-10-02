// Generic Classes
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('Hello');
