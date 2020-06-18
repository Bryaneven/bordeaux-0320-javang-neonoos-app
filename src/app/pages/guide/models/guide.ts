export class Guide {
  data : {
    id?: number,
    type: string,
    attributes : {
      description: string;
      lat_max: number;
      lng_max: number;
      lat_min: number;
      lng_min: number;
      selection: boolean;
      short_description?: string;
      title: string;
      thematic: boolean;
      weight: number;
      created?: string;
    }

    relationships?: {

    }
  }


  constructor(guide?: Guide){
    if (guide) {
      Object.assign(this, guide)
    } else {
      this.data = {
        type: "guides",
        attributes : {
          description: "",
          lat_max: 1,
          lng_max: 1,
          lat_min: 1,
          lng_min: 1,
          selection: true,
          short_description: "",
          title: "",
          thematic: true,
          weight: 1,
        }
      }
    }
  }

}
