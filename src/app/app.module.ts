import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http'

import { AuthguardGuard } from './authguard.guard'
import { LoginService } from "./services/login.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'login',component: LoginComponent},
  {path: 'post',canActivate: [AuthguardGuard],component: PostComponent}
]
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    PostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthguardGuard,
    LoginService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }