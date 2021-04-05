import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';

const MAX_MOBILE_WIDTH = 768;

@Injectable({
    providedIn: 'root'
})
export class ResolutionService {

    private isMobileSubject: BehaviorSubject<boolean>;

    constructor(private eventManager: EventManager) {
        this.isMobileSubject = new BehaviorSubject(this.windowRef.innerWidth < MAX_MOBILE_WIDTH);
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    get windowRef() {
        return window;
    }

    get isMobile$(): Observable<boolean> {
        return this.isMobileSubject.asObservable();
    }

    private onResize() {
        this.isMobileSubject.next(this.windowRef.innerWidth < MAX_MOBILE_WIDTH);
    }
}
