import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AsdfComponent } from './asdf/asdf.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ZxcvComponent } from './zxcv/zxcv.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivetemplateComponent } from './reactivetemplate/reactivetemplate.component';
import { FormtestComponent } from './formtest/formtest.component';
import { RestTestComponent } from './rest-test/rest-test.component';

const appRoutes: Routes = [
  { path: 'asdf', component: AsdfComponent },
  { path: 'zxcv', component: ZxcvComponent },
  { path: 'reactivetemplate', component: ReactivetemplateComponent },
  { path: 'formtest', component: FormtestComponent },
  { path: 'rest-test', component: RestTestComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsdfComponent,
    ZxcvComponent,
    FooterComponent,
    ReactivetemplateComponent,
    FormtestComponent,
    RestTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
