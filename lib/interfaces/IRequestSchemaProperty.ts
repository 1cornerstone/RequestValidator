
import types from '../enumType'

 export interface IRequestSchemaProperty {
    type : types,
    isNull ? : boolean,
    min?: number,
    max?: number
}

