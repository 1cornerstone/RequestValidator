import {NextFunction, Request, Response} from 'express'
import {isString,isEmail,isDate,isBool,isNumber,isFloat} from './typeValidator'

 class RequestIndex {

    readonly routeObject :Object ;

    constructor(_routeObject:Object) {
        this.routeObject = _routeObject;
    }

    request(){

        const _routeObj = this.routeObject;
        const _validate = this.validation;
        return function request(req:Request,res:Response,next:NextFunction) {
          _validate(req,res,next,_routeObj);
        }
    }

    validation(request:Request,response:Response,next:NextFunction,routeObject:Object){
        let _errorOccur :Boolean = true;
        // @ts-ignore
        if (routeObject[request.url] != undefined){
            // @ts-ignore
            const _object :Object = routeObject[request.url];
            for (const property in _object ){
                if ( request.body[property] == undefined){
                    _errorOccur =false;
                    // @ts-ignore
                   return response.status(400).send(error(property,_object[property]));
                }
            }

            for (const props in _object){
               // @ts-ignore
                 if (!checkTypes(_object[props].type ,request.body[props])) {
                     _errorOccur =false;
                     // @ts-ignore
                     return response.send(error(props,_object[props]));
                 }
                  // @ts-ignore
                if (_object[props].min != undefined ){
                    let values:String =request.body[props];
                    // @ts-ignore
                    if (parseInt(_object[props].min) >values.length ) {
                        _errorOccur =false;
                        // @ts-ignore
                        return response.send(error(props+" min value",_object[props]));
                    }
                }
                 // @ts-ignore
                if (_object[props].max != undefined ){
                    let values:String =request.body[props];
                    // @ts-ignore
                    if (parseInt(_object[props].max) < values.length ){
                        _errorOccur =false;
                        // @ts-ignore
                        return response.send(error(props+" max value",_object[props]));}
                }

            }
        }

        function checkTypes(arg:string,val:string) :Boolean{

            let result :Boolean;
            switch (arg.toLowerCase()) {
                case 'string':
                    result = isString(val);
                    break;
                case 'email':
                    result = isEmail(val);
                    break;
                case 'number':
                    result = isNumber(val);
                    break;
                case 'boolean':
                    result = isBool(val);
                    break;
                case  'float':
                    result = isFloat(val);
                    break;
                case 'date':
                    result = isDate(val);
                    break;
                default: result= false;
            }
            return result
        }

        function error(field:string,fieldProps:Object):Object {
            return {
                message: 'Request body is syntactically invalid',
                errors: {
                    "property": ` ${field} property not satisfied`,
                    ...fieldProps
                }
            };
        }

        if (_errorOccur){
          next();
        }

    }

}

export default RequestIndex;






