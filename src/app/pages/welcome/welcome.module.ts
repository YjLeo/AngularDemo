import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {LoginComponent} from '../../login/login.component';
import {LoginModule} from "../../login/login.module";



@NgModule({
  imports: [WelcomeRoutingModule, LoginModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
