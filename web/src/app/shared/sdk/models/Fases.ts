/* tslint:disable */

declare var Object: any;
export interface FasesInterface {
  codFase: string;
  descripcion: string;
  id?: number;
}

export class Fases implements FasesInterface {
  codFase: string;
  descripcion: string;
  id: number;
  constructor(data?: FasesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Fases`.
   */
  public static getModelName() {
    return "Fases";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Fases for dynamic purposes.
  **/
  public static factory(data: FasesInterface): Fases{
    return new Fases(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Fases',
      plural: 'Fases',
      properties: {
        codFase: {
          name: 'codFase',
          type: 'string'
        },
        descripcion: {
          name: 'descripcion',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
