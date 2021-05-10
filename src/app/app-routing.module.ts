import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponent } from './layout/custom/custom.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
