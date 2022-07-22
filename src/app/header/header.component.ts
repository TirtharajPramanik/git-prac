import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  frst: FormControl = new FormControl(0);
  scnd: FormControl = new FormControl(0);
  sum: number = this.frst.value + this.scnd.value;

  change() {
    this.sum = this.frst.value + this.scnd.value;
  }
}
