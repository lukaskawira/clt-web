import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from './footer/footer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LeatherProductComponent} from './leather/leather-product/leather-product.component';
import {LeatherComponent} from './leather/leather.component';
import {GetAQuoteComponent} from './contact/get-a-quote/get-a-quote.component';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    LeatherProductComponent,
    LeatherComponent,
    GetAQuoteComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
