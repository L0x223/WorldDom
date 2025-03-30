let yValues = [50, 35, 15, 27, 0];
let xValues = [1, 2, 3, 4, 5];

let New_Round = false
setInterval(() => {
    if (!New_Round) {
        fetch("http://57.128.222.214/WD/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: '{check_round}',
        })
            .then((Response) => {
                if (Response.redirected) {
                    window.location.href = "http://57.128.222.214/WD/end_game.html";
                }
                if (Response.status == 404) {
                    console.log("Not new round yet")
                }
                else {
                    document.getElementById("tea").hidden = true
                    New_Round = true
                    console.log(Response.body)
                    let json = Response.json()
                    let i = 0
                    json.forEach(arr => {
                        if (i < 4) {
                            document.getElementById("C" + (i + 1)).textContent = arr[0]
                            document.getElementById("C" + (i + 1) + "_W").textContent = arr[1]
                        }
                        else {
                            yValues = arr
                            xValues = xValues.slice(0, arr.length)
                        }
                    });
                }
            })
    }
}, 30000)

let graph = () => {
    new Chart("Eco_Chart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "rgba(0,133,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Ecology graph"
            }
        }
    });
}

//Onload
fetch("http://57.128.222.214/WD/api", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: '{check_round}',
})
    .then((Response) => {
        if (Response.redirected) {
            window.location.href = "http://57.128.222.214/WD/end_game.html";
        }
        if (Response.status == 404) {
            console.log("Not new round yet")
        }
        else {
            document.getElementById("tea").hidden = true
            New_Round = true
            console.log(Response.body)
            let Json = Response.json()
            console.log(Json)
            Json.then((json) => {
                //Totally not futureproof !!!
                document.getElementById("C" + "1").textContent = "USA"
                document.getElementById("C" + "1" + "_W").textContent = json.USA
                document.getElementById("C" + "2").textContent = "Poland"
                document.getElementById("C" + "2" + "_W").textContent = json.Poland
                document.getElementById("C" + "3").textContent = "Belarus"
                document.getElementById("C" + "3" + "_W").textContent = json.Belarus
                document.getElementById("C" + "4").textContent = "Netherlands"
                document.getElementById("C" + "4" + "_W").textContent = json.Netherlands
                yValues = json.Eco
                xValues = xValues.slice(0, json.Eco.length)
                graph()
            })
        }
    });
// graph()