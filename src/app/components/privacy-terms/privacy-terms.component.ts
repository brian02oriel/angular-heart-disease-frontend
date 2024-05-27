import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-privacy-terms',
  standalone: true,
  imports: [],
  templateUrl: './privacy-terms.component.html',
  styleUrl: './privacy-terms.component.scss'
})
export class PrivacyTermsComponent implements OnInit, OnDestroy {
  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogParams: DynamicDialogConfig,
  ){

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
}
