import types from "../lib/enumType";

const routeObject = {
    '/login': {
        email: {
            type : types.Email,
            },
        password: {
            type :types.String,
            min:5,
            max:7
        },
    },
    '/accountBalance':{
        amount : {type:types.Number},
    },
    '/order':{
        item:{
            type: types.String
        },
        amount: {
            type : types.Float
        },
        date:{
            type: types.Date
        }
    }

};

export default routeObject;

