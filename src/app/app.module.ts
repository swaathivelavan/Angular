import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';


@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPwdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sign-up', component: SignupComponent},
      {path: 'forgot_pwd', component: ForgotPwdComponent},
      {path: 'login', component: LoginComponent}
    ]),
  ],
  providers: [SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
