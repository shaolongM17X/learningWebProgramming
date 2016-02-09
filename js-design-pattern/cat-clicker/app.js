$(function(){
	var model = {
		cats: 
		[
			{
				name: "Saber",
				src: "cat1.jpg",
				count: 0
			},

			{	
				name: "Archer",
				src: "cat2.jpg",
				count: 0
			},

			{
				name: "Lancer",
				src: "cat3.jpg",
				count: 0
			},

			{
				name: "Nevermore",
				src: "cat4.jpeg",
				count: 0
			},

			{
				name:"Excalibar",
				src: "cat5.jpg",
				count: 0
			}
		],

		currentCat: 0
	};

	var octopus = {
		getCats: function() {
			return model.cats;
		},
		
		init: function() {
			view.init();
		},

		setCurrentCatID: function(num){
			model.currentCat = num;
		},

		getCurrentCatID: function() {
			return model.currentCat;
		},

		getCurrentCat: function() {
			return model.cats[model.currentCat];
		},

		increaseCount: function() {
			octopus.getCurrentCat().count += 1;
		}
	};

	var view = {
		init: function() {
			var tabs = $(".tabs");
			var cats = octopus.getCats();
			var htmlStr = '';
			for (var i = 0; i < cats.length; i++) {
				htmlStr += "<a href='#' class='tab' id='"+i+"'>" + cats[i].name + "</a>";
			}
			tabs.html(htmlStr);
			tabs.children().first().toggleClass("is-active");
			octopus.setCurrentCatID(0);
			$(".tab").click(function(){
				var selected = this.id;
				var current = octopus.getCurrentCatID();
				if (current != selected) {
					octopus.setCurrentCatID(selected);
					$(".tabs #"+current).toggleClass("is-active");
					$(".tabs #"+selected).toggleClass("is-active");
					view.render();					
				}
			});

			$("#image").click(function(){
				octopus.increaseCount();
				view.render();
			});

			view.render();
		},

		render: function() {
			var cat = octopus.getCurrentCat();
			$("#image").attr('src', cat.src);
			$("#name_of_cat").text(cat.name);
			$("#count").text(cat.count);
		}
	};

	octopus.init();
});