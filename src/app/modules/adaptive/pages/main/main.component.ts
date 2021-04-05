import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, Observable} from 'rxjs';
import { ResolutionService } from '@core/services/resolution.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-adaptive-main-page',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnDestroy {

    isMobile$: Observable<boolean>;
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private resolutionService: ResolutionService) {
        this.isMobile$ = this.resolutionService.isMobile$.pipe(takeUntil(this.destroyed$));
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
