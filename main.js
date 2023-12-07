function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = four.value.replace(/\s+/g, "");
	
	
	if (one.value == "for(intx=0;x<=400;x+=100)"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：for(int x=0; x<=400; x+=100)";
	}

	if (two.value == "face(x,30);"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：face(x,30);";
	}

	if (three.value == "voidface(intx,inty)"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：void face(int x, int y)";
	}

	if (four.value == "translate(x,y);"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：translate(x, y);";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);