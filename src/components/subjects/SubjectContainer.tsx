import type { SubjectI } from "../../schema/SubjectI"
import { SubjectCard } from "./SubjectCard"

// export interface SubjectI {
//   id: string
//   name: string
//   code: string
//   career : string
//   academy : string
//   crn : string,
//   status? : SubjectStatusI
// }

const subjectData: SubjectI[] = [
    {
        id: 1,
        name: 'Programación Orientada a Objetos',
        crn: 'POO-101',
        career: 'Ing. Computacion',
        academy: 'Ingenieria en Computacion',
    },
    {
        id: 2,
        name: 'Bases de Datos Avanzadas',
        crn: 'POO-105',
        career: 'Ing. Computacion',
        academy: 'Ingenieria en Computacion',
        status: {
            code: 'draft',
            name: 'Borrador'
        }
    },
    {
        id: 3,
        name: 'Bases de Datos Avanzadas II',
        crn: 'POO-110',
        career: 'Ing. Computacion',
        academy: 'Ingenieria en Computacion',
        status: {
            code: 'pending_president',
            name: 'Pendiente'
        }
    }
]

export const SubjectContainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {
                subjectData.map((subject, index) => (
                    <SubjectCard
                        key={index}
                        subject={subject}
                        
                    />
                ))
            }
        </div>
    )
}

