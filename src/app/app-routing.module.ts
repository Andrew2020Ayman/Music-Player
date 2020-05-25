import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  , } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { BandLibComponent } from './view/band-lib/band-lib.component';


const routes: Routes = [
  
  { path: "", redirectTo: "Home", pathMatch: 'full' },
  { path: "Home", component:HomeComponent},
   { path: "Band/:id", component:BandLibComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      ,{ preloadingStrategy: PreloadAllModules }),
  
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
