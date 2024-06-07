import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuComponent } from './sitio/menu/menu.component';
import { SliderComponent } from './sitio/slider/slider.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';

export const routes: Routes = [
    {
        path: 'menu', component: MenuComponent
    },
    {
        path: 'slider', component: SliderComponent
    },
    {
        path: 'body', component: BodyComponent
    },
    {
        path: 'footer', component: FooterComponent
    }
];
