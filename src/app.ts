import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import { Home } from './components/home/index';
import { Gallery } from './components/gallery/index';
@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <router-outlet></router-outlet>
        <footer></footer>
    `,
    directives: [ROUTER_DIRECTIVES, Header, Footer],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: Home,
        useAsDefault: true
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    }
])

class AppComponent {
}

bootstrap(AppComponent);
