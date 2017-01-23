import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vidify-expandable-element',
  templateUrl: './expandable-element.component.html',
  styleUrls: ['./expandable-element.component.css']
})
export class ExpandableElementComponent implements OnInit {

  expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.expanded = false;
  }

}
