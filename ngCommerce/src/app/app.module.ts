import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { CustomerpageComponent } from './pages/customerpage/customerpage/customerpage.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreatepageComponent } from './pages/createcustomer/createpage.component';
import { ItempageComponent } from './pages/itempage/itempage/itempage.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { CreatepageitemComponent } from './pages/createitem/createitem.component';

import { BodyComponent } from './body/body.component';
import { CategoryComponent } from './category/category.component';
import { ItemFilterPipe } from './pages/itempage/itempage/item-filter.pipe';
import { AlertifyService } from './services/alertservice/alertify.service';
import { CartComponent } from './cart/cart.component';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule } from '@angular/material';
import { CustomMaterialModule } from './core/material.module';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    CustomerpageComponent,
    LoginComponent,
    CreatepageComponent,
    ItempageComponent,
    HeaderComponent,
    CreatepageitemComponent,    
    BodyComponent,
    CategoryComponent,
    ItemFilterPipe,
    CartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,  
    CustomMaterialModule,
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
    
    
  
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
