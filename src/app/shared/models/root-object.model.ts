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






// class RootObject<T, K extends IAbstract<T>> {
//     data: Data<T, K>;
//     constructor(input?: RootObject<T, K>, constructor?: K) {
//       if (input) {
//         Object.assign(this, input);
//         this.data = new Data<T, K>(this.data, constructor);
//       }
//     }
//   }
//   class Data<T,K extends IAbstract<T>> {
//     type: string;
//     id: number;
//     attributes: T;
//     constructor(input?: Data<T, K>, constructor?: K) {
//       if (input) {
//         Object.assign(this, input);
//         this.attributes = new constructor(this.attributes) ;
//       }
//     }
//   }
//   interface IAbstract<Z> {
//     new (input?: Z): Z;
//   }
//   class Guide {
//     title: string;
//     description: string;
//     short_description: string;
//     selection: boolean;
//     thematic: boolean;
//     lat_max: number;
//     lng_max: number;
//     lat_min: number;
//     lng_min: number;
//     weight: number;
//   }
//   const guide = new RootObject<Guide, IAbstract<Guide>>({} as RootObject<Guide, IAbstract<Guide>>, Guide);
