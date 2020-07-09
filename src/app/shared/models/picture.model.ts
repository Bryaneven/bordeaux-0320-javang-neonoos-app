export class Picture {
  id: number;
  name: string;
  filename: string;
  description: string;
  created: Date;
  header: boolean;
  absolute: boolean;

  constructor(picture: Picture){
    Object.assign(this, picture);
  }
}
