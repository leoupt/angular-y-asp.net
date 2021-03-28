export interface PeliculaCreacionDTO{
    titulo:string;
    resumen:string;
    fechaLanzamiento:Date;
    enCines:boolean;
    trailer:string;
    poster:File;
}

export interface PeliculaDTO{
    titulo:string;
    resumen:string;
    fechaLanzamiento:Date;
    enCines:boolean;
    trailer:string;
    poster:string;
}
