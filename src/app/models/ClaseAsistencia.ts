export interface ClaseAsistencia{
    alumnos?:[{
        id?:string;
    }];
    asistentes?:[];
    codigo?:string;
      estado?:string;
    clase?:{
        alumnosins?:[];
        dias?:string;
        horarioinicio?:string;
        horariofin?:string;
        id?:string,
        nombre?:string;
        maestro?:string;
    };
}