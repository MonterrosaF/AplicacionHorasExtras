import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { ExtrahourService } from './services/extrahour.service';
import { UsersService } from './services/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtraHoursComponent } from './components/extra-hours/extra-hours.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [AppComponent, ExtraHoursComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ExtrahourService],
  bootstrap: [AppComponent]
})
export class AppModule {}
