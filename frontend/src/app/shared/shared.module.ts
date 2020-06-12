import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
    // Material design modules
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    
    // Materia design modules
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
