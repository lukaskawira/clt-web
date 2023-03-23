import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EmptyRouteComponent} from "./navigation/empty-route/empty-route.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {OurLeathersComponent} from "./products/our-leathers/our-leathers.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'about-us', pathMatch: 'full', component: AboutComponent},
  {path: 'contact-us', pathMatch: 'full', component: ContactComponent},
  {path: 'products/our-leathers', pathMatch: 'full', component: OurLeathersComponent},
  {path: '**', pathMatch: 'full', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
