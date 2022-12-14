import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, LeadDialog, ContactDialog, CompanyDialog } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

]

@NgModule({
  declarations: [HeaderComponent, SnackbarComponent, LeadDialog,ContactDialog,
    CompanyDialog
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent,RouterModule]
})
export class SharedModule { }
