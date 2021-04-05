import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaptiveRoutingModule } from './adaptive-routing.module';
import { MainComponent } from './pages/main/main.component';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        AdaptiveRoutingModule,
    ],
    providers: []
})
export class AdaptiveModule { }
