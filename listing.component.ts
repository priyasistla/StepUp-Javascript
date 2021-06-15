import { Component , OnInit } from '@angular/core';
import {cribs} from './../data/cribs';

@Component ({
selector: 'app-listing',
templateUrl:'./listing.component.html',
styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit {


    cribs : Array<any> = cribs;
    constructor() { }
    ngOnInit() {


    }
}

