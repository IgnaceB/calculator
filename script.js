//creating sections
const calculator = document.querySelector("main")

const createSecNb = document.createElement("section")
const createSecOp = document.createElement("section")
const createScreen = document.createElement("section")
calculator.appendChild(createSecNb)
calculator.appendChild(createSecOp)
calculator.appendChild(createScreen)

const SecNb = calculator.children[1]
const SecOp = calculator.lastElementChild
const SecScreen = calculator.firstElementChild

//styling sections
SecScreen.style = "display:flex; height:110px; width:50%; justify-content:space-between; align-items:center;margin-bottom:10px"
SecNb.style = "display:flex; height:50px; width:300px ; justify-content:space-between; align-items:center"
SecOp.style = "display:flex; height:50px; width:300px; justify-content:space-between; align-items:center"

//creating screen
const text = document.createElement('p')
SecScreen.appendChild(text)
const screen = SecScreen.firstElementChild
screen.style = "width:300px; height:100px; border:solid 1px;"

// Styles
const styleNum = "height:30px; width:30px; border: solid 1px; margin: 1px;"
const styleOp = "height:30px; width:30px; border: solid 1px; margin: 1px;"
const stylep = "height:30px; width:30px; margin:0;padding:0; text-align:center; padding-top:5px; cursor:pointer"
const stylescreen = ""

//Functions Reporting numbers and operators
//initiate screen.value
screen.value = 0
const reportNb = (event) => {
    if (Number.isInteger(screen.innerText)) {
        screen.innerText = screen.innerText + event.target.id
        screen.value = screen.value + screen.innerText
    }
    {
        screen.innerText = event.target.id
        screen.value = screen.value + screen.innerText
    }
}
const reportOp = (event) => {
    if (event.target.id == "=") {
        let result = []

        let largenumber=""
        let count = 0
        for (let i = 1; i< screen.value.length; i++) {
            console.log(screen.value)
            if (screen.value[i]<9 && i!=screen.value.length-1)  {
                largenumber = largenumber + screen.value[i]
                console.log(largenumber)
            }
            else if (screen.value[i]<9){
                result[count]=screen.value[i]
            }
            else {
                result[count]=largenumber
                count++
                largenumber=0
                result[count]=screen.value[i]
                count++
            }
        }
        let NbOp=0
        for(let i=0; i<result.length;i++){
            if (Integer.parseInt(result[i])!=NaN){
                NbOp++
            }
        }

         console.log(NbOp)
    }
    else {
        screen.innerText = event.target.id
        screen.value = screen.value + event.target.id
        console.log(screen.value)

    }
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
        text.style = stylep
        text.id = element
        text.innerText = element
        button.addEventListener('click', reportOp)
    }
})
