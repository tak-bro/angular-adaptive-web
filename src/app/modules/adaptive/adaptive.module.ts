import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaptiveRoutingModule } from './adaptive-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MainMobileComponent } from './pages/main/mobile/main.mobile.component';
import { MainDesktopComponent } from './pages/main/desktop/main.desktop.component';

@NgModule({
    declarations: [
        MainComponent,
        MainMobileComponent,
        MainDesktopComponent,
    ],
    imports: [
        CommonModule,
        AdaptiveRoutingModule,
    ],
    providers: []
})
export class AdaptiveModule { }
