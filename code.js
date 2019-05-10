function del() {
    $('.shopping-item-delete').click(function (event) {
        console.log("delete clicked");
        const del = $(this);
        const par = $(this).parent();
        console.log(par);
    });
}

$(del);