var goods = {
	"28292": {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn2.iconfinder.com/data/icons/jetflat-fruits/90/002_014_banana_banan_plant_herb_fruit_food-128.png",
		"sklad": "да"   
	},
	"23754" : {
		"name" : "Помидор",
		"cost" : 50,
		"img"  :"https://cdn2.iconfinder.com/data/icons/the-greens/512/Tomato-128.png",
		"sklad": "нет"
	},
	"23764" : {
		"name" : "Арбуз",
		"cost" : 45,
		"img"  :"https://cdn0.iconfinder.com/data/icons/fruits-29/300/fruit_watermellon-128.png",
		"sklad": "да"
	}
};
console.log(goods);
var out = '';
for (var key in goods) {
	out+='Название: '+goods[key].name + '<br>';
	out+='Цена: '+goods[key].cost + '<br>';
	out+='Наличие: '+goods[key].cost + '<br>';
	out+='<img src="'+goods[key].img+'">';
	out+='<hr>';
}
document.getElementById('out').innerHTML = out;