export class salaryModel {
    employeeId: string;
    employeeName: string;
    dateOfJoining: string;
    department: string;
    role: string;
    salary: Salary;
}

class Salary {
    id: number;
    employeeId: string;
    current: boolean;
    past:boolean;
    future: boolean;
    startDate: string;
    endDate: string;
    ctc: number;
    gross: number;
    basic: number;
    hra:number;
    conveyance:number;
    lta:number;
    medicalAllowance:number;
    mealAllowance:number;
    specialAllowance:number;
    fixedPay1:number;
    fixedPay2:number;
    fixedPay3:number;
    fixedPay4:number;
    variablePay1:number;
    variablePay2:number;
    variablePay3:number;
    variablePay4:number;
    employeePf:number;
    employerPf:number;
    professionalTax:number;
    tds:number;
    ctcStructureId:number;
    ctcStructure:number;
}