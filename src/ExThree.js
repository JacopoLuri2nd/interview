export default function ExThree() {

    console.log("Ciao dalla console, correggi la funzione")

    function resolveAfter2Seconds() {
        return new Promise(res => {
            setTimeout(() => {
                res('ExThree risolto!');
            }, 2000);
        });
    }

    function call() {
        const result = resolveAfter2Seconds();
        console.log(result);
    }

    call();

    return (
        <p>Guarda la console</p>
    )
}