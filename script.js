//creating sections
const calculator = document.querySelector("main")
const log=document.createElement("ul")
document.body.appendChild(log)

const createSecNb = document.createElement("section")
const createSecOp = document.createElement("section")
const createScreen = document.createElement("section")
calculator.appendChild(createSecNb)
calculator.appendChild(createSecOp)
calculator.appendChild(createScreen)

const SecNb = calculator.lastElementChild
const SecOp = calculator.children[1] 
const SecScreen = calculator.firstElementChild

//styling sections
document.style="box-sizing:border-box"
calculator.style = "width:350px; height:400px; border: solid 2px black;"
SecScreen.style = "display:flex; height:110px; width:100%; justify-content:space-between; align-items:center; flex-direction: column;margin-bottom:10px;border:solid black 1px"
SecNb.style = "box-sizing:border-box;display:flex; height:200px; width:100% ; justify-content:flex-start; align-items:space-between; flex-wrap:wrap; padding:10px;"
SecOp.style = "display:flex; height:50px; width:100%; justify-content:space-around; align-items:center"

//creating screen
const text = document.createElement('p')
const history = document.createElement('p')
SecScreen.appendChild(history)
SecScreen.appendChild(text)
const historyscreen = SecScreen.firstElementChild
const screen = SecScreen.lastElementChild
screen.style = "width:300px; height:100px; border:solid 1px;"
historyscreen.style = "width:300px; height:100px; border:solid 1px;"

// Styles
const styleNum = "margin:10px;height:50px; width:70px; border: solid 1px; margin: 5px;"
const styleOp = "height:40px; width:40px; border: solid 1px; margin: 1px;"
const stylep = "height:50px; width:70px; margin:0;padding:0; text-align:center; padding-top:5px; cursor:pointer"
const stylepOp = "height:40px; width:40px; margin:0;padding:0; text-align:center; padding-top:5px; cursor:pointer"
const stylescreen = ""


//initiate screen.value and array of result + nr of operators + historic
let arrayRes = []
let countOp = 0
let arrayOld = ""
let historic = 0

// event on click on Number
const reportNb = (event) => {

    screen.innerText = screen.innerText + event.target.id

}

//event on click on operator
const reportOp = (event) => {
    if (event.target.id == "=") {
        arrayRes.push(screen.innerText)
        arrayOld = arrayOld + screen.innerText + "="
        screen.innerText = ""
        console.log(arrayRes)
        console.log(countOp)
        let index = 0
        let total = 0
        for (let i = 0; i < countOp; i++) {
            if (total == 0) {
                console.log("init")
                console.log(total)
                switch (arrayRes[index + 1]) {
                    case "+":

                        total = parseInt(arrayRes[index]) + parseInt(arrayRes[index + 2])
                        index = index + 3
                        break
                    case "-":

                        total = arrayRes[index] - arrayRes[index + 2]
                        index = index + 3
                        break
                    case "x":

                        total = arrayRes[index] * arrayRes[index + 2]
                        index = index + 3
                        break
                    case "/":

                        total = arrayRes[index] / arrayRes[index + 2]
                        index = index + 3
                        break

                }
            }

            else {
                console.log(arrayRes[index])
                switch (arrayRes[index]) {
                    case "+":

                        total = parseInt(total) + parseInt(arrayRes[index + 1])
                        index = index + 2
                        break
                    case "-":

                        total = total - parseInt(arrayRes[index + 1])
                        index = index + 2
                        break
                    case "x":

                        total = total * parseInt(arrayRes[index + 1])
                        index = index + 2
                        break
                    case "/":

                        total = total / parseInt(arrayRes[index + 1])
                        index = index + 2
                        break
                }
            }
        }

        // arrayOld=arrayOld+"="
        screen.innerText = total
        arrayRes = []
        countOp = ""
        const loglist=document.createElement("li")
        document.body.lastElementChild.appendChild(loglist)
        loglist.innerText=arrayOld+total
    }
    else if (event.target.id == "c") {
        arrayRes = []
        screen.innerText = ""
        countOp = ""
        arrayOld = []

    }
    else {
        // arrayOld=arrayOld+screen.innerText+event.target.id
        arrayRes.push(screen.innerText)
        arrayOld = arrayOld + screen.innerText
        screen.innerText = event.target.id
        arrayRes.push(screen.innerText)
        if (event.target.id == "/" | event.target.id == "x") {
            arrayOld = "(" + arrayOld + ")" + screen.innerText
        }
        else {
            arrayOld = arrayOld + screen.innerText
        }
        screen.innerText = ""
        countOp++
    }
    // arrayOld=arrayOld+screen.innerText
    historyscreen.innerText = arrayOld
    console.log(arrayRes)
    console.log(countOp)
}

//liste of values
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "x", "/", "=", "c"]

//creating buttons
value.forEach(element => {
    const button = document.createElement('div')
    const text = document.createElement('p')
    if (Number.isInteger(element)) {

        console.log("iterate")
        button.className = "number"
        button.style = styleNum
        SecNb.appendChild(button)
        button.appendChild(text)
        text.style = stylep
        text.innerText = element
        text.id = element
        button.addEventListener('click', reportNb)

    }
    else {
        console.log("not int")
        button.id = element
        button.className = "operator"
        button.style = styleOp
        SecOp.appendChild(button)
        button.appendChild(text)
        text.style = stylepOp
        text.id = element
        text.innerText = element
        button.addEventListener('click', reportOp)
    }
})
