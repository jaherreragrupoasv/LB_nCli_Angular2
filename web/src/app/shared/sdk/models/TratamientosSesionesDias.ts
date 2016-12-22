/* tslint:disable */

declare var Object: any;
export interface TratamientosSesionesDiasInterface {
  id: number;
  fecha: Date;
  cantidad: number;
  observaciones?: string;
  fechaPago?: Date;
  tratamientosId?: number;
}

export class TratamientosSesionesDias implements TratamientosSesionesDiasInterface {
  id: number;
  fecha: Date;
  cantidad: number;
  observaciones: string;
  fechaPago: Date;
  tratamientosId: number;
  constructor(data?: TratamientosSesionesDiasInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TratamientosSesionesDias`.
   */
  public static getModelName() {
    return "TratamientosSesionesDias";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TratamientosSesionesDias for dynamic purposes.
  **/
  public static factory(data: TratamientosSesionesDiasInterface): TratamientosSesionesDias{
    return new TratamientosSesionesDias(data);
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
      name: 'TratamientosSesionesDias',
      plural: 'TratamientosSesionesDias',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        fecha: {
          name: 'fecha',
          type: 'Date'
        },
        cantidad: {
          name: 'cantidad',
          type: 'number'
        },
        observaciones: {
          name: 'observaciones',
          type: 'string'
        },
        fechaPago: {
          name: 'fechaPago',
          type: 'Date'
        },
        tratamientosId: {
          name: 'tratamientosId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
