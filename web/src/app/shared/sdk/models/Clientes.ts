/* tslint:disable */

declare var Object: any;
export interface ClientesInterface {
  codigo: string;
  nombre: string;
  contacto?: string;
  direccion?: string;
  cP?: string;
  poblacion?: string;
  provincia?: string;
  pais?: string;
  telefono?: string;
  movil?: string;
  email?: string;
  observaciones?: string;
  fechaNac?: Date;
  id?: number;
}

export class Clientes implements ClientesInterface {
  codigo: string;
  nombre: string;
  contacto: string;
  direccion: string;
  cP: string;
  poblacion: string;
  provincia: string;
  pais: string;
  telefono: string;
  movil: string;
  email: string;
  observaciones: string;
  fechaNac: Date;
  id: number;
  constructor(data?: ClientesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Clientes`.
   */
  public static getModelName() {
    return "Clientes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Clientes for dynamic purposes.
  **/
  public static factory(data: ClientesInterface): Clientes{
    return new Clientes(data);
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
      name: 'Clientes',
      plural: 'Clientes',
      properties: {
        codigo: {
          name: 'codigo',
          type: 'string'
        },
        nombre: {
          name: 'nombre',
          type: 'string'
        },
        contacto: {
          name: 'contacto',
          type: 'string'
        },
        direccion: {
          name: 'direccion',
          type: 'string'
        },
        cP: {
          name: 'cP',
          type: 'string'
        },
        poblacion: {
          name: 'poblacion',
          type: 'string'
        },
        provincia: {
          name: 'provincia',
          type: 'string'
        },
        pais: {
          name: 'pais',
          type: 'string'
        },
        telefono: {
          name: 'telefono',
          type: 'string'
        },
        movil: {
          name: 'movil',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        observaciones: {
          name: 'observaciones',
          type: 'string'
        },
        fechaNac: {
          name: 'fechaNac',
          type: 'Date'
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
