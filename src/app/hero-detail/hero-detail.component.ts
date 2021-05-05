import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroes/hero';
import {timestamp} from 'rxjs/operators';
import {log} from 'util';
import {ActivatedRoute} from '@angular/router';
import {state} from '@angular/animations';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  public ok: boolean;
  // constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ok = false;
    // 指向heroDetailComponent
    console.log(this);
    setTimeout(this.putData, 3000);
    // 箭头指向this作用域
    setTimeout(() => this.putData(), 3000);
    console.log('continue');
  }
  // tslint:disable-next-line:typedef
  putData(){
    console.log(this.ok);
    // 指向window
    console.log(this);
    this.ok = true;
  }
}
//  setTimeout(() => {this.ok = true; }, 3000);
