import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { PrivacyTermsComponent } from './components/privacy-terms/privacy-terms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DynamicDialogModule
  ],
  providers: [
    DialogService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-heart-disease-frontend';
  constructor(
    private dialogService: DialogService
  ){

  }
  privacyTermsRef: any

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.privacyTermsRef) {
      this.privacyTermsRef.close();
    }
  }

  openPrivacyTerms(){
    this.privacyTermsRef = this.dialogService.open(PrivacyTermsComponent, {
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    }).onClose
  }
}
