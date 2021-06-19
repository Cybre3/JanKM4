class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(userName, salary, position, department) {
        const newEmployee = { userName, salary, position };
        const departmentMissing = this.departments.every(
            (index) => index[0] !== department
        );
        const missingEntry = Object.values(newEmployee).some((value) => {
            return value === "" || value === undefined || value === null;
        });
        const departmentNoGood =
            department === "" ||
            department === undefined ||
            department === null;

        try {
            if (missingEntry || departmentNoGood) {
                throw Error("Invalid input!");
            }

            if (salary < 0) {
                throw Error("Invalid input!");
            }

            if (departmentMissing) {
                this.departments.push([department, [newEmployee]]);
            } else {
                for (let eachD of this.departments) {
                    if (eachD[0] === department) {
                        eachD[1].push(newEmployee);
                    }
                }
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    bestDepartment() {
        const [departName, departEmployeesObjArr] =
            sortByDepartSalaryAvgHighToLow(this.departments)[0];
        return `Best Department is: ${departName}\nAverage salary: ${departmentSalaryAvg(
            departEmployeesObjArr
        ).toFixed(2)}\n${printBestDepartmentEmployees(departEmployeesObjArr)}`;
    }
}

function departmentSalaryAvg(departmentArr) {
    const sum = departmentArr.reduce(
        (accum, employeeObjArr) => accum + employeeObjArr.salary,
        0
    );
    return sum / departmentArr.length;
}

function sortByDepartSalaryAvgHighToLow(arr) {
    const sortedArr = arr.sort((department1Arr, department2Arr) => {
        return (
            departmentSalaryAvg(department2Arr[1]) -
            departmentSalaryAvg(department1Arr[1])
        );
    });

    return sortedArr;
}

function sortEmployeesSalaryHighToLow(arr) {
    let employeeInfoArr = arr.map((obj) => Object.values(obj));
    const sortedArr = employeeInfoArr.sort((employee1, employee2) => {
        return (
            employee2[1] - employee1[1] ||
            employee1[0].localeCompare(employee2[0])
        );
    });

    return sortedArr;
}

function printBestDepartmentEmployees(arrObj) {
    let sortedArr = sortEmployeesSalaryHighToLow(arrObj);
    return sortedArr.map((arr) => arr.join(" ")).join("\n");
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());