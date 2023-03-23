export interface CarouselImages {
  imageSrc?: string;
  imageAlt?: string;
  carouselTitle?: string;
  carouselText?: string;
}

export interface NavigationItem {
  id: number;
  name: string;
  link: string;
  subItems: NavigationItem[];
}

export interface ProductSneak {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;

}
