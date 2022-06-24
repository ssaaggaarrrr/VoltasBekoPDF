import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pdf',
  templateUrl: './list-pdf.component.html',
  styleUrls: ['./list-pdf.component.css']
})
export class ListPdfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }





  // onClick(pdfName : string){
  //   if(pdfName === 'TJA'){
  //   window.open('/view-pdf/' + '1');
  //   } else if(pdfName === 'LWS'){
  //     // this.router.navigate(['/view-pdf'] , {queryParams: {pdf : 'LWS'}});
  //     window.open('/view-pdf/' + '2');
  //   }else if(pdfName === 'TP'){
  //     // this.router.navigate(['/view-pdf'], {queryParams: {pdf : 'TP'}});
  //     window.open('/view-pdf/' + '3');
  //   }
  //   else if(pdfName === 'RG'){
  //     // this.router.navigate(['/view-pdf'], {queryParams: {pdf : 'RG'}});
  //     window.open('/view-pdf/' + '4');
  //   }
  //   else if(pdfName === 'PAI'){
  //     // this.router.navigate(['/view-pdf'], {queryParams: {pdf : 'PAI'}});
  //     window.open('/view-pdf/' + '5');
  //   }
  //   else if(pdfName === 'MB'){
  //     // this.router.navigate(['/view-pdf'], {queryParams: {pdf : 'MB'}});
  //     window.open('/view-pdf/' + '6');
  //   }
  // }

}
