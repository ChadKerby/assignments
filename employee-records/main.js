// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`
var employees = []

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.
function Employee (name, jobTitle, salary, status, printEmployeeForm){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = printEmployeeForm
    this.print = function(){
        console.log(this.printEmployeeForm)
    }
}

var mario = new Employee("Mario", "PLumber", 10000, "Full Time")
var luigi = new Employee("Luigi", "Plumber", 1, "Full Time")
var peach = new Employee("Peach", "Princess", 1000000, "Full Time")
// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.
employees.push(mario, luigi, peach)
console.log(employees)
