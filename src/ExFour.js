const data = [
    {
        name: "Gianni",
        favColor: "bianco",
    },
    {
        name: "Oscar",
        favColor: "blu"
    },
    {
        name: "Laura",
        favColor: "rosso"
    }
]

export default function ExFour() {
    return (
        <div>
            <p >Mi chiamo {data[0].name}, il mio colore preferito è il {data[0].favColor}</p>
            <p >Mi chiamo {data[1].name}, il mio colore preferito è il {data[1].favColor}</p>
            <p >Mi chiamo {data[2].name}, il mio colore preferito è il {data[2].favColor}</p>
        </div>
    )
}