import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { HobbiesDialogData } from './HobbiesDialogData';

@Component({
    selector: 'app-hobbies-dialog',
    templateUrl: 'hobbies-dialog.html',
    styleUrls: ['./hobbies-dialog.less']
})
export class HobbiesDialogComponent implements OnInit {
    ngOnInit(): void {
    }

    constructor(
        public dialogRef: MatDialogRef<HobbiesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HobbiesDialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    get title(): string {
        return this.data.title;
    }

    get description(): string {
        return this.data.description;
    }

    get imageUrl(): string {
        return 'assets/images/' + this.data.imageUrl;
    }
}
