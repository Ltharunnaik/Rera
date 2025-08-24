import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Complaint } from './complaint/complaint';
import { Contactlogin } from './contactlogin/contactlogin';
import { Help } from './help/help';
import { HelpDeshUnregisterd } from './help-desh-unregisterd/help-desh-unregisterd';
import { KReat } from './k-reat/k-reat';
import { Registration } from './registration/registration';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },  
  { path: 'about', component: About },  
  { path: 'Complaint', component: Complaint },  
  { path: 'contactlogin', component: Contactlogin },  
  { path: 'help', component: Help },  
  { path: 'help-desh-unregisterd', component: HelpDeshUnregisterd },  
  { path: 'K-Reat', component: KReat },  
  { path: 'notifications', component: Notification },  
  { path: 'registration', component: Registration },  
];
