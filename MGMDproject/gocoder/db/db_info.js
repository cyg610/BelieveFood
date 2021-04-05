module.exports = (function(){
    return {
        local: {
            host:'localhost',
            port:3306,
            user:'root',
            password: 'dongyang',
            database: 'nodedb'
        },
        real: {
            host: 'localhost',
            port:3306,
            user:'root',
            password:'dongyang',
            database:'nodedb'
        },
        staging:{
            host: '',
            port:'',
            user:'',
            password:'',
            database:''          
        },
        dev: {
            host: '',
            port:'',
            user:'',
            password:'',
            database:''
        }
    }
})();