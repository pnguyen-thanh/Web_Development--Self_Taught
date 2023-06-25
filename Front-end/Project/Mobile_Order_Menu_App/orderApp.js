import { menuArray } from "./data.js";

document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        addItem(e.target.dataset.add);
    } else if (e.target.dataset.remove) {
        removeItem(e.target.dataset.remove);
    } else if (e.target.id === "place-order-btn") {
        paymentProcess();
    } else if (e.target.id === "submit-btn") {
        e.preventDefault();
        completePayment();
    }
});

function addItem(itemId) {
    const itemObj = menuArray.filter(function (item) {
        return parseInt(itemId) === item.id;
    })[0]
    itemObj.quantity += 1;
    render();
}

function removeItem(itemId) {
    const itemObj = menuArray.filter(function (item) {
        return parseInt(itemId) === item.id;
    })[0]
    if (itemObj.quantity <= 0) {
        document.getElementById("remove-item").disabled = true;
    } else {
        itemObj.quantity -= 1;
    }
    render();
}

function completePayment() {
    const userName = document.getElementById("user-name").value;
    const credit = document.getElementById("credit-card-input").value;
    const cvv = document.getElementById("cvv-input").value;
    if (userName && credit && cvv) {
        document.getElementById("user-information").classList.toggle("hidden");
        document.getElementById("order-summary").innerHTML = 
        `
        <div id="good-bye">
            <p>Thanks, ${userName}! Your order is on its ways!</p>
        </div>
        `
    }
}

function paymentProcess() {
    document.getElementById("payment-process").innerHTML =
    `
    <div class="user-information" id="user-information">
        <p id="input-field">Enter card details</p>
        <form id="user-input">
            <input id="user-name" type="text" placeholder="Enter your name" required>
            <input id="credit-card-input" type="text" placeholder="Enter card number" required>
            <input id="cvv-input" type="text" placeholder="Enter CVV" required>
            <button form="user-input" type="submit" id="submit-btn">Pay</button>
        </form>
    </div>
    `
}

function menu() {
    let item = '';
    menuArray.forEach(function(orderItem) {
        item += 
        `
        <div id="item">
            <div id="inner-item">
                <p id="icon">${orderItem.emoji}</p>
                <div id="content">
                    <p id="item-name">${orderItem.name}</p>
                    <p id="ingredients">${orderItem.ingredients}</p>
                    <p id="item-price">$${orderItem.price}</p>
                </div>
            </div>
            <button id="remove-item" type="button" data-remove="${orderItem.id}">-</button>
            <p id="quantity">${orderItem.quantity}</p>
            <button id="add-item" type="button" data-add="${orderItem.id}">+</button>
        </div>
        `
    })
    return item;
}

function paymentDetails() {
    let order = '';
    let orderSummary = '';
    let totalPrice = 0;
    menuArray.forEach(function(item) {
        if (item.quantity > 0) {
            totalPrice += (item.quantity * item.price)
            order += 
            `
            <div id="order-list-container">
                <p id="order-list">${item.name} x ${item.quantity}</p>
                <p id="amount">$${item.price * item.quantity}</p>
            </div>
            `
            orderSummary = 
            `
            <p id="your-order">Your order</p>
            ${order}
            <div id="due-container">
                <p id="due-title">Total price:</p>
                <p id="final-amount">$${totalPrice}</p>
            </div>
            <button id="place-order-btn">Complete order</button>
            `
        } 
    })
    return orderSummary;
}

function render() {
    document.getElementById('menu').innerHTML = menu();
    document.getElementById('order-summary').innerHTML = paymentDetails();
}

render();
