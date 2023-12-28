import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectItemComponent} from './projects/project-item/project-item.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component'
import {NgIconsModule} from "@ng-icons/core";
// import { featherAirplay } from '@ng-icons/feather-icons';
// import { heroUsers } from '@ng-icons/heroicons/outline';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ProjectsComponent,
        ProjectItemComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
