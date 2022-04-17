import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyRoutingModule } from '../app/my-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { GitUserDirective } from './directives/git-user.directive';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserService } from './services/user.service';
import { RepoComponent } from './components/repo/repo.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUserDirective,
    FilterSearchPipe,
    HomePageComponent,
    RepoComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
