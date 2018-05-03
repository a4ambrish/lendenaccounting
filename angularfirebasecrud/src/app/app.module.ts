import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import {environment} from '../environments/environment';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import {RouterModule,Routes} from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { EntryComponent } from './members-detail/entry/entry.component';
import { ListComponent } from './members-detail/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MembersComponent,
    MemberComponent,
    MemberListComponent,
    MembersDetailComponent,
    EntryComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'members', component: MembersComponent},
      {path:'membersList', component: MemberListComponent},
      {path:'employees', component: EmployeesComponent}
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
