let totalNumberBtn=0;
let btnNumber;
let btn=document.querySelector(".number");
let btnValue;
let result;
let isMinusClicked=false;
let isAddClicked=false;
let numbers=[];
let operators=[];
let numbersWithSpaces=[];
let negativeCount=0;
let inputField=document.querySelector(".inputNumber");
let isEXPClicked=false;
let EXPArr=[];
let EXPResult=0;
let exponentArr=[];
let exponentResult=0;
let isExponentClicked=false;

function numberHolder(event)
{
    btnValue=event.target.textContent;
    btnNumber=Number(btnValue);
    inputField.value+= btnNumber;
}
function runClear()
{
    inputField.value="";
    operators=[];
    numbers=[];
    numbersWithSpaces=[];
    exponentArr=[];
    EXPArr=[];
    EXPResult=0;
    exponentResult=0;
    result=0;
}
//Since functionalities don't need to be made for the paranthesis, the below code can just be commented out.

//   function runOpenParanthesis()
//   {
//     inputField.value+="(";

//   }
//   function runCloseParanthesis()
//   {
//     inputField+=")";
//   }
function runPercent()
{
    inputField.value=Number(inputField.value/100);
}

function runFactorial()
{
    let factorialResult=1;
    let holder=Number(inputField.value);
    if(Number(inputField.value)<0)
    {
        inputField.value="Error, input is negative numbers!";
    }
    if(Number(inputField.value)==0)
    {
        inputField.value=1;
    }
    else
    {
        for(let i=holder;i>=1;i--)
        {
            factorialResult*=i;
        }
    }
    inputField.value=factorialResult;
}

function runSin()
{
    inputField.value=Math.sin(inputField.value);

}
function runCos()
{
    inputField.value=Math.cos(inputField.value);
}
function runLn()
{
    inputField.value=Math.log(inputField.value);
}
function runLog()
{
    inputField.value=Math.log10(inputField.value);
}
function runSqrt()
{
    inputField.value=Math.sqrt(inputField.value);
}
function runTan()
{
    inputField.value=Math.tan(inputField.value);
}
function runEXP()
{
    inputField.value+="E";
    isEXPClicked=true;

}
function runExp()
{
    inputField.value+="^";
    isExponentClicked=true;
}
function runDot()
{
    inputField.value+=".";
}


function minusFunction()
{


    inputField.value+="-";
}
function addFunction()
{

    inputField.value+="+";
}
function multiplyFunction()
{
    inputField.value+="x";
}
function divideFunction()
{
    inputField.value+="/";
}

function displayResult()
{
    if(isEXPClicked)
    {
        EXPArr=inputField.value.split("E");
        EXPResult=EXPArr[0]+"0".repeat(EXPArr[1]);
        inputField.value=EXPResult;
        isEXPClicked=false;

    }

    if(isExponentClicked)
    {
        exponentArr=inputField.value.split("^");
        exponentResult=Number(exponentArr[0])**Number(exponentArr[1]);
        inputField.value=exponentResult;
        isExponentClicked=false;
    }
    else
    {
        let numbersWithSpaces = inputField.value.split(/[-+x/]/);
              

        numbers=numbersWithSpaces.filter(element=>element!="");
        for(let i=0; i<inputField.value.length;i++)
        {
            if(inputField.value[i]=="+")
            {
                operators.push("+");
            }
            if(inputField.value[i]=="-")
            {
                operators.push("-");
            }
            if(inputField.value[i]=="x")
            {
                operators.push("x");
            }
            if(inputField.value[i]=="/")
            {
                operators.push("/");
            }
        }

        let result=Number(numbers[0]);

             
        for(let i=1; i<numbers.length;i++)
        {
            if(operators[i-1]=="+")
            {
                result+=Number(numbers[i]);
            }
            if(operators[i-1]=="-")
            {
                result-=Number(numbers[i]);
            }
            if(operators[i-1]=="x")
            {
                result*=Number(numbers[i]);
            }
            if(operators[i-1]=="/")
            {
                result/=Number(numbers[i]);
            }
        }

        inputField.value=result;
        operators=[];
    }

}