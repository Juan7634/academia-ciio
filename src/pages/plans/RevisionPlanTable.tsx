import { useQuery } from "@tanstack/react-query"

export const RevisionPlanTable = () => {


  const { } = useQuery({
    queryKey: ['revision-plans'],
  });

  


  return (
    <div>RevisionPlanTable</div>
  )
}
