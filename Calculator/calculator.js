var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var oparand1=0;
var oparand2=null;
var oparator=null;
function isoparator(value){
    return value=="+"||value=="-"||value=="*"||value=="/";
}
for(i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        var text=display.textContent.trim();
        if(isoparator(value)){
            oparator=value;
            oparand1=parseFloat(text);
            display.textContent="";
        }
        else if(value=="ac"){
            display.textContent="";
        }
        else if(value=="sign"){
            oparand1=-1*oparand1;
            display.textContent=oparand1;
        }
        else if(value=="."){
            if(text.length && !text.includes('.')){
                display.textContent=text+'.';
            }
        }
        else if(value=="%"){
            oparand1=parseFloat(text);
            oparand1=oparand1/100;
            display.textContent=oparand1;
        }
        else if(value=="="){
            oparand2=parseFloat(text);
            var result=eval(oparand1+' '+oparator+' '+oparand2);
            if(result){
                display.textContent=result;
                oparand1=result;
                oparator=null;
                oparand2=null;
            }
        }
        else{
            display.textContent+=value;
        }
    });
}