const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

function displayEmployees() {
    const totalEmployees = employees.map(e => `<p>${e.id}: ${e.name} - ${e.department} - $${e.salary} </p>`)
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries () {
    const totalSalaries = employees.reduce((prev, e) => prev + e.salary, 0)
    alert(`Total Salaries: $${totalSalaries}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter(e => e.department === 'HR')
    const hrEmployeesDisplay = hrEmployees.map((e, i) => `<p>${e.id}: ${e.name}: ${e.name} - ${e.department} - $${e.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
} 

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(e => e.id === employeeId)
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
            
}