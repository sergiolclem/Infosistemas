import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    
    // Material design modules
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    
    // Materia design modules
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
