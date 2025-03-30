let Endgame = () => {
    fetch("http://57.128.222.214/WD/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: '{end_game}'
    })
        .then((Response) => {
            console.log(Response)
            let json = Response.json()
            json.then((result) => {
                console.log(result)
            })
        })
}
Endgame()