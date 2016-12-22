/* tslint:disable */

declare var Object: any;
export interface TratamientosSesionesInterface {
  id: number;
  fecha: Date;
  autorizado: number;
  descripcion?: string;
  quienAutoriza?: string;
  cantidad: number;
  precio?: number;
  tratamientosId?: number;
}

export class TratamientosSesiones implements TratamientosSesionesInterface {
  id: number;
  fecha: Date;
  autorizado: number;
  descripcion: string;
  quienAutoriza: string;
  cantidad: number;
  precio: number;
  tratamientosId: number;
  constructor(data?: TratamientosSesionesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TratamientosSesiones`.
   */
  public static getModelName() {
    return "TratamientosSesiones";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TratamientosSesiones for dynamic purposes.
  **/
  public static factory(data: TratamientosSesionesInterface): TratamientosSesiones{
    return new TratamientosSesiones(data);
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
      name: 'TratamientosSesiones',
      plural: 'TratamientosSesiones',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        fecha: {
          name: 'fecha',
          type: 'Date'
        },
        autorizado: {
          name: 'autorizado',
          type: 'number'
        },
        descripcion: {
          name: 'descripcion',
          type: 'string'
        },
        quienAutoriza: {
          name: 'quienAutoriza',
          type: 'string'
        },
        cantidad: {
          name: 'cantidad',
          type: 'number'
        },
        precio: {
          name: 'precio',
          type: 'number'
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
