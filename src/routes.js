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