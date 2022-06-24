import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { ListPdfComponent } from './list-pdf/list-pdf.component';


const appRoutes:  Routes = [
  {
    path: '', 
    component: ListPdfComponent,
    pathMatch: 'full'
    },


] 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
