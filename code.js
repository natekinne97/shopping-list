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
    $('form').submit(event => {
        // this stops the default form submission behavior
        event.preventDefault();
        //get input value
        let input = $('input').val();
        //make a copy of li
        let base = "<li>" + $('ul li:first').html() + "</li>";
        //append the item
        $('ul').append(base);
        //change item to match the added one
        $('ul li:last').find('.shopping-item').text(input);
    });  
}


$(del);
$(check);
$(add);