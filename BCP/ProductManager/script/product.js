let products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];
var increment = 1;

function Phone(n, m, p, c) {
    this.id = increment++;
    this.name = n;
    this.manufactory = m;
    this.price = p;
    this.colors = c;
    this.printColor = function() {
        let show = "<ul>"
        for (let i = 0; i < this.colors.length; i++) {
            show += `<li>${this.colors[i]}</li>`
        }
        show += "</ul>"
        return show;
    }
    this.showPrice = function() {
        return parseInt(this.price).toLocaleString('vn-VN', { style: 'currency', currency: 'vnd' });
    }
}
let sony = new Phone("Sony Xperia", "Jappan", 2000000, ["Red", "Gray", "Black"]);
let sumsung = new Phone("Samsung Galaxy", "Korea", 2500000, ["Red", "Gray", "Black"]);
let nokia = new Phone("Nokia 6", "Poland", 2000000, ["Red", "Gray", "Black"]);
// let sony = {
//     name: "Sony Xperia",
//     manufactory: "Jappan",
//     price: 2000000,
//     colors: ["Red", "Gray", "Black"],
//     printColor: function() {
//         return this.color.join("-");
//     }
// }

// let sumsung = {
//     name: "Samsung Galaxy",
//     manufactory: "Korea",
//     price: 2500000,
//     colors: ["Red", "Gray", "Black"],
//     printColor: function() {
//         return this.color.join("-");
//     }
// }

// let nokia = {
//     name: "Nokia 6",
//     manufactory: "Poland",
//     price: 2500000,
//     colors: ["Red", "Gray", "Black"],
//     printColor: function() {
//         return this.color.join("-");
//     }
// }
let productList = [sony, sumsung, nokia];

function showProduct() {
    let tbProducts = document.getElementById('tbProducts');
    tbProducts.innerHTML = "";
    for (let item of productList) {
        tbProducts.innerHTML += `<tr id='tr${item.id}'>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td>${item.manufactory}</td>
                                    <td>${item.showPrice()}</td>
                                    <td>${item.printColor()}</td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-primary" onclick='inlineEdit("${item.id}")'>InlineEdit</a>
                                        <a href="javascript:;" class="btn btn-primary" onclick='editProduct("${item.name}")'>Edit</a>
                                        <a href="javascript:;" class="btn btn-danger" onclick='removeProduct("${item.name}")'>Remove</a>
                                    </td>
                                </tr>`;
    }
}


function revertPrice(currency) {
    return currency.split('₫')[1].replace(/\,/g, '');
}

function inlineEdit(id) {
    id = parseInt(id);
    let tbrow = document.getElementById(`tr${id}`);
    let tbnName = tbrow.children[5].children[0];
    if (tbnName.innerHTML === 'InlineEdit') {

        for (let i = 1; i < tbrow.children.length - 2; i++) {
            tbrow.children[i].contentEditable = true;
            if (i == 3) {
                tbrow.children[i].innerHTML = revertPrice(tbrow.children[i].innerHTML);
            }
            tbrow.children[i].classList.add('inputStyle');
        }
        tbnName.innerHTML = 'Update';
    } else {
        tbrow.contentEditable = false;
        var data = [];
        for (let i = 1; i < tbrow.children.length - 2; i++) {
            tbrow.children[i].classList.remove('inputStyle');
            data[i - 1] = tbrow.children[i].innerHTML;
        }
        tbnName.innerHTML = 'InlineEdit';
        let product = find(id);
        product.name = data[0];
        product.manufactory = data[1];
        product.price = data[2];
        productList[id - 1] = product;
        showProduct();
    }
}

function find(id) {
    for (let p of productList) {
        if (p.id === id) {
            return p;
        }
    }
}

function createProduct() {
    let product = new Phone("IP6s", "China", 3500000, ["gold", "gray", "silve"]);
    productList.push(product);
    showProduct();
}

function addProduct() {
    // b1: check product name not null or empty
    // b2: product name is not existed
    // b3: clear unnesesary white space
    // b4: format productname
    let productName = document.getElementById("productName").value;
    if (isNullOrEmpty(productName)) {
        window.alert(`product name is required`);
        return;
    }
    productName = clearWhiteSpace(productName);
    if (!isProductExists(productName)) {
        products.push(productName);
        showProduct();
    } else {
        window.alert(`product name ${productName} is exists`);
    }
}

function clearWhiteSpace(str) {
    str = str.trim();
    str = str.toLowerCase();
    let chars = str.split('');
    chars[0] = chars[0].toUpperCase();
    for (let i = 0; i < chars.length - 1; i++) {
        while (chars[i] == ' ' && chars[i + 1] == " ") {
            chars.splice(i, 1);
        }
        if (chars[i] == ' ' && chars[i + 1] != " ") {
            chars[i + 1] = chars[i + 1].toUpperCase();
        }
    }
    return chars.join('');
}

function isNullOrEmpty(str) {
    return str == null || str.trim() == '';
}


function isProductExists(productName) {
    return products.indexOf(productName) != -1;
}


function removeProduct(name) {
    let confirmed = window.confirm(`Are you sure to remove product ${name}?`);
    if (confirmed) {
        let index = products.indexOf(name);
        products.splice(index, 1);
        showProduct();
    }
}

function editProduct(name) {
    let newName = window.prompt('Enter product name: ');
    if (isNullOrEmpty(newName)) {
        window.alert(`product name is required`);
        return;
    }
    newName = clearWhiteSpace(newName);
    if (newName == name) return;
    if (!isProductExists(newName)) {
        let index = products.indexOf(name);
        products[index] = newName;
        showProduct();
        window.alert(`product name changed from ${name} to ${newName}`);
    } else {
        window.alert(`product name ${newName} is exists`);
    }
}

function documentReady() {
    showProduct();
}

documentReady();