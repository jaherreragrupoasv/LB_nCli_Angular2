/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { TratamientosSesionesDias } from '../../models/TratamientosSesionesDias';
import { TratamientosFases } from '../../models/TratamientosFases';
import { TratamientosSesiones } from '../../models/TratamientosSesiones';
import { Tratamientos } from '../../models/Tratamientos';
import { Tipos } from '../../models/Tipos';
import { Fases } from '../../models/Fases';
import { SubTipos } from '../../models/SubTipos';
import { Clientes } from '../../models/Clientes';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    TratamientosSesionesDias: TratamientosSesionesDias,
    TratamientosFases: TratamientosFases,
    TratamientosSesiones: TratamientosSesiones,
    Tratamientos: Tratamientos,
    Tipos: Tipos,
    Fases: Fases,
    SubTipos: SubTipos,
    Clientes: Clientes,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
