import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs/Subject';
import { PunService } from '../services/pun.service';

@Component({
    selector: "ns-puns",
    moduleId: module.id,
    templateUrl: "./puns.component.html",
})
export class PunsComponent implements OnInit {

    keywordInputChange$ = new Subject<string>();

    constructor(
        private puns: PunService
    ) { }

    ngOnInit() {

    }
}
