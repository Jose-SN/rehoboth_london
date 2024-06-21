import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function HttpLoaderFactory(http: HttpClient){
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    // TranslateModule.forChild({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //   }
    // })
  ]
})
export class HomeModule { }
