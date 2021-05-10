import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload-service';


@Component({
  selector: 'app-invoice',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
[x: string]: any;
files: string[] = [];
file:any;
constructor(private fileUploadService: FileUploadService) { }
  
ngOnInit(): void {
}
  
// On file Select
onChange(event) {
    this.file = event.target.files[0];
}
  
// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
  
                // Short link via api response
                this.shortLink = event.link;
  
                this.loading = false; // Flag variable 
            }
        }
    );
}

}