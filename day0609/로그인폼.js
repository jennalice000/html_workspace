

function loginCheck(){
    if($("input[name='username']").val()==""){
        alert("Id Plz")
        $("input[name='username']").focus()
    }else if($("input[name='password']").val().length<1){
        alert("Pwd Plz")
        $("input[name='password']").focus()
    }
}

function show(){
    $("h2").show;

}

function hide(){
    $("h2").hide;

}


$(function(){
    $("#btn").click(function(){
        loginCheck()
    });
    $(".container").animate({
        left:"0px"
    })
})