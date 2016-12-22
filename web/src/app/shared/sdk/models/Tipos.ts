/* tslint:disable */

declare var Object: any;
export interface TiposInterface {
  id: number;
  descripcion: string;
}

export class Tipos implements TiposInterface {
  id: number;
  descripcion: string;
  constructor(data?: TiposInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tipos`.
   */
  public static getModelName() {
    return "Tipos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tipos for dynamic purposes.
  **/
  public static factory(data: TiposInterface): Tipos{
    return new Tipos(data);
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
      name: 'Tipos',
      plural: 'Tipos',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        descripcion: {
          name: 'descripcion',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
