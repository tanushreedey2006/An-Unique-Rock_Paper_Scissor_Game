// let Button = document.querySelectorAll("#Button");
// for(let i = 0;i < Button.length ; i++)
//     Button[i].addEventListener("click",function(event){

//       alert(event.target.innerHTML);
//     })

var flag = 1;
let aa = document.getElementById("sec");
let hea = document.getElementById("head");
let rese = document.getElementById("reset");
let re=document.getElementById("re");
let fin = document.getElementById("final");
let par = document.getElementById("para");
let Maindiv = document.getElementById("Maindiv");
let toggleImageId = document.getElementById("gy");
let p1=document.getElementById("FirstPage");
let p2=document.getElementById("SecondPage");

function toggleImage() {
  var butt = document.querySelectorAll("#Button");
  if (flag == 0) {
    toggleImageId.src = "moon_or.png";
    Maindiv.style.backgroundColor = "#bebebe57";
     p1.style.border="1px solid  #e02d05";
     p1.style.boxShadow="0.1px 0.1px 1px red";
    p2.style.border="1px solid  #e02d05";
    p2.style.boxShadow="1px 1px 20px red";
    rese.style.color = "black";
    re.style.color="red";
    hea.style.color = "#1c1a4f";
    
    document.body.style.backgroundColor = "white";
    aa.style.color = "red";
    par.style.color = "black";
    fin.style.color = "black";
    for (let i = 0; i < butt.length; i++) {
      butt[i].style.backgroundColor = "red";
    }
    flag = 1;
  } else {
    toggleImageId.src = "light.png";
    for (let i = 0; i < butt.length; i++) {
      butt[i].style.backgroundColor = "#2751a3";
    }
    Maindiv.style.backgroundColor = "#232b2b";
    p1.style.border="0.3px solid  #fff";
    p1.style.boxShadow=" 1px 1px 20px blue";
    p2.style.border="1px solid  #fff";
    p2.style.boxShadow=" 1px 1px 20px blue"; 
    document.body.style.backgroundColor = "black";
    hea.style.color = "#c4c4cc";
     rese.style.color = "#fff";
     re.style.color="#2751a3";
    aa.style.color = "#6a85cc";
    fin.style.color = "white";
    par.style.color = "white";
    flag = 0;
  }
}
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function Click(User_Choice) {
  document.getElementById("para").innerHTML = "VS";
  let a = document.getElementById("first");
  let aab = document.getElementById("fi");
  let pp = document.createElement("p");
  par.innerHTML = "VS";
  var image = document.getElementById("img1");
  var image1 = document.getElementById("img2");

  let Random = Math.floor(Math.random() * 3);
  let Com = "";
  Random == 0
    ? (Com = "Rock")
    : Random == 1
    ? (Com = "Paper")
    : (Com = "Scissor");
  // if (Random == 0) {
  //   Com = "Rock";
  //   image1.src = `./${Com}.png`;
  // } else if (Random == 1) {
  //   Com = "Paper";
  //   image1.src = `./${Com}.png`;
  // } else {
  //   Com = "Scissor";
  //   image1.src = `./${Com}.png`;
  // }
  //   image.src = `./${User_Choice}.png`;

  if (User_Choice == "Rock") {
    image.src = "Rock.png";
  } else if (User_Choice == "Paper") {
    image.src = "Paper.png";
    image.style.width = "35%";
  } else if (User_Choice == "Scissor") {
    image.src = "Scissor.png";
  }
  if (Com == "Rock") {
    image1.src = "Rock-ch.png";
  } else if (Com == "Paper") {
    image1.src = "Paper-ch.png";
    image1.style.width = "35%";
  } else if (Com == "Scissor") {
    image1.src = "Scissor-org.png";
  }

  let Result = "";
  // User_Choice == Com
  //   ? (Result = "Game tie")
  //   : (Com == "Rock" && User_Choice == "Scissor") ||
  //     (Com == "Scissor" && User_Choice == "Paper") ||
  //     (Com == "Paper" && User_Choice == "Rock")
  //   ? (Result = "Computer Win")
  //   : (Result = "You Win");
  if (User_Choice == Com) {
    Result = "Oops! Game tie";
    // b.innerHTML = "Game tie";
  } else if (
    (Com == "Rock" && User_Choice == "Scissor")  ||
    (Com == "Scissor" && User_Choice == "Paper") ||
    (Com == "Paper" && User_Choice == "Rock")
  ) {
    Result = "Computer Won !!!🎉";
  } else {
    Result = "Congrats You Won !!!🎉";
  }


  

        // Display scores
    document.getElementById("playerScore").innerHTML = `Player: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`;
    document.getElementById("drawScore").innerHTML = `Draw: ${drawScore}`;

      if (Result.includes("You Won")) {
        playerScore++;
    } else if (Result.includes("Computer Won")) {
        computerScore++;
    } else {
      drawScore++;
    }

  a.innerHTML = `Computer Choice: ${Com}`;
  aab.innerHTML = ` Your Choice: ${User_Choice} `;
  aa.innerHTML = `Result: ${Result}`;
  // c.innerHTML = "Your Choice: " + User_Choice;
  // b.innerHTML = "Computer choice: " + Com;
  // a.appendChild(c);
  // a.appendChild(b);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById("resultText").innerHTML = "";
    document.getElementById("playerScore").innerHTML = "Player: 0";
    document.getElementById("computerScore").innerHTML = "Computer: 0";
    document.getElementById("drawScore").innerHTML = "Draw: 0";
    document.getElementById("para").innerHTML = "";
    document.getElementById("img1").src = "";
    document.getElementById("img2").src = "";
     let a = document.getElementById("first").innerHTML="";
     let aab = document.getElementById("fi").innerHTML="";
     let aa = document.getElementById("sec").innerHTML="";
    
    console.log("✅ Game Reset - Scores Cleared!");
}


function SecondPageOpen() {
  const SecondPage = document.getElementById("SecondPage");
  const FirstPage = document.getElementById("FirstPage");
  SecondPage.style.display = "block";
  FirstPage.style.display = "none";
  //  let gh = document.getElementById("gy");
      toggleImageId.style.left="68%";
}
function FirstPageOpen() {
  const SecondPage = document.getElementById("SecondPage");
  const FirstPage = document.getElementById("FirstPage");
  // const gh = document.getElementById("gy");
  FirstPage.style.display = "flex" ;
  SecondPage.style.display = "none";
  // gh.style.left="100%";
  toggleImageId.style.left="22%";
  window.location.reload();

}