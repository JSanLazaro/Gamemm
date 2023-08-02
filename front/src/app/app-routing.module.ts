import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamelistComponent } from './games/components/gamelist/gamelist.component';
import { VdetailsComponent } from './games/views/vdetails/vdetails.component';

const routes: Routes = [
  {path:'', redirectTo:'games', pathMatch:'full'},
  {path:'games', component:GamelistComponent},
  {path:'details/:id', component:VdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
