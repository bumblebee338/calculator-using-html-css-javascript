function insert(num){
        document.form.textview.value=document.form.textview.value+num
}

function equal(){
    exp= document.form.textview.value
    if(exp.substr(0,1)=='/' ||exp.substr(0,1)=='*'||exp.substr(0,1)=='-'||exp.substr(0,1)=='+')
        {
             document.form.textview.value="invalid syntax"
        }
    if(exp){
        document.form.textview.value=eval(exp)
    }
}

function clean(){
     document.form.textview.value=" "
}
function back(){
     exp=document.form.textview.value
    document.form.textview.value=exp.substring(0,exp.length-1)
}