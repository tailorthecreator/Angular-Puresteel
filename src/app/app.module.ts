import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptinComponent } from './optin/optin.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const firebaseConfig = {
  apiKey: "AIzaSyBJ6-UjKJ-wR7lGAcDhyQ82ZKbVKjG_1M8",
  authDomain: "puresteel-b5a43.firebaseapp.com",
  projectId: "puresteel-b5a43",
  storageBucket: "puresteel-b5a43.appspot.com",
  messagingSenderId: "725941364859",
  appId: "1:725941364859:web:78e39c050bc69ba221dade"
};

@NgModule({
  declarations: [
    AppComponent,
    OptinComponent,
    NavComponent,
    HomeComponent,
    ProductListComponent,
    ProductPageComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
