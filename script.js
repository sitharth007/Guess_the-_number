let user_input=document.getElementById("user_input")
let unorder_list=document.getElementById("unorder_list")
function add(){
    var list=document.createElement("li")
    var btn=document.createElement("button")
    btn.textContent="remove"
    list.textContent=user_input.value
    list.append(btn)
    unorder_list.append(list)
    btn.onclick=function(){
        list.remove()
    }

    user_input.value=""
}
