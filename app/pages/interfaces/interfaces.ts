export interface Users{
    id:number;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    asignatura: string;
    ano: number;
    semestre: string;
    horas_sem: number;
    password: string;
    role: String;
    isactive: boolean;
}

export interface Usuario{
    nombre: string;
    apellido: string;
    email: string;
    sede: string;
    jornada: string;
    asignatura: string;
    ano: number;
    semestre: string;
    horas_sem: number;
    password: string;
}