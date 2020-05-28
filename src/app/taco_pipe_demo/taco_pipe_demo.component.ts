import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TacoService, Taco } from '../taco_service/taco_service';
import { Observable } from 'rxjs';

@Component({
    selector: 'taco-pipe-demo',
    templateUrl: './taco_pipe_demo.component.html',
    styleUrls: ['./taco_pipe_demo.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TacoPipeDemoComponent {

    taco$: Observable<Taco>;

    constructor(tacoService: TacoService) {
        this.taco$ = tacoService.getRandomTaco();
    }
}
