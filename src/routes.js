import About from './screens/About';
import App from './screens/App';
import Counter from './screens/Counter';
import NotFound from './screens/NotFound';


const routes = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Counter },
        childRoutes: [
            {
                path: '/about',
                component: About
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
];


export default routes;
