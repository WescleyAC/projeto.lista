class Product {

    constructor() {

        this.id = 1;
        this.arrayProducts = [];
        this.editId = null;
    }

    save() {

        let product = this.readData();

        if (this.validateField(product)) {

            if (this.editId == null) {

                this.addProduct(product);

            } else {

                this.updateDice(this.editId, product)
            }

            


        }

        this.listTable();
        this.cancel();

    }

    listTable() {

        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for (let i = 0; i < this.arrayProducts.length; i++) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_product = tr.insertCell();
            let td_value = tr.insertCell();
            let td_action = tr.insertCell();

            td_id.innerText = this.arrayProducts[i].id;
            td_product.innerText = this.arrayProducts[i].namesproducts;
            td_value.innerText = this.arrayProducts[i].values;


            td_id.classList.add("center")

            let imageEdit = document.createElement("img");
            imageEdit.src = "image/edit.png";
            imageEdit.setAttribute("onclick", "product.editeProduct(" +JSON.stringify(this.arrayProducts[i]) + ")");


            let deleteElement = document.createElement("img");
            deleteElement.src = "image/excluir.png";
            deleteElement.setAttribute("onclick", "product.deleteProduct(" + this.arrayProducts[i].id + ")");

            td_action.appendChild(imageEdit);
            td_action.appendChild(deleteElement);

            console.log(this.arrayProducts)

        }


    }

    addProduct(product) {

        product.values = parseFloat(product.values);

        this.arrayProducts.push(product);
        this.id++;


    }


    updateDice(id, product) {

for (let i = 0; i < this.arrayProducts.length; i++) {
    if (this.arrayProducts[i].id == id)  {
         this.arrayProducts[i].namesproducts = product.namesproducts;
         this.arrayProducts[i].values = product.values;

        }

    }

}

    readData() {

        let product = {}

        product.id = this.id;
        product.namesproducts = document.getElementById("product").value;
        product.values = document.getElementById("value").value;




        return product;

    }

    validateField(product) {

        let menssage = "";

        if (product.namesproducts == "") {

            menssage += " - Informe o nome do produto \n"

        };


        if (product.values == "") {

            menssage += " - Informe o valor do produto \n"

        };

        if (menssage != "") {
            alert(menssage);
            return false;
        }

        return true;



    }

    cancel() {

        document.getElementById("product").value = "";
        document.getElementById("value").value = "";

        document.getElementById("btn1").innerText = "Salvar"
        this.editId = null;

    }

    editeProduct(dados) {

        this.editId = dados.id;

document.getElementById("product").value = dados.namesproducts;
document.getElementById("value").value = dados.values;

document.getElementById("btn1").innerText = "Atualizar";

    }



    

    deleteProduct(id) {

        if (confirm("Deseja deletar o produto número: " +id + " ?")) {

            let tbody = document.getElementById("tbody");

            for (let i = 0; i < this.arrayProducts.length; i++) {
                if (this.arrayProducts[i].id == id) {
                    this.arrayProducts.splice(i, 1);
                    tbody.deleteRow(i);
    
                }
    
            }

        }

    
    }

};

const product = new Product();