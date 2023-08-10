import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamelistComponent } from './games/components/gamelist/gamelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { VideoplayerComponent } from './games/components/videoplayer/videoplayer.component';
import { LightboxModule } from 'ngx-lightbox';

import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { GamegridComponent } from './games/components/gamegrid/gamegrid.component';
import { VdetailsComponent } from './games/views/vdetails/vdetails.component';
import { ImglistComponent } from './games/components/imglist/imglist.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { VidlistComponent } from './games/components/vidlist/vidlist.component';
import { SearchComponent } from './games/components/search/search.component';
import { FilterComponent } from './games/components/filter/filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
// import { CarouselModule } from '@coreui/angular';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
// import { AgxCarouselModule } from 'agx-carousel';
// import { NgImageSliderModule } from 'ng-image-video-gallery/public_api';


@NgModule({
  declarations: [AppComponent, GamelistComponent, VideoplayerComponent, GamegridComponent, VdetailsComponent, ImglistComponent, VidlistComponent, SearchComponent, FilterComponent, HeaderComponent, FooterComponent, SearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    LightboxModule,
    MtxGridModule,
    MtxSelectModule,
    FormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgImageSliderModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
