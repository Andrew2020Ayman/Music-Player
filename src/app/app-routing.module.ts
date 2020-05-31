import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  , } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { BandLibComponent } from './view/band-lib/band-lib.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';


const routes: Routes = [
  
  { path: "", redirectTo: "Home", pathMatch: 'full' },
  { path: "Home", component:HomeComponent},
   { path: "Band/:id", component:BandLibComponent},
   { path: "About", component:AboutComponent},
   { path: "Contact", component:ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      ,{ preloadingStrategy: PreloadAllModules }),
  
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
