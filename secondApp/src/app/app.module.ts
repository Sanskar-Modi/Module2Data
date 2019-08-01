import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeOnClickComponent } from './employee-on-click/employee-on-click.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { PowerPipe } from './pipes-examples/power.pipe';
import { MypipePipe } from './pipes-examples/mypipe.pipe';
import { NewPipePipe } from './pipes-examples/new-pipe.pipe';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { MyDirectiveDirective } from './directive-example/my-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    EmployeeComponent,
    EmployeeOnClickComponent,
    TwoWayBindingComponent,
    PipesExamplesComponent,
    PowerPipe,
    MypipePipe,
    NewPipePipe,
    DirectiveExampleComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
