import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-itemsgrp',
  templateUrl: './itemsgrp.component.html',
  styleUrls: ['./itemsgrp.component.css']
})
export class ItemsgrpComponent implements OnInit {
  @Input() ItemgrpeComp: any;

  constructor() { }

  ngOnInit(): void {
  }

}
