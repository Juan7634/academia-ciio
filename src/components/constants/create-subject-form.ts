import type { ActivityI, DataActivity, EvaluationCriteriaI } from "../../schema/StudyPlantI"

export const defaultActivitiesValues: ActivityI[] = [{
    unit: "",
    activity: "",
    tool: "",
    studentDevelop: "",
    date: new Date()
}]



export const defaultEvaluationCriteriaValues : EvaluationCriteriaI[] = [
    {
        name: "Evaluación parcial",
        value: 0
    },
    {
        name: "Participación",
        value: 0
    },
    {
        name: "Trabajo en equipo",
        value: 0
    },
    {
        name: "Proyecto",
        value: 0
    },
    {
        name: "Departamental",
        value: 0
    }

]

export const defaultEvaluationProductsValues = [
    {
        name: "Control / reporte de lectura",
    },
    {
        name: "Informe de investigación",
    },
    {
        name: "Ejercicios resueltos en equipo",
    },
    {
        name: "Examen objetivo"
    },
    {
        name: "Exposiciones por equipo"
    },
    {
        name: "Mapa conceptual / mental"
    }
]

export const defaultEvaluationActivityValues = [
    {
        name: "Lecturas previas (aula invertida)"
    },
    {
        name: "Investigación previa (aula invertida)"
    },
    {
        name: "Trabajo en equipo"
    },
    {
        name: "Reto Kahoot!"
    },
    {
        name: "Exposiciones"
    },
    {
        name: "Reporte de visita a empresa"
    }
]

export const competitionGoalData: DataActivity = {
    unit: [
        {
            label: "Unidad 1",
            value: "unidad-1"
        },
        {
            label: "Unidad 2",
            value: "unidad-2"
        },
        {
            label: "Unidad 3",
            value: "unidad-3"
        },
        {
            label: "Unidad 4",
            value: "unidad-4"
        },
        {
            label: "Unidad 5",
            value: "unidad-5"
        },
        {
            label: "Unidad 6",
            value: "unidad-6"
        },
        {
            label: "Unidad 7",
            value: "unidad-7"
        },
        {
            label: "Unidad 8",
            value: "unidad-8"
        },
        {
            label: "Unidad 9",
            value: "unidad-9"
        },
        {
            label: "Unidad 10",
            value: "unidad-10"
        }
    ],
    activity: [
        { value: "1", label: "DESAFÍOS CREATIVOS DONDE LOS ESTUDIANTES PROPONEN SOLUCIONES ORIGINALES A PROBLEMAS PLANTEADOS." },
        { value: "2", label: "SIMULACIONES O JUEGOS DE ROL PARA EXPERIMENTAR SITUACIONES PRÁCTICAS." },
        { value: "3", label: "CREAR MAPAS CONCEPTUALES O ESQUEMAS PARA ORGANIZAR Y VISUALIZAR LA INFORMACIÓN." },
        { value: "4", label: "PROYECTOS FINALES DONDE LOS ESTUDIANTES PUEDAN DEMOSTRAR SU CREATIVIDAD E INNOVACIÓN EN LA APLICACIÓN DE LO APRENDIDO." },
        { value: "5", label: "REALIZAR UN RESUMEN DE UN TEXTO SELECCIONADO." },
        { value: "6", label: "REALIZAR UNA INVESTIGACIÓN EN GRUPO SOBRE UN TEMA ASIGNADO." },
        { value: "7", label: "ELABORAR UN PÓSTER O PRESENTACIÓN DIGITAL PARA COMPARTIR LOS RESULTADOS." },
        { value: "8", label: "ORGANIZAR DEBATES FORMALES SOBRE TEMAS ACTUALES O CONTROVERSIALES." },
        { value: "9", label: "REALIZAR MESAS REDONDAS DONDE LOS ESTUDIANTES EXPONGAN DIFERENTES PUNTOS DE VISTA." },
        { value: "10", label: "RESOLVER PROBLEMAS COMPLEJOS EN EQUIPOS DONDE CADA MIEMBRO APORTA UNA SOLUCIÓN." },
        { value: "11", label: "ANÁLISIS CRÍTICO DE TEXTOS, PELÍCULAS O NOTICIAS ACTUALES." },
        { value: "12", label: "CREAR MAPAS MENTALES PARA ORGANIZAR IDEAS Y ARGUMENTOS DE FORMA VISUAL." },
        { value: "13", label: "ELABORACIÓN DE PODCASTS SOBRE TEMAS DE INTERÉS." },
        { value: "14", label: "ELABORACIÓN DE UN MURAL COLABORATIVO SOBRE UN TEMA RELEVANTE." },
        { value: "15", label: "JUEGOS DE MESA ADAPTADOS PARA REPASAR CONTENIDOS." },
        { value: "16", label: "SIMULACIONES DE CASOS PRÁCTICOS PARA APLICAR CONOCIMIENTOS TEÓRICOS." },
        { value: "17", label: "PRESENTAR INFORMES DE INVESTIGACIÓN CON ANÁLISIS DETALLADOS." },
        { value: "18", label: "PRESENTACIONES ORALES SOBRE TEMAS ESPECÍFICOS." },
        { value: "19", label: "REALIZAR CUESTIONARIOS CORTOS PARA VERIFICAR LA COMPRENSIÓN." },
        { value: "20", label: "UTILIZAR PLATAFORMAS VIRTUALES PARA COLABORACIÓN EN LÍNEA." },
        { value: "21", label: "DESARROLLAR PROYECTOS UTILIZANDO HERRAMIENTAS DIGITALES ESPECIALIZADAS." },
        { value: "22", label: "RESOLVER CASOS PRÁCTICOS RELACIONADOS CON LA CARRERA." },
        { value: "23", label: "REALIZAR ACTIVIDADES COLABORATIVAS QUE FOMENTEN LA COOPERACIÓN, LA RESOLUCIÓN DE PROBLEMAS Y EL LIDERAZGO." },
        { value: "otro", label: "Otro..." }
    ],
    tool: [
        { value: "1", label: "Promoción de valores entorno al compromiso ético" },
        { value: "2", label: "Fomento de la responsabilidad social y compromiso ciudadano" },
        { value: "3", label: "Capacidad creativa" },
        { value: "4", label: "Capacidad de investigación" },
        { value: "5", label: "Capacidad de aprender a aprender y de habilidades del pensamiento" },
        { value: "6", label: "Capacidad de abstracción, análisis y síntesis" },
        { value: "7", label: "Capacidad para identificar, plantear y resolver problemas" },
        { value: "8", label: "Capacidad para formular y gestionar proyectos" },
        { value: "9", label: "Habilidades en el uso de las TIC" },
        { value: "10", label: "Capacidad de comunicación oral y escrita" },
        { value: "11", label: "Capacidad de comunicación en un segundo idioma" },
        { value: "12", label: "Capacidad de trabajo en equipos inter/multidisciplinarios" },
        { value: "13", label: "Habilidad para trabajar en contextos internacionales" },
        { value: "14", label: "Compromiso con la preservación del medio ambiente" },
        { value: "15", label: "Capacidad de aplicar los conocimientos en la práctica" }
    ],
    studentDevelop: [
        { value: "1", label: "Examen de objetivo" },
        { value: "2", label: "Quiz" },
        { value: "3", label: "Lista de cotejo" },
        { value: "4", label: "Rubrica" },
        { value: "5", label: "Portafolio" },
        { value: "6", label: "Demostración" },
        { value: "7", label: "Exposición oral" },
        { value: "8", label: "Simulación" },
        { value: "9", label: "Ensayo" },
        { value: "10", label: "Ensayo restringido" },
        { value: "11", label: "Estudio de caso" },
        { value: "12", label: "Resolución de problemas" },
        { value: "13", label: "Proyecto" },
        { value: "14", label: "Investigación" },
        { value: "15", label: "Diario de campo" },
        { value: "16", label: "Examen Clinico Objetivo Estructurado" }
    ]
}
