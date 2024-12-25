import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { InformationComponent } from './pages/information/information.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent, redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    // { path: '/items', component: ItemsComponent, redirectTo: '/items', pathMatch: 'full' },
    { path: 'items', component: ItemsComponent  },
    // { path: '/informations', component: InformationComponent, redirectTo: 'informations', pathMatch: 'full' },
    { path: 'informations', component: InformationComponent }
];
