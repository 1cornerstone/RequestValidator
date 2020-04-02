import {NextFunction, Request, Response} from 'express'
// rate limit here

// console.log(req.body);
// console.log(req.url);


 class RequestIndex {

    readonly routeObject :Object ;

    constructor(_routeObject:Object) {
        this.routeObject = _routeObject;
    }

    request():Function{

        const _routeObj = this.routeObject;
        const _validate = this.validation;
        return function request(req:Request,res:Response,next:NextFunction) {

          /*
          * get the url
          * get the property that match the url
          * compare
          * */
          _validate(req,res,_routeObj);

           // next();
        }
    }

    getProperty(request:Request,response:Response,routeObject:Object){
        if (routeObject[request.url] != undefined){

            const _object : Object = routeObject[request.url];

            for (const property in _object ){

                if ( request.body[property] == undefined){
                    return response.status(400).send(error(property,_object[property]));
                }


               //console.log(`set ${property} property  ${request.body[property]} ` )
                // console.log(routeObject[request.url][property])

            }

        }



        function error(field:string,fieldProps:Object):Object {
            return {
                message: 'Request body is syntactically invalid',
                errors: {
                    "property": ` ${field} property not obeyed`,
                    ...fieldProps
                }
            };
        }
    }

    validation(request:Request,response: Response,routeObject:Object){
      RequestIndex.prototype.getProperty(request,response,routeObject)
    }

}

export default RequestIndex;






