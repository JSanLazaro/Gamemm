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

@NgModule({
  declarations: [AppComponent, GamelistComponent, VideoplayerComponent, GamegridComponent, VdetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    LightboxModule,
    MtxGridModule,
    MtxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
