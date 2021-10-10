import Login from './components/Login'
import User from './components/User'

export const routes = [
    {
        path: '', //hangi component gelirse hangi path çalışacak
        component: Login
    },
    {
        path: '/user/:id', //hangi component gelirse hangi path çalışacak
        component: User
    }
];


/*

 path: '/user/:id/:city'
 xx.com/user/3/diyarbakir  xx.com/user?id=3&city=diyarbakir
$route = xx.com/user/3/diyarbakir
params=id,city
id=3
city=diyarbakir
   id: this.$route.params.id, //


*/ 