function num_sys(x) {
    if (x !== 0 || "")
        x = x.replace(/\./g, "");
        return x;
}

function num_id(number) {
    if (number !== null)
        var number_string = number.toString(),
            split = number_string.split("."),
            remainder = split[0].length % 3,
            IDR = split[0].substr(0, remainder),
            thousand = split[0].substr(remainder).match(/\d{1,3}/gi);

        if (thousand)
            separator = remainder ? "." : "";
            IDR += separator + thousand.join(".");

        return IDR;
}

function calculate() {
    let checkoutPrice = document.querySelectorAll('._1MS3t2');
    let total = 0;

    for (let i = 0; i < checkoutPrice.length; i++) {
        total += parseInt(num_sys(checkoutPrice[i].textContent.slice(2)));
    }

    const message = 'Your total shopping is IDR ' + num_id(total) + ' from ' + checkoutPrice.length + ' orders';
    alert(message);
}

let btn = document.createElement("button");
btn.innerHTML = 'Calculate';
btn.type = 'button';
btn.style = "position: fixed; bottom: 1rem; left: 1rem;";
btn.onclick = function () {
    calculate();
};
document.body.appendChild(btn);