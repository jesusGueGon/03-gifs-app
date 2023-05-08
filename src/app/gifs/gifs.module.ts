import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ShearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
