import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input() keyword?:string;
  arrData:any = ["Race", "Part", "Heart", "Listen"];
  result:any;
  resultArr:any=[]
  trueData: any;
  constructor() { 

    //console.log(this.keyword)
   
  }

  ngOnInit(): void {
    this.refresh();
  }

  ngDoCheck(){
    this.refresh();
  }
  
  refresh(){
    if(this.keyword){
      this.resultArr=[];
   //   alert('ddddddd')
    this.arrData.forEach((element:any) => {
    const res = this.anagram(this.keyword, element);
    console.log(res)
      this.resultArr.push(res);
     // return res;
    });

   
    
  }
  }

  anagram(str1:any, str2:any) {
console.log(str1)
console.log(str2)
var str1 = str1.toLowerCase();
var str2 = str2.toLowerCase();

if (str1 === str2)
  return true;

this.result = {};

for(var i = 0; i < str1.length; i++) {
  if (this.result[str1[i]])
  this.result[str1[i]] = this.result[str1[i]] + 1;
  else
  this.result[str1[i]] = 1;
}

for(var j = 0; j < str2.length; j++) {
  if (this.result[str2[j]])
  this.result[str2[j]] = this.result[str2[j]] - 1;
  else
  this.result[str2[j]] = 1;
}

for (var key in this.result) {
  if (this.result[key] !== 0) 
    return false;
}

return true;
}
}
