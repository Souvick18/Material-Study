import { NgModule } from '@angular/core';
// for Autocomplete Mat Using
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// for Material Badge Using
import { MatBadgeModule} from '@angular/material/badge';
// for Bottomsheet
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// Common Module Using
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

const ArrayName = [ MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatSidenavModule];
@NgModule({
imports: [ArrayName],
exports: [ArrayName]
})

export class MaterialModule {}
