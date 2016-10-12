var crudApp= document.getElementById("crudApp");
var ment="This is a CRUD exercise using JavaScript";
crudApp.innerHTML = ment;

var app = new function() {
this.x = document.getElementById('products');
this.products = ['Giftwrapper', 'Envelopes', 'Posters', 'Pencil Pads', 'Collage Bookmarks', 'Square Postcards', 'Teacup and Teapot Postcards', 'Buddy Bookmarks', 'Money Envelopes', 'Small colored notebooks'];

this.Count = function(data) {
	var x= document.getElementById('list');
	var name = 'product';
	if (data) {
	if (data > 1) {
	name = 'products';
	}
	x.innerHTML = data + ' ' + name ;
	} else {
	x.innerHTML = 'No ' + name;
	}
	};
	
	
this.displayProducts = function() {
	var data = '';
		if (this.products.length > 0) {
			for (i = 0; i < this.products.length; i++) {
			data += '<tr>';
			data += '<td>' + this.products[i] + '</td>';
			data += '<td><button onclick="app.editProduct(' + i + ')">Edit</button></td>';
			data += '<td><button onclick="app.deleteProduct(' + i + ')">Delete</button></td>';
			data += '</tr>';
			}
	}
	
this.Count(this.products.length);
return this.x.innerHTML = data;
};

this.addProduct = function () {
	x = document.getElementById('add-name');

	var product = x.value;
	if (product) {
	this.products.push(product.trim());
	x.value = '';
	this.displayProducts();
	}
};

this.editProduct = function (item) {
	var x = document.getElementById('edit-name');

	x.value = this.products[item];

	document.getElementById('spoiler').style.display = 'block';
	self = this;
	document.getElementById('saveEdit').onsubmit = function() {

	var product = x.value;
	if (product) {

	self.products.splice(item, 1, product.trim());

	self.displayProducts();

	CloseInput();
	}
	}
};

this.deleteProduct = function (item) {
	this.products.splice(item, 1);
	this.DisplayList();
};

}
app.displayProducts();
function CloseInput() {
document.getElementById('spoiler').style.display = 'none';
}