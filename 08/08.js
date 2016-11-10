function isLeapYear(yearInAD){
    if(yearInAD % 4 == 0){
        if(yearInAD % 100 == 0){
            if(yearInAD % 400 == 0){
                return true; 
            }else{
                return false;
            }
        }
    }
}