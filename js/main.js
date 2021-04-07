const bdayInp = document.querySelector('#bday');
const btn = document.querySelector('#btn');
const para = document.querySelector('#inp-msg')

function validatedate(dateString){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(dateString.match(dateformat)){      
        let operator = dateString.split('/');   
        let operator2 = dateString.split('-')   
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            pdatepart = dateString.split('/');      
        }  
        
        else if (operator2.length>1){      
            pdatepart = dateString.split('-');      
        } 
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range      
                return false;      
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){           
                return false;      
            }      
        }      
    }else{      
        return false;      
    }      
    return true;      
} 



function inputValidation(inp){
    btn.onclick = event => {
        event.preventDefault();
        if(inp.value == ''){
            para.style.display = "block"
            para.style.color = "red"
            para.innerHTML = 'please enter your bday'
        }else{
            if(validatedate(inp.value)){
                para.style.display = "block";
                para.style.color = "#23d160"
                para.innerHTML = "date valid"
            }else{
                para.style.display = "block";
                para.style.color = "red"
                para.innerHTML = "the date is not valid"
            }
        }
    }
}

inputValidation(bdayInp)