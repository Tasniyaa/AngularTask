import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';  
import {MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavMenuComponent } from './navbar/nav-menu/nav-menu.component';
import { MainCardComponent } from './main-body/main-card/main-card.component';
import { RadiosCheckComponent } from './navbar/radios-check/radios-check.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { CheckBoxComponent } from './main-body/check-box/check-box.component';
import { SideBarComponent } from './main-body/side-bar/side-bar.component';
import { RatingComponent } from './main-body/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarTitleComponent } from './main-body/sidebar-title/sidebar-title.component';
import { HotelSearchComponent } from './navbar/hotel-search/hotel-search.component';
import { SidevarNavtitleComponent } from './main-body/sidevar-navtitle/sidevar-navtitle.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './checkboxPipe/filter.pipe';
import { RatePipePipe } from './checkboxPipe/rate-pipe.pipe';
import { PricePipePipe } from './checkboxPipe/price-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    NavMenuComponent,
    MainCardComponent,
    RadiosCheckComponent,
    MainBodyComponent,
    CheckBoxComponent,
    SideBarComponent,
    RatingComponent,
    SidebarTitleComponent,
    HotelSearchComponent,
    SidevarNavtitleComponent,
    FilterPipe,
    RatePipePipe,
    PricePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
