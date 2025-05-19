

export const BasicTypes = () => {

    const name:string = 'Fernando';
    const age:number = 38;
    const isActive:boolean = true;

    const powers: string[] = ['React', "1"];

  return (
    <>
        <h3>Tipos Basico</h3>
        {name} - {age} - {isActive}
        <p>
            {powers.join(',')}
        </p>
    </>
  )
}
