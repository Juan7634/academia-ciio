
interface ShowErrorFormProps {
    message: string;   
    classname? : string
}

export const ShowErrorForm = ({
    message,
    classname
} : ShowErrorFormProps) => {
  return (
    <p className={`text-red-500 text-sm mt-1  text-wrap ${classname}`}>{message}</p>
  )
}
