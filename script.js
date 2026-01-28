let random=Math.random()
let random_num=Math.floor(random*10)+1
console.log(random_num)

let score=document.getElementById("score")
let tscore=10
let res=document.getElementById("result")

function check(){
    let user_no = Number(document.getElementById("num").value);


    if(random_num==user_no){
        res.textContent="correct"
        alert("You got it at "+tscore)
    }
    else{
        tscore=tscore-1
        score.textContent="Score:"+tscore
        res.textContent="wrong"
    }
}