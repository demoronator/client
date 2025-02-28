import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsListComponent } from './ads/ads-list/ads-list.component';
import { DisplayComponent } from './ads/display/display.component';
import { ManageComponent } from './ads/manage/manage.component';
import { PostComponent } from './ads/post/post.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'user/register',
    component: RegisterComponent,
  },
  {
    path: 'ads',
    component: AdsListComponent,
  },
  {
    path: 'ads/manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ads/post',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ads/:id',
    component: DisplayComponent,

  },
  {
    path: 'ads/edit/:id',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
