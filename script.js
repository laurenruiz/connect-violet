
//const button = document.getElementById('post-btn');

/*button.addEventListener('click', async _ => {
  readResults();
  //var name = document.getElementById("post-btn");
    button.innerHTML = person;
  var pic = document.getElementById("womanImage");
    var source = "";
    pic.src = source.replace('90x90', '225x225');
  
  var text = document.getElementById("womanText");
    text.innerHTML = desc;
});*/

const q1answer=0;
let q2answer=0;
let q3answer=0;
let q4answer=0;
let q6answer=0;
let q7answer=0;
let q8answer=0;
let q9answer=0;
const person = 'person';
const image = '';
const desc = '';
// lauren code from here

function result1()
{
  answer1 = "";
  if(document.getElementById('q1a1').checked)
	{	
    answer1= 3 ;
	}
	if(document.getElementById('q1a2').checked)
	{	answer1=1;
	}
	if(document.getElementById('q1a3').checked)
	{	answer1=-1;
	}
  if(document.getElementById('q1a4').checked)
	{	answer1=-3;
  }
  return answer1;
}
function result2()
{
  answer2 = "";
  if(document.getElementById('q2a1').checked)
	{	
    answer2= 3 ;
	}
	if(document.getElementById('q2a2').checked)
	{	answer2=1;
	}
	if(document.getElementById('q2a3').checked)
	{	answer2=-1;
	}
  if(document.getElementById('q2a4').checked)
	{	answer2=-3;
  }
  return answer2;
}
function result3()
{
  answer3 = "";
  if(document.getElementById('q3a1').checked)
	{	
    answer3= 3 ;
	}
	if(document.getElementById('q3a2').checked)
	{	answer3=1;
	}
	if(document.getElementById('q3a3').checked)
	{	answer3=-1;
	}
  if(document.getElementById('q3a4').checked)
	{	answer3=-3;
  }
  return answer3;
}

function result4()
{
  answer4 = "";
  if(document.getElementById('q4a1').checked)
	{	
    answer4= 3 ;
	}
	if(document.getElementById('q4a2').checked)
	{	answer4=1;
	}
	if(document.getElementById('q4a3').checked)
	{	answer4=-1;
	}
  if(document.getElementById('q4a4').checked)
	{	answer4=-3;
  }
  return answer4;
}

function result5()
{
  answer5 = "";
  if(document.getElementById('q5a1').checked)
	{	
    answer5= 3 ;
	}
	if(document.getElementById('q5a2').checked)
	{	answer5=1;
	}
	if(document.getElementById('q5a3').checked)
	{	answer5=-1;
	}
  if(document.getElementById('q5a4').checked)
	{	answer5=-3;
  }
  return answer5;
}
function result6()
{
  answer6 = "";
  if(document.getElementById('q6a1').checked)
	{	
    answer6= 3 ;
	}
	if(document.getElementById('q6a2').checked)
	{	answer6=1;
	}
	if(document.getElementById('q6a3').checked)
	{	answer6=-1;
	}
  if(document.getElementById('q6a4').checked)
	{	answer6=-3;
  }
  return answer6;
}

function result7()
{
  answer7 = "";
  if(document.getElementById('q7a1').checked)
	{	
    answer7= 3 ;
	}
	if(document.getElementById('q7a2').checked)
	{	answer7=1;
	}
	if(document.getElementById('q7a3').checked)
	{	answer7=-1;
	}
  if(document.getElementById('q7a4').checked)
	{	answer7=-3;
  }
  return answer7;
}

function result8()
{
  answer8 = "";
  if(document.getElementById('q8a1').checked)
	{	
    answer8= 3 ;
	}
	if(document.getElementById('q8a2').checked)
	{	answer8=1;
	}
	if(document.getElementById('q8a3').checked)
	{	answer8=-1;
	}
  if(document.getElementById('q8a4').checked)
	{	answer8=-3;
  }
  return answer8;
}

function result9()
{
  answer9 = "";
  if(document.getElementById('q9a1').checked)
	{	
    answer9= 3 ;
	}
	if(document.getElementById('q9a2').checked)
	{	answer9=1;
	}
	if(document.getElementById('q9a3').checked)
	{	answer9=-1;
	}
  if(document.getElementById('q9a4').checked)
	{	answer9=-3;
  }
  return answer9;
}


/*
  //question 1
  
	if(document.getElementById('q1a1').checked)
	{	
    q1answer=3;
	}
	if(document.getElementById('q1a2').checked)
	{	q1answer=1;
	}
	if(document.getElementById('q1a3').checked)
	{	q1answer=-1;
	}
  if(document.getElementById('q1a4').checked)
	{	q1answer=-3;
  }

  //question 2
  
	if(document.getElementById('q2a1').checked)
	{	
      q2answer=3;
	}
	if(document.getElementById('q2a2').checked)
	{	q2answer=1;
	}
	if(document.getElementById('q2a3').checked)
	{	q2answer=-1;
	}
  if(document.getElementById('q2a4').checked)
	{	q2answer=-3;
  }
  
  //question 3
  
	if(document.getElementById('q3a1').checked)
	{	
      q3answer=3;
	}
	if(document.getElementById('q3a2').checked)
	{	q3answer=1;
	}
	if(document.getElementById('q3a3').checked)
	{	q3answer=-1;
	}
  if(document.getElementById('q3a4').checked)
	{	q3answer=-3;
  }


  //question 4
	if(document.getElementById('q4a1').checked)
	{	
      q4answer=3;
	}
	if(document.getElementById('q4a2').checked)
	{	q4answer=1;
	}
	if(document.getElementById('q4a3').checked)
	{	q4answer=-1;
	}
  if(document.getElementById('q4a4').checked)
	{	q4answer=-3;
  }

  //question 5
  
	if(document.getElementById('q5a1').checked)
		{	
      q5answer=3;
		}
	if(document.getElementById('q5a2').checked)
		{	q5answer=1;
		}
	if(document.getElementById('q5a3').checked)
		{	q5answer=-1;
		}
  if(document.getElementById('q5a4').checked)
		{	q5answer=-3;
    }

  //question 6

  
	if(document.getElementById('q6a1').checked)
		{	
      q6answer=3;
		}
	if(document.getElementById('q6a2').checked)
		{	q6answer=1;
		}
	if(document.getElementById('q6a3').checked)
		{	q6answer=-1;
		}
  if(document.getElementById('q6a4').checked)
		{	q6answer=-3;
    }

  //question 7

  
	if(document.getElementById('q7a1').checked)
		{	
      q7answer=3;
		}
	if(document.getElementById('q7a2').checked)
		{	q7answer=1;
		}
	if(document.getElementById('q7a3').checked)
		{	q7answer=-1;
		}
  if(document.getElementById('q7a4').checked)
		{	q7answer=-3;
    }

  //question 8
  
	if(document.getElementById('q8a1').checked)
		{	
      q8answer=3;
		}
	if(document.getElementById('q8a2').checked)
		{	q8answer=1;
		}
	if(document.getElementById('q8a3').checked)
		{	q8answer=-1;
		}
  if(document.getElementById('q8a4').checked)
		{	q8answer=-3;
    }

  //question 9

  
	if(document.getElementById('q9a1').checked)
		{	
      q9answer=3;
		}
	if(document.getElementById('q9a2').checked)
		{	q9answer=1;
		}
	if(document.getElementById('q9a3').checked)
		{	q9answer=-1;
		}
  if(document.getElementById('q9a4').checked)
		{	q9answer=-3;
    }
  /*

  //console.log(resultsList);
  
 //alert("Your score is:"+q1answer);
 //to print on browser
 //document.write("Your score is:"+q1answer);
}

*/function assignLetter(a1, a2, a3){
    sum = a1+a2+a3;
    letter = '';
    if(sum<0){
      letter = 'a';
    }
    else if(sum > 0){
      letter = 'b';
    }
    else if(sum = 0){
     /* let randInt = Math.floor(Math.random()*1);
      if (randInt == 0){
        letter = 'a';
      }
      else{
        letter = 'b'
      }*/
      letter = 'a';
    
    }
    return letter;
  }
  function click(){
    ans1 = result1();
    ans2 = result2();
    ans3 = result3();
    ans4 = result4();
    ans5 = result5();
    ans6 = result6();
    ans7 = result7();
    ans8 = result8();
    ans9 = result9();
    
    l1 = assignLetter(ans1,ans2,ans3);
    l2 = assignLetter(ans4,ans5,ans6);
    l3 = assignLetter(ans7,ans8,ans9);
    s = assignPerson(l1,l2,l3);
    return s;
  }
function click2(){
    ans1 = result1();
    ans2 = result2();
    ans3 = result3();
    ans4 = result4();
    ans5 = result5();
    ans6 = result6();
    ans7 = result7();
    ans8 = result8();
    ans9 = result9();
    
    l1 = assignLetter(ans1,ans2,ans3);
    l2 = assignLetter(ans4,ans5,ans6);
    l3 = assignLetter(ans7,ans8,ans9);
    ss = assignDesc(l1,l2,l3);
    return ss;
  }
  /*
  let pointSum = a1+a2+a3;
  let letter = '';
  if(pointSum<0){
    letter = 'a';
  }
  else if(pointSum > 0){
    letter = 'b;'
  }
  else if(pointSum = 0){
    let randInt = Math.floor(Math.random()*1);
    if (randInt == 0){
      letter = 'a';
    }
    else{
      letter = 'b'
    }
    
  }
  return letter;  
}*/

function assignPerson(c1,c2,c3){
  code = c1+c2+c3;
  let person = '';
  switch(code) {
    case "aaa":
      person = 'Lin Lanying';
      break;
    case 'aab':
      person = 'Mary Jackson';
      break;
    case 'aba':
      person = 'Maryam Mirzakhani';
      break;
    case 'abb':
      person = 'Ana Roque De Duprey';
      break;
    case 'baa':
      person = 'Dr.Gladys West';

      break;
    case 'bab':
      person = 'Dr. Ellen Ochoa';
      break;
    case 'bba':
      person = 'Mary G. Ross';

      break;
    case "bbb":
      person = 'Rajeshwari Chatterjee';
      break;
    default:
      person = 'Error. Please make sure to fill in all bubbles.';
  }
  return person;
}










function assignDesc(d1,d2,d3){
  code = d1+d2+d3;
  let desc = ''
  switch(code) {
    case "aaa":
        desc = 'Chinese Physicist who was the first Chinese student in a century to earn a doctorate from the University of Pennsylvania';
      break;
    case 'aab':
      desc = "NASA's first black female engineer"
      break;
    case 'aba':
      desc = 'A profound mathematician with a doctorate from Harvard'
      break;
    case 'abb':
      desc = 'Puerto-Rican scientist, educator and author'
      break;
    case 'baa':
      desc = 'African-American woman that did many works in math and computing, and a Hokie!'
      break;
    case 'bab':
      desc = 'Hispanic engineer, researcher and astronaut'
      break;
    case 'bba':
      desc = "Native-American woman who was a founding member of Lockheed's secret Advanced Development program";
      break;
    case "bbb":
      desc = 'First Female faculty member of the Indian Institute of Science';
      break;
    default:
      desc = 'Error. Please make sure to fill in all bubbles.';
  }
  return desc;
}

/*  
function readResults(){
  result();
  first = assignLetter(q1answer,q2answer,q3answer);
  second = assignLetter(q4answer,q5answer,q6answer);
  third = assignLetter(q7answer,q8answer,q9answer);

  var woman = assignPerson(first,second,third)
}

function onClickk(){
  readResults();
  /*var name = document.getElementById("post-btn");
    name.innerHTML = person;
  var pic = document.getElementById("womanImage");
    var source = "";
    pic.src = source.replace('90x90', '225x225');
  
  var text = document.getElementById("womanText");
    text.innerHTML = desc;*/
//}






/*
var clickCount = 0;
var womenButton = document.getElementById("womenButton");addEventListener("click",displayWomen);
var womenName = document.getElementById("womenName");

const womenList = [
	"Woman7",
	"Woman6",
	"Woman5",
	"Woman4",
	"Woman3",
	"Woman2",
	"Woman1"
];

//if (womenButton) {
//	womenButton.addEventListener("click", displayWomen);
//}

function displayWomen(){
	womenName.innerHTML = 'hi';
    womenList[clickCount];
	clickCount++;
	if(clickCount == womenList.length) {
		clickCount = 0;
	}
}

*/


const btn = document.getElementById('womenButton');

btn.addEventListener('click', function handleClick() {
  s = click();
  const nme = document.getElementById('womenName');
  nme.textContent = s;
  dd = click2();
  const d = document.getElementById('womenDesc');
  d.textContent = dd;

});