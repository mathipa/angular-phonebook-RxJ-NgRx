import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer } from './store/reducers/contact.reducer';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { PhonebookService } from './services/phonebook.service';
import { PhonebookFormComponent } from './components/phonebook-form/phonebook-form.component';
import { NotificationsService } from './services/notifications.service';
import { PhonebookListComponent } from './components/phonebook-list/phonebook-list.component';
import { PhonebookLikeComponent } from './components/phonebook-like/phonebook-like.component';
import { PhonebookConfirmDialogComponent } from './components/phonebook-confirm-dialog/phonebook-confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AboutAppComponent,
    PhonebookFormComponent,
    PhonebookListComponent,
    PhonebookLikeComponent,
    PhonebookConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    StoreModule.forRoot({
      contact: reducer
    }),
    EffectsModule.forRoot([]),
    LayoutModule,
  ],
  providers: [
    PhonebookService,
    NotificationsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PhonebookFormComponent, PhonebookConfirmDialogComponent]
})
export class AppModule { }
