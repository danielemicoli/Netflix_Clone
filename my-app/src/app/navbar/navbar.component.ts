import { Component, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

// @ViewChild('stickHeader') header: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

}
