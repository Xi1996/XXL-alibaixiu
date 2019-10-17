$('#feature').on('change', function() {
    var fd = new FormData();
    fd.append('feature', this.files[0]);
    $.ajax({
        type: "post",
        url: "/upload",
        processData: false,
        contentType: false,
        data: fd,
        success: function(res) {
            $('#tupian').val(res[0].feature);
            $('#preview').attr('src', res[0].feature).show();
        }
    });
});


$('#tianjia').on('click', function() {
    $.ajax({
        type: "post",
        url: "/categories",
        data: $(this).serialize(),
        success: function(response) {
            location.href = '/admin/post.html';
        }
    });
    return false;
});