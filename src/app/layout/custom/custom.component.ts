import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';
import { ThrowStmt } from '@angular/compiler';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';

// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';
// import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})

export class CustomComponent implements OnInit {

  tabActive = 0;
  
  location: any;
  clonewvFormId: any;
  emailmsg: any = [];
  emailFlag: boolean = false;
  values: any;
  selectOptions: any = [];
  sessionIndex: number;
  questionIndex: number;
  choice = false;
  dropdown = false;
  text = false;
  ChoiceCount = false;
  dropCount = false;
  choiceArray: any = [];
  dropDownArray: any = [];
  item: any;
  form = false;
  name = 'Angular';
  productForm: FormGroup;
  requestBody: any = [];
  name1: string
  passingArray: any = [];
  n = 0;
  index: any = [];
  constructor(private app: AppComponent, private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
    this.productForm = this.fb.group({
        question: '',
        questionType: '',
        quantities: this.fb.array([]),
        });
    }

  ngOnInit() {


  }
  get quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      questionValues: ''
    })
  }
  get questionValues() {
    return this.productForm.get("questionValues")
  }
  addQuantity(item) {
    console.log("item", item)

  this.quantities.push(this.newQuantity());
  }
  delete(index) {
    this.quantities.removeAt(index)
  }

  onSubmit() {
     this.n++
      this.requestBody = this.productForm.value
      this.requestBody['count'] = this.n
      this.requestBody['choiceCount'] = this.productForm.value.quantities.length
      this.requestBody['formName'] = this.name1
      console.log(this.requestBody)
      this.passingArray.push(this.requestBody)
      console.log(this.passingArray)
  alert("Do you want to submit")
             }
reset() {
       this.onSubmit()
      let i
      this.productForm.reset();
        for (i = -5; i <= this.quantities.length; i++) {
            this.delete(i)
    }
  }
resetOne() {
        let i
        this.productForm.reset();
        for (i = -5; i <= this.quantities.length; i++) {
          this.delete(i)
        }
 }

  gotoForm() {
    this.form = true

  }
  changeType() {

      this.choice = true;
      this.dropdown = false;
      this.text = false;
  }
  changeType1() {

      this.choice = false;
      this.dropdown = true;
      this.text = false;
  }
  changeType2() {
      this.choice = false;
      this.dropdown = false;
      this.text = true;
  }

  choiceCount(event) {
    let i = 0;
    console.log(event);


for (i = 0; i < event; i++) {
  this.choiceArray[i] = 'test'
}
console.log(this.choiceArray)
this.ChoiceCount = true;
  }
  dropDownCount(event) {
    let i = 0;
    console.log(event);
    this.dropCount = true;

this.dropDownArray.length = event;
for (i = 0; i < event; i++) {
  this.dropDownArray[i] = 'test'
}
  }
  title = 'htmltopdf';

  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save('MYPdf.pdf')}
)
  }


}
