var initialCats = [
	{
		name: "Saber",
		src: "cat1.jpg",
		count: 0,
		nickNames: ["吾王", "sb"],
	},

	{	
		name: "Archer",
		src: "cat2.jpg",
		count: 0,
		nickNames: ["吾王", "sb"],
	},

	{
		name: "Lancer",
		src: "cat3.jpg",
		count: 0,
		nickNames: ["吾王", "sb"],
	},

	{
		name: "Nevermore",
		src: "cat4.jpeg",
		count: 0,
		nickNames: ["吾王", "sb"],
	},

	{
		name:"Excalibar",
		src: "cat5.jpg",
		count: 0,
		nickNames: ["吾王", "sb"],
	},

	{
		name: "zhazha",
		src: "cat6.jpg",
		count: 0,
		nickNames: ["吾王", "sb"],
	}
];	

var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.level = ko.observable("lv0");
	this.count = ko.observable(data.count);
	this.url = ko.observable(data.src);
	this.nickNames= ko.observableArray(data.nickNames);
};

var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray();
	initialCats.forEach(function(cat) {
		self.catList.push(new Cat(cat));
	});

	this.switchCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
					
	this.currentCat = ko.observable(this.catList()[0]);
	this.clickCount = function() {
		this.count(this.count() + 1);
		if (this.count() % 10 == 0) {
			this.level("lv" + this.count()/10);
		}
	};
};



ko.applyBindings(new ViewModel());