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
            {
                data.map((el, i) =>
                    <p key={i}>Mi chiamo {el.name}, il mio colore preferito è il {el.favColor}</p>)
            }
        </div>
    )
}