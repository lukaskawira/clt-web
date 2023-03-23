import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {EmptyRouteComponent} from './navigation/empty-route/empty-route.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {ProductsComponent} from './products/products.component';
import {OurLeathersComponent} from './products/our-leathers/our-leathers.component';

const declaredModules = [
  NavigationComponent,
  HomeComponent,
  FooterComponent,
  EmptyRouteComponent,
  AboutComponent,
  ContactComponent,
  ProductsComponent,
  OurLeathersComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    declaredModules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
