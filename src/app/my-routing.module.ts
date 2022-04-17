import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AboutComponent } from "./components/about/about.component";
import { RepoComponent } from "./components/repo/repo.component";

const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "about", component: AboutComponent },
    { path: "repositories", component: RepoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MyRoutingModule { }