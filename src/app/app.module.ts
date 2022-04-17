import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { GitUserDirective } from './directives/git-user.directive';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    GitUserDirective,
    FilterSearchPipe,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
