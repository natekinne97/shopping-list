//delete item
function del() {
    $('.shopping-item-delete').click(function (event) {
        $(this).closest('li').remove();
    });
}
//check off item
function check(){
    $('.shopping-item-toggle').click(function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function add(){
    $('#js-shopping-list-form').submit(event => {
        // this stops the default form submission behavior
        event.preventDefault();
        console.log('worked');
    });  
}


$(del);
$(check);