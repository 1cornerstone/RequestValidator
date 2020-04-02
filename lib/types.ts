

/*  string,
   number,
   currency,
   email,
   boolean,
   float,
   array,
   */

 let  pattern ='';

export function isString(arg:string):boolean{
    return /^([a-z\s\d/$])+$/i.test(arg)
}

export function isNumber(arg:string):boolean {
    return /(^[\d])$/i.test(arg)
}

export function isEmail(arg:string):boolean {
return /^([a-z\d])+@([a-z])+.com$/i.test(arg);
}

export function isBool(arg:string):boolean {
return /^(true)|(false)$/i.test(arg);
}

export function isFloat(arg:string) :boolean{
return /^([\d])+.([\d])+$/i.test(arg)
}

export function isDate(arg:string):boolean {
return /^([\d]{1,2})\/([\d]{1,2})\/([\d]{4})$/i.test(arg)
}

