import { Data } from './data.model';

export class RootObjectList<T> {
  data: Data<T>[];

  constructor(constructor: new (input?: T)  => T, input?: RootObjectList<T>) {
    if (input) {
      Object.assign(this, input);
      for ( let data of this.data){
        data = new Data<T>(constructor, data);
      }
    }
  }
}
