import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule } from '@ngx-translate/core'
import { DragulaModule } from 'ng2-dragula'

import { AccessoriesCoreModule } from '@/app/core/accessories/accessories.module'
import { AccessoriesRoutingModule } from '@/app/modules/accessories/accessories-routing.module'
import { AccessoriesComponent } from '@/app/modules/accessories/accessories.component'
import { AccessorySupportComponent } from '@/app/modules/accessories/accessory-support/accessory-support.component'
import { AddRoomComponent } from '@/app/modules/accessories/add-room/add-room.component'
import { DragHerePlaceholderComponent } from '@/app/modules/accessories/drag-here-placeholder/drag-here-placeholder.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    DragulaModule,
    TranslateModule.forChild(),
    AccessoriesCoreModule,
    AccessoriesRoutingModule,
    AccessoriesComponent,
    DragHerePlaceholderComponent,
    AddRoomComponent,
    AccessorySupportComponent,
  ],
})
export class AccessoriesModule {}
