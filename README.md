#This is a README to explain the code challeng
# grader.js
It is a grading system that prompts the user to enter marks 
Marks are the variable
Once marks are entered grades are assigned according to the if else statements in thes studentGrade function
There is then a code to prompt the user for entry of marks
This is followed by another if else statement that ensures marks entered are numbers between 0 and 100
If the above mentioned criteria is not met the message "invalid entry is returned"

# speed.js
The function is speedTaker 
Inside the speedtaker function if else statements return values depending on the speed entered
if the speed is below or equal to 70 the return is "good"
For every 5km the speed 70 is exceeded a demerit point is returned
Once 12 demerit points are accrued the return value changes to lincence suspended
After speedtaker is a block of if statements that make sure that the speed entered is a number from 0 and above
if the speed entered does not meet the rules a message 'invalid entry' is returned

# tax.js
We begin with a function getNetSalary
within it is ablock of if else statements designed to calculate paye in accordance with the gross entered
Also within the same function is another block of if else statements designed to give  amounts for nhif deductions according to the gross
Also in the same function is an statement that calculates nssf deductions
Then there is a declaration that adds the calculated Nhif,nssf and paye then subtracts them from gross thereby giving us the netSalary
Afterwards we got an if else statement that validates whether the gross entered is a number 
If its not a number the message 'invalid entry is returned   