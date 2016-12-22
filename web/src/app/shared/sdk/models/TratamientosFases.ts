/* tslint:disable */

declare var Object: any;
export interface TratamientosFasesInterface {
  id: number;
  observaciones: string;
  tratamientosId?: number;
  faseId?: number;
}

export class TratamientosFases implements TratamientosFasesInterface {
  id: number;
  observaciones: string;
  tratamientosId: number;
  faseId: number;
  constructor(data?: TratamientosFasesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TratamientosFases`.
   */
  public static getModelName() {
    return "TratamientosFases";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TratamientosFases for dynamic purposes.
  **/
  public static factory(data: TratamientosFasesInterface): TratamientosFases{
    return new TratamientosFases(data);
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
      name: 'TratamientosFases',
      plural: 'TratamientosFases',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        observaciones: {
          name: 'observaciones',
          type: 'string'
        },
        tratamientosId: {
          name: 'tratamientosId',
          type: 'number'
        },
        faseId: {
          name: 'faseId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
