import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

export interface Taco {
    baseLayer?: string;
    condiment?: string;
    mixin?: string;
    seasoning?: string;
    shell?: string;
}

const DEFAULT_TACO: Taco = {
    baseLayer: 'Ground Beef',
    condiment: 'Salsa',
    mixin: 'Cheese',
    seasoning: 'Taco Seasoning',
    shell: 'Hard Taco Shell',
};

@Injectable({providedIn: 'root'})
export class TacoService {
    constructor(private readonly http: HttpClient) {}

    getRandomTaco(): Observable<Taco> {
        return this.http.get('http://taco-randomizer.herokuapp.com/random/')
            .pipe(
                map((taco: any) => {
                    const displayTaco: Taco = {
                        baseLayer: taco.base_layer.name,
                        condiment: taco.condiment.name,
                        mixin: taco.mixin.name,
                        seasoning: taco.seasoning.name,
                        shell: taco.shell.name,
                    };
                    return displayTaco;
                }),
                catchError(() => {
                    return of(DEFAULT_TACO);
                }),
                tap(taco => {
                    console.log(taco);
                }));
    }
}
