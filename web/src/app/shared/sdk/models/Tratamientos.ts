/* tslint:disable */
import {
  TratamientosSesiones
} from '../index';

declare var Object: any;
export interface TratamientosInterface {
  id: number;
  descripcion: string;
  observaciones?: string;
  fechaAlta?: Date;
  fechaCierre?: Date;
  hora?: string;
  fechaUltSesion?: Date;
  precio?: number;
  pacienteId?: number;
  tipoId?: number;
  subTipoId?: number;
  ttoOrigenId?: number;
  sesiones?: Array<TratamientosSesiones>;
}

export class Tratamientos implements TratamientosInterface {
  id: number;
  descripcion: string;
  observaciones: string;
  fechaAlta: Date;
  fechaCierre: Date;
  hora: string;
  fechaUltSesion: Date;
  precio: number;
  pacienteId: number;
  tipoId: number;
  subTipoId: number;
  ttoOrigenId: number;
  sesiones: Array<TratamientosSesiones>;
  constructor(data?: TratamientosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tratamientos`.
   */
  public static getModelName() {
    return "Tratamientos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tratamientos for dynamic purposes.
  **/
  public static factory(data: TratamientosInterface): Tratamientos{
    return new Tratamientos(data);
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
      name: 'Tratamientos',
      plural: 'Tratamientos',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        descripcion: {
          name: 'descripcion',
          type: 'string'
        },
        observaciones: {
          name: 'observaciones',
          type: 'string'
        },
        fechaAlta: {
          name: 'fechaAlta',
          type: 'Date'
        },
        fechaCierre: {
          name: 'fechaCierre',
          type: 'Date'
        },
        hora: {
          name: 'hora',
          type: 'string'
        },
        fechaUltSesion: {
          name: 'fechaUltSesion',
          type: 'Date'
        },
        precio: {
          name: 'precio',
          type: 'number'
        },
        pacienteId: {
          name: 'pacienteId',
          type: 'number'
        },
        tipoId: {
          name: 'tipoId',
          type: 'number'
        },
        subTipoId: {
          name: 'subTipoId',
          type: 'number'
        },
        ttoOrigenId: {
          name: 'ttoOrigenId',
          type: 'number'
        },
      },
      relations: {
        sesiones: {
          name: 'sesiones',
          type: 'Array<TratamientosSesiones>',
          model: 'TratamientosSesiones'
        },
      }
    }
  }
}
