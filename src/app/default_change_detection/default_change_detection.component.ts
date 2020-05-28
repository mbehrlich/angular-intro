import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TacoService, Taco } from '../taco_service/taco_service';

@Component({
    selector: 'default-change-detection',
    templateUrl: './default_change_detection.component.html',
    styleUrls: ['./default_change_detection.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultChangeDetectionComponent {

    taco?: Taco;

    constructor(tacoService: TacoService) {
        tacoService.getRandomTaco().subscribe(taco => {
            this.taco = taco;
        });
    }
}
