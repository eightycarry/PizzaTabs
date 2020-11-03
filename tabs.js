$(document).ready(function(){
    $("#tabs a").click(showTab);
    $("button").click(updateStyles);

    function updateStyles(){
        $("a").css("color", "pink");
    }

    function showTab(event){
        event.preventDefault();
        $(this).tab("show");
    }
});