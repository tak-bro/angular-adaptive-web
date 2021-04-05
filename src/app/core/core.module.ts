import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolutionService } from '@core/services/resolution.service';

const SERVICES = [
    ResolutionService,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ]
})
export class CoreModule {}
