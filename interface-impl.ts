export declare interface Animal {
  getAnimalName(): string;
}

export class Dog implements Animal {

  private readonly name: string;
  private readonly helloMsg: string;

  constructor(name: string, helloMsg: string) {
    name = name;
    helloMsg = helloMsg;
  }

  getAnimalName(): string {
    return `The dogs name is.... ${this.name}`;
  }

  getHelloMsg(): string {
    return `The dog says.... ${this.helloMsg}`;
  }

  async getMessageAsync(): Promise<string> {
    return 'hello world';
  }
}
