export interface Employee{
    name: string;
    email: string;
    address?: string;
    city: string;
    accType?: string;
}

export interface PropsEmp {
    list?: Employee[]
}