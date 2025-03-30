//Graph values
let yValues = [50, 35, 15, 27, 0];
let xValues = [1, 2, 3, 4, 5];

//Support functions

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let Update_Info = (cookie) => {
    console.log("auth");
    console.log(cookie);
    //Send method to check for availiability
    fetch("http://57.128.222.214/WD/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookie
        },
        body: '{update_info} '
    })
        .then((Response) => {
            console.log(Response)
            let json = Response.json()
            json.then((result) => {
                console.log(result)

                //Set received values (Status panel)
                document.getElementById("Invite_code").textContent = result.invite
                document.getElementById("Budget").textContent = result.budget
                document.getElementById("Nuclear_tech").textContent = result.nuclearTech ? "Yes" : "No"
                document.getElementById("Nuclear_bombs").textContent = result.nukeBalls
                document.getElementById("AV_Life_Level").textContent = result.avWealth * 100 + "%"
                document.getElementById("country_name").textContent = result.name1
                //Set received values (Cities)
                let i = 0
                result.city_.forEach(city => {
                    let int_i = i + 1
                    document.getElementById("city_name_" + (int_i * 10 + int_i)).textContent = city.name
                    document.getElementById("city_name_" + int_i).textContent = city.name
                    document.getElementById("city_economy_" + int_i).textContent = city.economic * 100 + '%'
                    document.getElementById("city_wealth_" + int_i).textContent = city.wealth * 100 + "%"
                    document.getElementById("city_income_" + int_i).textContent = city.income
                    document.getElementById("city_shield_" + int_i).textContent = city.shield ? "Yes" : "No"
                    document.getElementById("city_status_" + int_i).textContent = city.currentState ? "City is safe" : "City is destroyed"
                    i++
                });
                i = 0
                //Set received values (Foreign powers)
                result.foreignP.forEach(country => {
                    let int_i = i + 1
                    document.getElementById("San_C_C" + int_i).textContent = country[0]
                    console.log(int_i)
                    document.getElementById("Country" + (int_i * 100 + int_i * 10 + int_i)).value = country[0]
                    document.getElementById("Country" + int_i).textContent = country[0]
                    document.getElementById("Country" + (int_i * 10 + int_i)).textContent = "Sanctions " + country[0]
                    document.getElementById("C1_C" + int_i).textContent = country[1]
                    document.getElementById("C2_C" + int_i).textContent = country[2]
                    document.getElementById("C3_C" + int_i).textContent = country[3]
                    document.getElementById("C4_C" + int_i).textContent = country[4]
                    i++
                })
                //Graph
                console.log("Eco")
                yValues = result.ecologyArC
                xValues = xValues.slice(0,result.ecologyArC.length)
                graph()
                i = 0
                //Set Sanctions Status
                let id = result.id
                console.log("ID =  " + id)
                let int_i = 0
                let writable_i = 0
                result.sanction.forEach(index => {
                    int_i++
                    writable_i++
                    if (int_i != id) {
                        document.getElementById("C" + writable_i + "_S").textContent = index ? "Yes" : "No"
                    }
                    else {
                        writable_i = writable_i - 1
                    }
                })
            })
        })
}

//Role checking
Presedent_check = () => {
    cookie = getCookie("presedent_status");
    console.log(cookie);
    //Send method to check for availiability
    fetch("http://57.128.222.214/WD/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: '{check_president} ' + cookie,
    })
        //Set responce into cookie
        .then((Response) => {
            let json = Response.json()
            if (Response.redirected) {
                window.location.href = "http://57.128.222.214/WD";
            }
            json.then((response) => {
                setCookie("Auth", response.HASH, 1)
                document.getElementById("Invite_code").textContent = response.INVITE
                Update_Info(response.HASH)
            })
        });
    console.log("send");
}

let Player_status = false
let Player_check = () => {
    cookie = getCookie("Player_ID");
    console.log(cookie);
    //API part
    fetch("http://57.128.222.214/WD/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: '{check_player} ' + getCookie("Player_ID"),
    })
        .then((Response) => {
            if (Response.redirected) {
                console.warn("Wrong invite code!")
                window.location.href = "http://57.128.222.214/WD";
            }
            Update_Info(cookie)
            Player_status = true
            document.getElementById("Le_Submit_batton").hidden = "true"
        })
}

////////////////
const form = document.querySelector("#main_form");

async function sendData() {
    // Associate the FormData object with the form element
    let formData = new FormData(form);
    let data_to_send = JSON.stringify(Object.fromEntries(formData))
    let obj = JSON.parse(data_to_send)
    obj["end_round"] = true
    data_to_send = JSON.stringify(obj)
    try {
        const response = await fetch("http://57.128.222.214/WD/api", {
            method: "POST",
            // Set the FormData instance as the request body
            body: data_to_send,
        });
        // console.log(await response.json());
        window.location.href = "http://57.128.222.214/WD/result.html";
    } catch (e) {
        console.error(e);
    }
}

if (Player_status){
    setInterval(() => {
        fetch("http://57.128.222.214/WD/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: '{check_round_p}',
        })
            .then((Response) => {
                if (Response.status == 404) {
                    console.log("Not new round yet")
                }
                else {
                    console.log(Response.body)
                }
            })
    }, 40000)
}

// Take over form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});
///////////////

//Onload part
if (getCookie("Auth").length == 0) {
    if (getCookie("presedent_status") == "No") {
        Player_check();
    }
    else {
        console.log("start president")
        Presedent_check();
    }
}
else {
    let holder = 0
    // console.log(holder)
    if (holder == 0) {
        try {
            // console.log(getCookie("Auth"))
            Update_Info(getCookie("Auth"))
            holder++
        }
        catch { }
        try {
            // console.log(getCookie("Player_ID"))
            Update_Info(getCookie("Player_ID"))
            holder++
        }
        catch { }
    }

}

//Graph
let graph = ()=>
{new Chart("Eco_Chart", {
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
});}