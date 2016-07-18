import {Component, OnInit} from '@angular/core';
import {Hero} from "../heroes/hero.service";

@Component({
  moduleId: module.id,
  selector: 'selector',
  templateUrl: './template-syntax.component.html'
})
export class TemplateSyntax implements OnInit {
  currentHero:Hero;
  isGood:boolean;

  constructor() {

  }

  ngOnInit() {
    this.currentHero = new Hero(0, "Wen Tung");
    this.isGood = true;
  }

  getVal() {
    return 2;
  }
}
