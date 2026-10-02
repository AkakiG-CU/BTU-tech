// Classes and access modifiers
class Animal {
  private name: string;
  protected age: number;
  public type: string;
  readonly id: number;

  constructor(name: string, age: number, type: string, id: number) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.id = id;
  }
}

// Abstract class
abstract class AbstractAnimal {
  abstract bark(): void;
}
