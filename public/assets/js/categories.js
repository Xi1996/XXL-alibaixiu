$.ajax({
    type: "get",
    url: "/categories",
    success: function(res) {
        var html = template('categoriesTpl', { data: res });
        $('#categoryBox').html(html);
    }
});