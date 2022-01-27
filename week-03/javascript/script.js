function hideButton() {
    const button = document.getElementById("click-me")

    button.hidden = true
    setTimeout(() => {
        button.hidden = false
    }, 2000)
}

function changeBackgroundColor() {


    const button = document.getElementById("click-me")
    const buttons = document.querySelectorAll(".buttons")

    console.log(buttons)

    console.log(button.style.backgroundColor)

    if(button.style.backgroundColor === "red") {
        console.log(button.style.backgroundColor)
        button.style.backgroundColor = "#00FF00"

    } else {

        button.style.backgroundColor = "red"
        console.log(button.style.backgroundColor)
    }


}
