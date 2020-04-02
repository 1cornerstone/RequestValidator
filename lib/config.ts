import types from "./enumType";

const routeObject = {

    '/login': {
        email: {
            type : types.Email,
            min:3,
            max:3
            },
        password: {
            type :types.String,
            min:3,
            max: 8
        },
        username:{
            type : types.String,
        }
    },

    '/accountBalance':{
        value : types.Number,
    },

    'products':{
        item : types.Array
    },
    'order':{
        order:{
            amount :types.Float,
            date :types.Date
        }
    }

};

export default routeObject;

