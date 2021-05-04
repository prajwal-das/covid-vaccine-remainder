import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HyHomeComponent} from './components/hy-home/hy-home.component';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HyFeedBodyComponent} from './components/hy-feed-body/hy-feed-body.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {SharedModule} from '../../shared/modules/shared.module';

import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HyAuthModule} from '../hy-auth/hy-auth.module';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {HySidebarContentComponent} from './components/hy-sidebar-content/hy-sidebar-content.component';
import {HyFriendsComponent} from './components/hy-friends/hy-friends.component';
import {HyFriendCardComponent} from './components/hy-friend-card/hy-friend-card.component';
import {HyAuthGuard} from '../hy-auth/services/hy-auth-guard.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HyFeedComponent} from './components/hy-feed/hy-feed.component';
import {HyPostCardComponent} from './components/hy-post-card/hy-post-card.component';
import {HyCreatePostComponent} from './components/hy-create-post/hy-create-post.component';
import {HyGroupsComponent} from './components/hy-groups/hy-groups.component';
import {HyGroupsListComponent} from './components/hy-groups-list/hy-groups-list.component';
import {HyGroupChatComponent} from './components/hy-group-chat/hy-group-chat.component';
import {HyGroupsCreateComponent} from './components/hy-groups-create/hy-groups-create.component';
import { HySelectFriendsComponent } from './components/hy-select-friends/hy-select-friends.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { HyGroupsGraphComponent } from './components/hy-groups-graph/hy-groups-graph.component';
import { HyGroupInfoComponent } from './components/hy-group-info/hy-group-info.component';
import { HyGraphViewComponent } from './components/hy-graph-view/hy-graph-view.component';
import { HyFriendsGraphComponent } from './components/hy-friends-graph/hy-friends-graph.component';
import { HyImageComponent } from './components/hy-image/hy-image.component';

const routes: Routes = [
  {
    path: '', component: HyHomeComponent,
    children: [
      {path: 'home', component: HyFeedComponent},
      {path: 'create/post', component: HyCreatePostComponent},
      {path: 'friends', component: HyFriendsComponent},
      {path: 'friends/graph', component: HyFriendsGraphComponent},
      {path: 'groups', component: HyGroupsComponent},
      {path: 'groups/create', component: HyGroupsCreateComponent},
      {path: 'groups/graph', component: HyGroupsGraphComponent},
    ]
  }
];

@NgModule({
  declarations: [
    HyHomeComponent,
    HyFeedBodyComponent,
    HySidebarContentComponent,
    HyFriendsComponent,
    HyFriendCardComponent,
    HyFeedComponent,
    HyPostCardComponent,
    HyCreatePostComponent,
    HyGroupsComponent,
    HyGroupsListComponent,
    HyGroupChatComponent,
    HyGroupsCreateComponent,
    HySelectFriendsComponent,
    HyGroupsGraphComponent,
    HyGroupInfoComponent,
    HyGraphViewComponent,
    HyFriendsGraphComponent,
    HyImageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HyAuthModule,
    SharedModule,
    FormsModule,
    LayoutModule,

    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    NgxGraphModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HyHomeModule {
}
