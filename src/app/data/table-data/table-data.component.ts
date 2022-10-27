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

  click(id: any) {
    var data: any = document.getElementsByClassName('rows' + id);
    var show: any = document.getElementById(id);
    for (let i of data) {
      i.removeAttribute('readonly');
    }
    show.removeAttribute('hidden');
  }

  saveData(i: any, name: any, gender: any, marks: any, address: any) {
    var data: any = document.getElementsByClassName('rows' + i);
    var show: any = document.getElementById(i);
    for (let i of data) {
      i.readOnly = true;
    }
    show.hidden = true;

    data[i].name = name;
    data[i].gender = gender;
    data[i].marks = marks;
    data[i].address = address;
  }
}