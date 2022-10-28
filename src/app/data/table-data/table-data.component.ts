import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public headings = ['Name', 'Gender', 'Marks', 'Address'];

  public data: any = [
    {
      'Name': 'Athila',
      'Gender': 'F',
      'Marks': 95,
      'Address': 'Kottayam'
    },
    {
      'Name': 'Aysha',
      'Gender': 'F',
      'Marks': 92,
      'Address': 'Kozhikode'
    },
    {
      'Name': 'Akshay',
      'Gender': 'M',
      'Marks': 88,
      'Address': 'Trivandrum'
    },
    {
      'Name': 'Azhar',
      'Gender': 'M',
      'Marks': 90,
      'Address': 'Kozhikode'
    },
    {
      'Name': 'Adithya',
      'Gender': 'M',
      'Marks': 89,
      'Address': 'Ernakulam'
    },
    {
      'Name': 'Arya',
      'Gender': 'F',
      'Marks': 80,
      'Address': 'Thrissur'
    }
  ]
}