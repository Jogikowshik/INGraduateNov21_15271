import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  file: any;

  constructor(
    private httpClient: HttpClient
  ) { } 

  ngOnInit(): void {
  }
  selectFile(e: any){
      this.file = e.target.files[0];
  }
  upload(){
      let formData = new FormData();
      formData.append('file',this.file);
      this.httpClient.post('http://localhost:45092/api/demo/uploads',formData).toPromise().then(
        res =>{
          console.log(res);
          
        },
        err =>{
          console.log(err);
        }

      );
  }

}
