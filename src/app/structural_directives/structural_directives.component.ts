import { Component } from '@angular/core';

@Component({
    selector: 'structural-directives',
    templateUrl: './structural_directives.component.html',
    styleUrls: ['./structural_directives.scss'],
})
export class StructuralDirectivesComponent {
    shouldDisplayText = false;

    colors: string[] = ['blue', 'red', 'purple', 'green'];

    handleClick(): void {
        this.shouldDisplayText = !this.shouldDisplayText;
    }
}
