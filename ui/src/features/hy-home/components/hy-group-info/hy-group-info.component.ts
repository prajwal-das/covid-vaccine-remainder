import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'hy-group-info',
  templateUrl: './hy-group-info.component.html',
  styleUrls: ['./hy-group-info.component.scss']
})
export class HyGroupInfoComponent implements OnInit {

  group: any;

  constructor(
    public dialogRef: MatDialogRef<HyGroupInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.group = data;
    console.log(this.group);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
