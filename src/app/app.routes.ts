import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { GiveComponent } from './give/give.component';
import { GuatemalaPartnershipComponent } from './guatemala-partnership/guatemala-partnership.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { OurGuyInGuateComponent } from './our-guy-in-guate/our-guy-in-guate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { ThankYouComponent } from './thank-you/thank-you.component';





export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'current-events', component: CurrentEventsComponent},
    {path: 'give', component: GiveComponent},
    {path: 'guatemala', component: GuatemalaPartnershipComponent},
    {path: 'legal', component: LegalComponent},
    {path: 'ogg', component: OurGuyInGuateComponent},
    {path: 'partnerships', component: PartnershipsComponent},
    {path: 'about', component: ThankYouComponent},
    {path: '**', component: PageNotFoundComponent},

];
