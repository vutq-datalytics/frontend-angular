import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'header',
    templateUrl: 'src/components/header/index.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class Header {
    constructor(private router: Router) {}

}
