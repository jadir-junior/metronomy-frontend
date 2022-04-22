import { RouterModule, Routes } from '@angular/router'

import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
