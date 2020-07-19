import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    uploadedComp: string;
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(uploaded_component: string) {
        this.uploadedComp = uploaded_component;
        this.featureSelected.emit(this.uploadedComp)
    }
}
