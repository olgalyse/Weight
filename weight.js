var height = prompt("Введите ваш рост в метрах");
var weight = prompt("Введите ваш вес в килограммах");
var age = prompt("Введите ваш возраст");

var bodyWeightIndex = weight / (height * height);
var groupNumber;

if(age >= 18 && age <= 25){
	groupNumber = 1;
} else if (age > 25 && age <= 46){
	groupNumber = 2;
} else {
	groupNumber = 3;
}

if(groupNumber === 1 && bodyWeightIndex < 17.5){
	alert("Слегка снижен, неопасно для здоровья");
} else if(groupNumber === 1 && bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5){
	alert("Нормальный");
} else if (groupNumber === 1 && bodyWeightIndex >= 19.5 && bodyWeightIndex < 23){
	alert("Излишний");
} else if (groupNumber === 1 && bodyWeightIndex >= 23 && bodyWeightIndex < 27.5){ 
	alert("Излишний");
} else if (groupNumber === 1 && bodyWeightIndex >= 27.5 && bodyWeightIndex < 30){
	alert("Ожирение 1 степени");
}else if (groupNumber === 1 && bodyWeightIndex >= 30 && bodyWeightIndex < 35){
	alert("Ожирение 2 степени");
} else if (groupNumber === 1 && bodyWeightIndex >= 35 && bodyWeightIndex < 40){
	alert("Ожирение 3 степени");
} else if (groupNumber === 1 && bodyWeightIndex >= 40){
	alert("Ожирение 4 степени");
} else if(groupNumber === 2 && bodyWeightIndex < 18){
	alert("Слегка снижен, неопасно для здоровья");
} else if(groupNumber === 2 && bodyWeightIndex >= 18 && bodyWeightIndex < 20){
	alert("Нормальный");
} else if (groupNumber === 2 && bodyWeightIndex >= 20 && bodyWeightIndex < 26){
	alert("Излишний");
} else if (groupNumber === 2 && bodyWeightIndex >= 26 && bodyWeightIndex < 28){
	alert("Излишний");
} else if (groupNumber === 2 && bodyWeightIndex >= 28 && bodyWeightIndex < 31){
	alert("Ожирение 1 степени");
} else if (groupNumber === 2 && bodyWeightIndex >= 31 && bodyWeightIndex < 36){
	alert("Ожирение 2 степени");
} else if (groupNumber === 2 && bodyWeightIndex >= 36 && bodyWeightIndex < 41){
	alert("Ожирение 3 степени");
} else if (groupNumber === 2 && bodyWeightIndex >= 41){
	alert("Ожирение 4 степени");
} else if (groupNumber === 3){
	alert("Нет данных для вашего возраста");
}