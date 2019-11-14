import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { PhonebookFormComponent } from './components/phonebook-form/phonebook-form.component';
import { PhonebookListComponent } from './components/phonebook-list/phonebook-list.component';

const routes: Routes = [
  { path: '', component: PhonebookListComponent},
  { path: 'add', component: PhonebookFormComponent},
  { path: 'list', component: PhonebookListComponent},
  { path: 'about', component: AboutAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
