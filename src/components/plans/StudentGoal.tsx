import { GroupText } from "../GroupText"

export const StudentGoal = () => {
    return (
        <div className="grid grid-cols-1 mt-4 gap-4">
            <div className="col-span-1">
                <GroupText
                    label="Competencia de la unidad de aprendizaje (UA)"
                >
                    IDENTIFICA LOS ELEMENTOS DE LA ADMINISTRACIÓN DE CAPITALES, PARA QUE DE ESTA MANERA PUEDAN TOMAR DECISIONES RAZONADAS DURANTE UN EJERCICIO PROFESIONAL. ASIMISMO, CONOCE LAS PRINCIPALES FUENTES DE FINANCIAMIENTO Y PUEDAN DECIDIR CUÁL ES LA MÁS ADECUADA PAR
                </GroupText>
            </div>

            <div className="col-span-1">
                <GroupText
                    label="Unidades temáticas (sólo nombre)"
                >
                    Unidad 1. BASES CONCEPTUALES DE INGENIERÍA ECONÓMICA <br />
                    Unidad 2. MATEMÁTICAS FINANCIERAS <br />
                    Unidad 3. FUENTES DE FINANCIAMIENTO <br />
                    Unidad 4. ANÁLISIS FINANCIERO <br />
                </GroupText>
            </div>
        </div>
    )
}
