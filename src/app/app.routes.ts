import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent, data: {title: 'Acerca de', icon: 'fa-prescription-bottle'}},
    { path: 'home', component: HomeComponent, data: {title: 'Inicio', icon: 'fa-home-lg'} },
    { path: 'products', component: ProductsComponent, data: {title: 'Productos', icon: 'fa-bags-shopping'},
    children: [
        { path: 'categories/:category', component: CategoriesComponent },
        { path: '', redirectTo: 'categories/Cards', pathMatch: 'full'},
        { path: '**', redirectTo: 'categories/Cards', pathMatch: 'full'}
    ]
},
    { path: '', component: HomeComponent },
    { path: '**', component: PagesnotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}




