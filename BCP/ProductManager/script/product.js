let products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];


function showProduct() {
    let tbProducts = document.getElementById('tbProducts');
    tbProducts.innerHTML = "";
    for (let item of products) {
        tbProducts.innerHTML += `<tr>
                                    <td>${item}</td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-primary" onclick='editProduct("${item}")'>Edit</a>
                                        <a href="javascript:;" class="btn btn-danger" onclick='removeProduct("${item}")'>Remove</a>
                                    </td>
                                </tr>`;
    }
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
    let confirmed = window.confirm(`are you sure to remove product ${name}?`);
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