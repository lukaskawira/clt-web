import {Component} from '@angular/core';
import {CarouselImages, ProductSneak} from "../models/models";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import {BreakpointObserver} from "@angular/cdk/layout";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //#region @Properties
  renderMobileView = false;
  mobileBreakpoint: number;

  //#endregion

  //#region @CarouselProperties
  interval = 5000;
  pauseOnFocus = true;
  pauseOnHover = true;
  showNavigationArrows = false;
  images: CarouselImages[] = [
    {
      imageSrc: '../../assets/carousel/1.jpg',
      imageAlt: 'A Grey Cut Leather hanging',
      carouselTitle: 'CV Cisarua',
      carouselText: ""
    },
    {
      imageSrc: '../../assets/carousel/2.jpg',
      imageAlt: 'Interior of a Vintage Car with Leather Seats',
      carouselTitle: 'CV Cisarua',
      carouselText: ""
    },
    {
      imageSrc: '../../assets/carousel/3.jpg',
      imageAlt: 'A Pair of Brown Oxford Shoes on Black Surface',
      carouselTitle: 'CV Cisarua',
      carouselText: ""
    },
  ]
  //#endregion

  //#region @ProductSneak Properties
  products: ProductSneak[] = [
    {
      imageSrc: '../../assets/images/home/dyedCrustLeather.jpg',
      imageAlt: 'Drum Dyed Crust Leather',
      title: 'Drum Dyed Crust Leather',
      description: 'Mainly Cow, Buffalo, Goat and Sheep. With diverse Tanning, Colors and Selections available upon request.'
    },
    {
      imageSrc: '../../assets/images/home/wetBlueLeather.jpg',
      imageAlt: 'Wet Blue Leather',
      title: 'Web Blue Leather',
      description: 'Primarily Cow hides from Indonesia (Java), USA, Brazil and Australia. Shoe-Uppers and Garment Material. Available in different grades and other specifications.'
    },
    {
      imageSrc: '../../assets/images/home/finishedLeather.png',
      imageAlt: 'Finished Leather',
      title: 'Finished Leather',
      description: 'Primarily Cow hides from Indonesia (Java), USA, Brazil and Australia. Shoe-Uppers and Garment Material. Available in different grades and other specifications.'
    }
  ]

  //#endregion

  constructor(private router: Router, private appService: AppService, private breakpointObserver: BreakpointObserver) {
    this.mobileBreakpoint = this.appService.mobileBreakpoint;
    this.breakpointObserver.observe([`(min-width: ${this.mobileBreakpoint}px)`]).subscribe((result) => {
      this.renderMobileView = !result.matches;
    });
  }

  //#region @EventHandler
  onReadMoreClick(): void {
    this.router.navigate(['/about-us']).then(() => {
    });
  }

  onLearnMoreClick(): void {
    this.router.navigate(['/products/our-leathers']).then(() => {
    });
  }

  //#endregion

}
