import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'custom', pathMatch: 'full' },     
      { path: 'custom', 
        loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule) 
      },    
    
      { path: 'image', 
        loadChildren: () => import('./image/image.module').then(m => m.ImageModule) 
      },
      
    
     
 
    
    ]
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

