const num1Ele=document.getElementById('num1') as HTMLInputElement;
const num2Ele=document.getElementById('num2') as HTMLInputElement;
const btn=document.getElementById("button")!;

let numResult:Array<number>=[];//generic type
let textResult:string[]=[];

type NumOrString=number|string;
type Result={val:number;timestamp:Date}

interface ResultObj{
  val:number;
  timestamp:Date;
}
function add(num1:NumOrString, num2:NumOrString){
    if(typeof num1=="string" && typeof num2 =="string"){
      return num1 +' '+num2;
    }else if(typeof num1=="number" && typeof num2 =="number"){
      return num1 +num2;
    }
}

function printResult(resultObj:{val:number;timestamp:Date}){
  console.log(resultObj.val);
}
btn.addEventListener('click',()=>{
  const num1=num1Ele.value;
  const num2=num2Ele.value;
  const result=add(+num1,+num2); 
  numResult.push(result as number);
  const stringResult=add(num1,num2);
  textResult.push(stringResult as string);
  printResult({val:result as number,timestamp:new Date()})
  console.log(numResult,textResult); 
})

const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("it worked")
  },1000);
});
myPromise.then((result)=>{
  console.log(result);
})