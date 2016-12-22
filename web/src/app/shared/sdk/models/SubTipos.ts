/* tslint:disable */

declare var Object: any;
export interface SubTiposInterface {
  id: number;
  descripcion: string;
}

export class SubTipos implements SubTiposInterface {
  id: number;
  descripcion: string;
  constructor(data?: SubTiposInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubTipos`.
   */
  public static getModelName() {
    return "SubTipos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubTipos for dynamic purposes.
  **/
  public static factory(data: SubTiposInterface): SubTipos{
    return new SubTipos(data);
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
      name: 'SubTipos',
      plural: 'SubTipos',
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
