import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './core/data/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { MenuBurgerModule } from './shared/components/menu-burger/menu-burger.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    MenuBurgerModule, 
    PagesModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
