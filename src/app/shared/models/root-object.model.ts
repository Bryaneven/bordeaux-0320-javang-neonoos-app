import { Data } from './data.model';

export class RootObject<T> {
  data: Data<T>;

  constructor(constructor: new (input?: T)  => T, type?: string, input?: RootObject<T>) {
    if (input) {
      Object.assign(this, input);
      this.data = new Data<T>(constructor, type, this.data);
    } else {
      this.data = new Data<T>(constructor, type);
    }
  }
}

