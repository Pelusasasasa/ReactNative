
interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address
};

interface Address {
    country: string;
    houseNo: number;
    street?: string
}

export const ObjctLiterals = () => {

    const person: Person = {
    firstName: 'Agustin',
    lastName: 'Lorenzatto',
    age: 25,
    address: {
        country: 'Canada',
        houseNo: 615
    }

    }

  return (
    <>
        <h3>Objetos Literales</h3>

        <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
