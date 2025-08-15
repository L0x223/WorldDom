

const costNuke = 150
const costInvest = 150
const costShield = 300
const countCities = 4
const countCounties = 4
const countYear = 6
const costEcology = 200
const Tech = 500
const CONSTincome = 250
let ecology = 0.8
let ecologyAr = []
let country_ = [4]
let alive = true

class city {
    currentState = true
    invest = false
    income = CONSTincome 

    constructor(name, economic, shield) {
        this.name = name
        this.economic = economic
        this.wealth = (3*this.economic + 2*ecology)/5
        this.shield = shield
        this.income = Math.round(CONSTincome*this.wealth)
    }

    putData(economic, wealth, shield) {
        this.economic = economic
        this.wealth = wealth
        this.shield = shield
    }
    getIncome()
    {
        this.income = Math.round(CONSTincome*this.economic)
        return this.income
    }
    getWealth() {
        this.wealth = Math.round(((3*this.economic + 2*ecology)/5)*100)/100
        return this.wealth  
    }

    getShield() {
        if (this.currentState) { this.shield = true
         }
    }
    investFunc() {
        if (this.currentState) {
            this.invest = true
        }
    }
    investFuncReverse() {
        this.invest = false
    }

}




const crypto = require("crypto");
const { match } = require("node:assert")


class country {
    HASH = "fddfsdfdsf";
    invite = crypto.randomBytes(7).toString('hex');
    isSpare = true
    budget = 500
    avWealth
    nuclearTech = true ////////////////////////////////////////////////////////////////
    end_ROUND = false
    nukeBalls = 4///////////////
    city_ = []
    sanction = []
    foreignP = []
    ecologyArC = null
    constructor(id, name1, cname1, cname2, cname3, cname4) {
        this.id = id
        this.name1 = name1
        this.city_[0] = new city(cname1, 0.6, false)
        this.city_[1] = new city(cname2, 0.6, false)
        this.city_[2] = new city(cname3, 0.6, false)
        this.city_[3] = new city(cname4, 0.6, false)
        for (let i = 0; i < countCounties; i++) { this.sanction[i] = false }
        this.avWealth = this.getAvWealth()
    }
    getAvWealth() {
        let tempWealth = 0
        for (let i = 0; i < countCities; i++) {
            tempWealth += this.city_[i].getWealth()
        }
        this.avWealth = Math.round((tempWealth/4)*100)/100
        return Math.round((this.avWealth*100))/100
    }
    changeNukeTech() {
        if (this.budget >= Tech) {
            this.budget -= Tech
            this.nuclearTech = !this.nuclearTech
            ecology -=0.1
        }
    }
    creatBomb(count) {
        if (this.nuclearTech && (this.budget >= costNuke * count)) {
            this.budget -= costNuke * Number(count)
            ecology -= 0.05
            this.nukeBalls += Number(count)
        }
     this.nukeBalls
    }
    checkShield() {
        let shield_count = 0
        for (let i = 0; i < countCities; i++) {
            if (this.city_[i].getShield && this.city_[i].currentState) { shield_count++ }
        }
        if (this.budget >= costShield * shield_count) {
            this.budget -= costShield * shield_count
        }
        else {
            for (let i = 0; i < countCities; i++) {
                this.city_[i].shield = false
            }
        }
    }
    checkInvest_budget() {
        let sanc_count = 0
        let tempCount = 0
        for (let i = 0; i < countCities; i++) {
            if (this.city_[i].invest && this.city_[i].currentState) { tempCount++ }
        }
        for (let i = 0; i < countCounties; i++) {
            if (this.sanction[i]) { sanc_count++ }
        }


        if (this.budget >= costInvest * tempCount) {
            this.budget -= costInvest * tempCount
            for (let m = 0; m < countCities; m++) {
                if (this.city_[m].invest) {
                    if (this.city_[m].economic >= 0.8) {
                        this.city_[m].economic = 1
                    }
                    else {
                        this.city_[m].economic += 0.2
                    }
                }
               ///////    this.budget += this.city_[m].income * (this.city_[m].economic) * (1 - 0, 15 * sanc_count)
            }
        }
        {
            for (let m = 0; m < countCities; m++) {
                this.city_[m].investFuncReverse
            }
        }
        for(let m = 0; m < countCities; m++){
            this.budget += this.city_[m].getIncome() * (this.city_[m].economic) * (1 - (0,15 * sanc_count))}
    }


    end_ROUND_f() {
        this.end_ROUND = true
    }

    ecologyInvest() {
        if (this.budget >= costEcology){
            ecology += 0.2
            this.budget -=costEcology
            if(ecology > 1)
            ecology = 1
            }
    }
    
   // defeatCond() {
// if (ecology <= 0)
   //         alive = false
  //  }

    nextTurn() {
        this.checkInvest_budget()
        this.checkShield()
        this.end_ROUND = false
        console.log("NEXT")
    }
}

class CODES {

    constructor(HASH, INVITE) {
        this.HASH = HASH
        this.INVITE = INVITE
    }
}


country_[0] = new country(0, 'USA', 'Washington', 'New-York', 'Boston', 'Manhattan')
country_[1] = new country(1, 'Belarus', 'Minsk', 'Grodno', 'Baranovichi', 'Brest')
country_[2] = new country(2, 'Poland', 'Warsaw', 'Poznan', 'Gdansk', 'Wroclaw')
country_[3] = new country(3, 'Netherlands', 'Amsterdam', 'The Hague', 'Rotterdam', 'Utrecht')


class processor {
    year = 1
    ecology_years = []
    country_JSON(eco)
    {
        let wealthARR = []
        let CountryARR = []
        for(let i = 0; i < countCounties; i++)
        {
            wealthARR[i] = country_[i].getAvWealth()*100
            if(wealthARR[i] < 0)
                wealthARR[i] = 0
            CountryARR[i]= country_[i].name1
        }
        for(let i = 1; i < countCounties; i++)
            {
                if(wealthARR[i-1]< wealthARR[i]){
                    let temp = wealthARR[i-1]
                wealthARR[i-1] = wealthARR[i]
                wealthARR[i] = temp
                temp = CountryARR[i-1]
                CountryARR[i-1]= CountryARR[i]
                CountryARR[i] = temp
                }
            }
            //////////////////
            console.log(CountryARR + wealthARR)
            //////////////////////////////////////////
            let a = '{'
            for(let i = 0; i < countCounties - 1; i++)
                {
                    a += '"'
                    a += CountryARR[i]
                    a += '"'
                    a+= ":"
                    a += '"'
                    a += wealthARR[i]
                    a += '"'
                    a += ','
                }
                a += '"'
                a += CountryARR[ countCounties - 1]
                a += '"'
                a+= ":"
                a += '"'
                a += wealthARR[ countCounties - 1]
                a += '"'
                a += ','
                a += '"Eco":'
                a += JSON.stringify(eco)
                 a += '}'
                 //////////////////
                 return a;
    }

    updateECO() {
        for(let i = 0; i< countCounties; i++)
            country_[i].ecologyArC = ecologyAr
    }
    constructor() {
        ecologyAr[0] = ecology*100
        this.updateECO() 
    }

    nextRound(){
        if(this.year <= countYear){
      
        for(let i = 0; i < countCounties; i++)
        {
            country_[i].nextTurn()
        }
        if(ecology < 0){ecology = 0}
    ecologyAr[this.year++] = Math.round(ecology*100)
    this.updateECO() 
    this.defeatCond()
    return 0
}
///////////////////DODELATTTT///////////////////////////
    }

//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

    foreignP_m() {
        for (let i = 0; i < countCounties; i++) {
            for (let j = 0; j < countCities - 1; j++) {
                country_[i].foreignP[j] = []
            }
        }

        for (let i = 0; i < countCounties; i++) {
            let a = 0
            for (let j = 0; j < countCounties; j++) {
                if (i == j) {
                    a = 1
                }
                else {

                    country_[i].foreignP[j - a][0] = country_[j].name1
                    for (let k = 0; k < countCities; k++) {
                        country_[i].foreignP[j - a][k + 1] = country_[j].city_[k].name
                    }
                }
            }
        }
    }
    sanctionFunc(id_sender, id_receiver) {
        country_[id_receiver].sanction[id_sender] = !country_[id_receiver].sanction[id_sender]
    }
    ////////////////////////////////////////
    nukeStrike(id_attak, id_defend, id_city) {
        console.log("!!!!!!!!!!STRIIIIKE!!!!!!!!!!"
            +"\n"+ id_attak +id_defend +id_city + "\n"+
            "!!!!!!!!!!STRIIIIKE!!!!!!!!!!"
        )
        if(country_[id_attak].nukeBalls > 0 ){
        if ( !country_[id_defend].city_[id_city].shield) {
            country_[id_defend].city_[id_city].currentState = false
            if(country_[id_defend].city_[id_city].economic >= 0.4)
            country_[id_defend].city_[id_city].economic = -0.4
            else { country_[id_defend].city_[id_city].economic = 0}
        }
        else { country_[id_defend].city_[id_city].shield = false }
        country_[id_attak].nukeBalls--
        ecology -= 0.1}
    }

    defeatCond() {
        if (ecology <= 0)
            alive = false
    }
    /////////
    winCond() {

    }
    ////////////////////////////////
}



/////////////////////////////////////////////////////////////////////////////////////////////////
{
    function makeHash(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        var Hashes = require('jshashes')

        var SHA1 = new Hashes.SHA256().b64(result)
        return SHA1.slice(5);
    }
}

const http = require('node:http');
proc = new processor()
proc.foreignP_m();
/////////methods////////////////
{
    function method_Json_country(body) {
        let match = body;
        match = match.replace(/\"HASH":.+?\,/g, "")
        match = match.replace(/\"isSpare":.+?\,/g, "")
        match = match.replace(/\"end_ROUND:.+?\,/g, "")
        return match
    }
    function method_cookie(body) {
        let match;
        const regex = /Auth=.*/g;
        match = regex.exec(body)
        if (match != null) {
            match[0] = match[0].replace(/Auth=/g, "")
            return match[0]
        }
        return 0;
    }
    function method_Invite(body) {
        const regex1 = /Player_ID=.*/g;
      let  match = regex1.exec(body)
        if (match != null) {
            match[0] = match[0].replace(/Player_ID=/g, "")
            match[0] = match[0].replace(/;/g, "")
            
            return match[0]
        }
        return 0
    }
    function method_d(body) {
        let match;
        const regex = /{([^}]+)}/g;
        match = regex.exec(body)
        if (match != null) {
            if (match.length >= 2) {
                return match[1]
            }
        }


        return 404

    }

    function method_n(chunk)
    {
        let match
        const r = /\d+/;
        match = r.exec(chunk)
        if (match != null) {
            if (match[0] - 1 < 4 && match[0] > 0) {
                return match[0] - 1
            }
            else return 404;
        }
        else return 404;
    }
    function method_i(chunk) {
        let match
        const r = /} .*/;
        match = r.exec(chunk)
        if (match != null) {
            match[0] = match[0].replace(/} /g, "")
            return match[0]
        }
        else
            return null
    }

function insane(data, request)
{
    function ebat(request){
        for(let i = 0; i < countCounties; i++)
        {
            if(method_cookie(request.headers.cookie) == country_[i].HASH){
                return i;
            }
        }
    }
    let i = ebat(request)

    
    function NameToID(data)
    {
        data = JSON.parse(data)
        let a = []
        let o = 0
        for(let j = 0; j < countCounties; j++ )
        {
            if(data.Country1 == country_[j].name1)
                {
                    a[0]= country_[j].id
                } 
                if(data.Country2 == country_[j].name1)
                    {
                        a[1]= country_[j].id
                    } 
                    if(data.Country3 == country_[j].name1)
                        {
                            a[2]= country_[j].id
                        } 
        }
        return a;
    }
    let IDIS = NameToID(data)

    console.log(IDIS)

    data = JSON.parse(data);

    try{country_[i].creatBomb(data.Build_bombs_number)}
    catch{}

   return{
    end_round: data?.end_round == true ? country_[i].end_ROUND_f() : null,
     /////////////////////////////////////////////////////////////////////////////////////
    city_1_invest: data?.city_1_invest == "on" ? country_[i].city_[0].investFunc() : null,
    city_2_invest: data?.city_2_invest == "on" ? country_[i].city_[1].investFunc() : null,
    city_3_invest: data?.city_3_invest == "on" ? country_[i].city_[2].investFunc() : null,
    city_4_invest: data?.city_4_invest == "on" ? country_[i].city_[3].investFunc() : null,
    city_1_shield: data?.city_1_shield == "on"  ? country_[i].city_[0].getShield() : null,
    city_2_shield: data?.city_2_shield == "on"  ? country_[i].city_[1].getShield() : null,
    city_3_shield: data?.city_3_shield == "on"  ? country_[i].city_[2].getShield() : null,
    city_4_shield: data?.city_4_shield == "on"  ? country_[i].city_[3].getShield() : null,
    Ecology_program: data?.Ecology_program == "on"  ? country_[i].ecologyInvest() : null,
    Nuclear_technology: data?.Nuclear_technology == "on"  ? country_[i].changeNukeTech() : null,
    C1_Country1_S: data?.C1_Country1_S == "on"  ? proc.nukeStrike(i, IDIS[0], 0 ) : null,
    C2_Country1_S: data?.C2_Country1_S == "on"  ? proc.nukeStrike(i, IDIS[0], 1 ) : null,
    C3_Country1_S: data?.C3_Country1_S == "on"  ? proc.nukeStrike(i, IDIS[0], 2 ) : null,
    C4_Country1_S: data?.C4_Country1_S == "on"  ? proc.nukeStrike(i, IDIS[0], 3 ) : null,
    ////////////////////////////////////////////////////////////////////////////////////
    C1_Country2_S: data?.C1_Country2_S == "on"  ? proc.nukeStrike(i, IDIS[1], 0 ) : null,
    C2_Country2_S: data?.C2_Country2_S == "on"  ? proc.nukeStrike(i, IDIS[1], 1 ) : null,
    C3_Country2_S: data?.C3_Country2_S == "on"  ? proc.nukeStrike(i, IDIS[1], 2 ) : null,
    C4_Country2_S: data?.C4_Country2_S == "on"  ? proc.nukeStrike(i, IDIS[1], 3 ) : null,
    ////////////////////////////////////////////////////////////////////////////////////
    C1_Country3_S: data?.C1_Country3_S == "on"  ? proc.nukeStrike(i, IDIS[2], 0 ) : null,
    C2_Country3_S: data?.C2_Country3_S == "on"  ? proc.nukeStrike(i, IDIS[2], 1 ) : null,
    C3_Country3_S: data?.C3_Country3_S == "on"  ? proc.nukeStrike(i, IDIS[2], 2 ) : null,
    C4_Country3_S: data?.C4_Country3_S == "on"  ? proc.nukeStrike(i, IDIS[2], 3 ) : null,
    /////////////////////////////////////////////////////////////////////////////////////
    San_Country1_C: data?.San_Country1_C == "on"  ? proc.sanctionFunc(i, IDIS[0]) : null,
    San_Country2_C: data?.San_Country2_C == "on"  ? proc.sanctionFunc(i, IDIS[1]) : null,
    San_Country3_C: data?.San_Country3_C == "on"  ? proc.sanctionFunc(i, IDIS[2]) : null
};
}

    function API_METHOD(body, response, request) {
        for(let i = 0; i < countCounties; i++){
        if(method_cookie(request.headers.cookie) == country_[i].HASH){
        try
        {
            let p = JSON.parse(body)
            insane(body,request)
        }
        catch { 
        }}}

        if (method_d(body) != 404) {
            switch (method_d(body)) {
                case 'check_president': {
                    if (method_n(body) != 404) {
                        if (country_[method_n(body)].isSpare) {
                            country_[method_n(body)].isSpare = false
                            i = makeHash(10)//can do it better
                            country_[method_n(body)].HASH = i
                            codes = new CODES(country_[method_n(body)].HASH, country_[method_n(body)].invite)
                            response.end(JSON.stringify(codes))
                            break;
                        }
                        else
                            response.writeHead(302, {
                                'Location': IP_LOC
                                //add other headers here...
                            });
                        response.end();
                    }
                    else
                        response.writeHead(404, {
                            'Location': IP_LOC
                            //add other headers here...
                        });
                    break;
                }
                case 'check_player': {
                    for (let i = 0; i < countCounties; i++) {
                        if (method_i(body) == country_[i].invite && !country_[i].isSpare) {
                            response.writeHead(200, {
                                'Location': IP_LOC
                            })
                            response.end()
                            break;
                        }
                    }
                    response.writeHead(302, {
                        'Location': IP_LOC
                    })
                    response.end()
                    break;
                }
                case 'update_info': {
                    for (let i = 0; i < countCounties; i++) {

                        if ((method_cookie(request.headers.cookie) == country_[i].HASH
                            || method_Invite(request.headers.cookie) == country_[i].invite) 
                            && !country_[i].isSpare) {
                            response.end(method_Json_country(JSON.stringify(country_[i])))
                            break;
                        }
                    }
                    response.writeHead(404, {
                        'Location': IP_LOC
                    });
                    response.end();
                    break;

                }
                case 'check_round':{
                    if(!alive)
                    {
                        response.writeHead(302, {
                            'Location': IP_LOC
                        });
                    }
                    else if(year == countYear)
                    {
                        response.end(proc.CountryARR[0])
                    }
                    if(teaPot)
                        {response.end( proc.country_JSON(ecologyAr))}
                    
                    break;
                    
                }
                default: {
                    console.log(body)
                    response.writeHead(404, {
                        'Location': IP_LOC
                    });
                    response.end();
                }
                console.log(body)
            }
        }
        else {
            response.writeHead(404, {
                'Location': IP_LOC
            });
            response.end();
        }
    }
}


/////////methods/////////////////

let teaPot = false 

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            {
                API_METHOD(body, response, request);
            }
            body = null;
        })
        .on('error', err => {
            console.log("\t" + 'error\n');
            console.error(err.stack);
        }).on('connection', (stream) => {
            console.log("\t" + 'someone connected!');
        });

    
    let red = 0;   
    for(let i = 0; i < countCounties; i ++)
    {
        if(country_[i].end_ROUND)
        {
            red++
        }
    }
    console.log(red)
    if(red == countCounties)
    {
        console.log("THE EEEEND")
        let tempRound = proc.nextRound()
        if( tempRound != 0){
            response.writeHead(404, {
                'Location': IP_LOC
            });
            response.end();
        }
        else{
        teaPot = !teaPot 
        red = 0
        response.end(proc.country_JSON(ecologyAr))
        setTimeout(() => {
            teaPot = !teaPot
        }, 1200000);}//120000
    }

}).listen(2230, "127.0.0.1");

const IP_LOC = 'http://3.85.193.131/'
