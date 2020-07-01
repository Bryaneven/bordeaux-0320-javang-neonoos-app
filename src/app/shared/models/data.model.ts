export class Data<T> {
  type: string;
  id: number;
  attributes: T;
  relationships: {};

  constructor(constructor: new (input?: T)  => T, data?: Data<T>) {
    if (data) {
      Object.assign(this, data);
      this.attributes = new constructor(this.attributes);
    }else {
      this.attributes = new constructor();
    }
  }
}
