import { Data } from './data.model';

export class RootObject<T> {
  data: Data<T>;

  constructor(constructor: new (input?: T)  => T, input?: RootObject<T>) {
    if (input) {
      Object.assign(this, input);
      this.data = new Data<T>(constructor, this.data);
    } else {
      this.data = new Data<T>(constructor);
    }
  }
}

