import { provideRouter, RouterConfig }  from '@angular/router';
import { Home } from './components/home/index';
import { AboutUs } from './components/about/index';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about-us',
        component: AboutUs
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];