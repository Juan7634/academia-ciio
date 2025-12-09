import { GroupText } from "../GroupText"

export const IdentificationData = () => {
    return (
        <div className="py-3">
            <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-12 md:col-span-8">
                    <GroupText
                        label="Nombre del docente"

                    >
                        Villegas Alcantar, Benjamín
                    </GroupText>
                </div>

                <div className="col-span-12 md:col-span-4">
                    <GroupText
                        label="Calendario"
                    >
                        2025B
                    </GroupText>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-12  md:col-span-6">
                    <GroupText
                        label="Division de adscripcion de la UA"
                    >
                        DIVISIÓN DE CIENCIAS SOCIALES Y DE LA CULTURA
                    </GroupText>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <GroupText
                        label="Departamento"
                    >
                        DEPTO. DE ESTUDIOS ORGANIZACIONALES
                    </GroupText>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6 lg:col-span-3  2xl:col-span-4">
                    <GroupText
                        label="Academia"
                    >
                        FINANZAS E IMPUESTOS
                    </GroupText>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-3  2xl:col-span-4">
                    <GroupText
                        label="Programa educativo"
                    >
                        ADMINISTRACION
                    </GroupText>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-2  2xl:col-span-2">
                    <GroupText
                        label="Tipo"
                    >
                        CURSO-TALLER
                    </GroupText>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-2  2xl:col-span-1">
                    <GroupText
                        label="Semestre"
                    >
                        8
                    </GroupText>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-2  2xl:col-span-1">
                    <GroupText
                        label="Turno"
                    >
                        M
                    </GroupText>
                </div>
            </div>

        </div>
    )
}
