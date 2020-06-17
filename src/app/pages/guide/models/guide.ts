

export class Guide {
    created: string;
    description: string;
    lat_max: number;
    lng_max: number;
    lat_min: number;
    lng_min: number;
    selection: boolean;
    short_description: string;
    title: string;
    thematic: boolean;
    weight: number;


    constructor(guide?: Guide){
      Object.assign(this, guide)
    }

}
