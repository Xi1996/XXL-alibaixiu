$.ajax({
    type: "get",
    url: "/posts",
    success: function(res) {
        var html = template('posts', res);
        $('#postsBox').html(html);
        var page = template('pageTpl', res);
        $('#page').html(page);
    }
});

function changePage(page) {
    console.log(page);

    $.ajax({
        type: "get",
        url: "/posts",
        data: {
            page
        },
        success: function(res) {
            var html = template('posts', res);
            $('#postsBox').html(html);
            var page = template('pageTpl', res);
            $('#page').html(page);
        }
    });
}

function formateDate(date) {
    date = new Date(date);
    return date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}