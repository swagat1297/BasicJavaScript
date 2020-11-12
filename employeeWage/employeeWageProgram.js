const WagePerHour = 20;
var totalEmpwages=0;
const FullDay=8;
const DaysPerMonth=20;
const ParTime=8;
const TotalHoursPerMonth=100;
function computeEmpWages(){
    var totalWorkDays=0;
    var totalempHrs=0;
    var empHours=0;
    //when total working days is less then days per month and total employee hours is less the total hours per month 
    while(totalWorkDays < DaysPerMonth && totalempHrs < TotalHoursPerMonth)
    {
        totalWorkDays++;
        var empCheck =(Math.ceil(Math.random()*10)%3 + 1);
        switch(empCheck) {
            case 1:
                empHours+=8; //fulltime value
                break;
            case 2:
                empHours+=8; //parttime
                break;
            default:
                empHours+=0; //absent
                break;
       
       }
           totalempHrs+=empHours;
    }
    
    totalEmpwages=totalempHrs*WagePerHour;
    console.log("The Total employee wages "+totalEmpwages);
}

computeEmpWages.call();

