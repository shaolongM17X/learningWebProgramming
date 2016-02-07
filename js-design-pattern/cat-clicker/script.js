var name_field = document.getElementById("name_of_cat");
var count_field = document.getElementById("count");
var image = document.getElementById("image");
var image_name = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpeg", "cat5.jpg"];
var cat_name = ["Saber", "Archer", "Lancer", "Nevermore", "Excalibar"];
var cat_count = [0, 0, 0, 0, 0];
var current_tab = 1;

for (var i = 0; i < 5; i++) {
	var tab = document.getElementsByClassName("tab")[i];
	tab.addEventListener('click', function(){
		var id = this.id;
		var new_tab = parseInt(id.substring(id.length - 1));
		
		// Toggle is-active class if the selected tab is not current tab
		if (new_tab != current_tab) {
			this.classList.toggle("is-active");
			document.getElementById("cat-image-"+current_tab).classList.toggle("is-active");
			current_tab = new_tab;

			image.src = image_name[current_tab - 1];
			name_field.innerHTML = cat_name[current_tab - 1];
			count_field.innerHTML = cat_count[current_tab - 1];
		}
	});
}

image.addEventListener('click', function(){
	cat_count[current_tab - 1]++;
	count_field.innerHTML = cat_count[current_tab - 1];
});