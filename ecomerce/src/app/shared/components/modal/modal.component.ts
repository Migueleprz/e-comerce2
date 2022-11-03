import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('idModal') idModal: string = "";
  @Input('title') title: string = "";
  @Input('size') size: string = "";



  constructor() { }

  ngOnInit(): void {
  }

}
