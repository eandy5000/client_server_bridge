var postObject ={
    name: "andy",
    fish: "trout",
    favorite:23
};

$(document).ready(function(){





addButtons();



});

//the ajax object has an empty 'data' key on the way out and returns with 'names'
function getCall(){
    $.ajax({
        type: "GET",
        url: "/kittyFooFoo",
        success: function(data){
            console.log("data from the server ",data);
        }
    });
}

function postCall() {
//just noticed the ajax call is an object with functions inside
//post is roundtrip. postObject goes in the 'data' key
    $.ajax({
      type: "POST",
      url: "/toServer",
      data: postObject,
        beforeSend: function(){
            console.log("HERE IS THE postObject: presend ", postObject);
        },
        success: function(data){
            console.log("postObject has been converted to data ",data);
        }
    });

}

//dom modification and listeners



function addButtons(){
    $('body').append('<div class="get">GET</div>');
    $('body').append('<div class="post">POST</div>');

    $('.get').on('click',function(){
        getCall();
    });
    $('.post').on('click',function(){
        postCall();
    });

}