import Login from './components/Login'
import Test from './components/Test'

export const routes = [
    {
        path: '', //hangi component gelirse hangi path çalışacak
        component: Login
    },
    {
        path: '/test', //hangi component gelirse hangi path çalışacak
        component: Test
    }
];