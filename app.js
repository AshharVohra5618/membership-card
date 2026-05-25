

function Users(a, b, c) {
    this.name = a;
    this.amount = Number(b);   // string se number
    this.date = new Date(c);   // input date ko Date object
    this.active = false;
}

Users.prototype.plan = function () {

let currentDate = new Date();
    let inputDate = this.date; // ✅ user ki date

    // difference in milliseconds
    let diffTime = inputDate - currentDate;

    // convert into days
    let diffDays = diffTime / (1000 * 60 * 60 * 24);
    
    let card = document.getElementById("member-card");

    if (diffDays <= 31 && diffDays >= 0) {
        alert("✅ valid");
         card.style.display = "none";
    } else{
        alert("❌ not valid");
        card.style.display = "block";

        if (this.amount < 10){
    alert('membership must be activate at least 10$')
    card.style.display = "none"
}else if (this.amount > 9 && this.amount < 20){
    alert('Basic plan successfully acive to your account, now your curent balance is ' ,this.amount - 10)
    card.style.display = "block"
}else if (this.amount > 20 && this.amount < 30){
    alert('pro plan activate and your current balance is' ,this.amount-20 )
    card.style.display = "block"
}else if (this.amount > 30){
    alert('pro+ plan activate and your current balance is' ,this.amount-30)
    card.style.display = "block"
}
} 
}

function checkValidate() {
    var get_name = document.getElementById('name').value;
    var get_amount = document.getElementById('amount').value;
    var get_date = document.getElementById('date').value;
    document.querySelector('.name').textContent = get_name;
    document.querySelector('.amount').textContent = get_amount;
    document.querySelector('.date').textContent = get_date;
    var user1 = new Users(get_name, get_amount, get_date);

    user1.plan();
}


