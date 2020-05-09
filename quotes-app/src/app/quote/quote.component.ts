import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Quote{

  showDescription= false;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public submitter: string,
    public completeDate: Date)
  )
}
