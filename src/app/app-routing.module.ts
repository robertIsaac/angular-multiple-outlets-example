import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimiryOneComponent} from './primiry-one/primiry-one.component';
import {PrimiryTwoComponent} from './primiry-two/primiry-two.component';
import {SecondaryOneComponent} from './secondary-one/secondary-one.component';
import {SecondaryTwoComponent} from './secondary-two/secondary-two.component';
import {PrimiryThreeComponent} from './primiry-three/primiry-three.component';
import {SecondaryThreeComponent} from './secondary-three/secondary-three.component';

const routes: Routes = [
  {
    path: '',
    component: PrimiryOneComponent,
  },
  {
    path: 'two',
    component: PrimiryTwoComponent,
  },
  {
    path: 'three',
    component: PrimiryThreeComponent,
  },
  {
    path: '',
    component: SecondaryOneComponent,
    outlet: 'secondary',
  },
  {
    path: 'two',
    component: SecondaryTwoComponent,
    outlet: 'secondary',
  }, {
    path: 'three',
    component: SecondaryThreeComponent,
    outlet: 'secondary',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
