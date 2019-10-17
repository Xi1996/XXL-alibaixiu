$.ajax({
    type: "get",
    url: "/users",
    success: function(res) {
        var html = template('usersTpl', { data: res });
        $('tbody').html(html);
    }
});

$('#userForm').on('submit', function() {
    var formData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/users",
        data: formData,
        success: function(res) {
            location.reload();
        }
    });
    return false;
});

$('#avatar').on('change', function() {
    var fd = new FormData();
    fd.append('avatar', this.files[0]);
    $.ajax({
        type: "post",
        url: "/upload",
        processData: false,
        contentType: false,
        data: fd,
        success: function(res) {
            $('#hiddenImg').val(res[0].avatar);
            $('#preview').attr('src', res[0].avatar);
        }
    });
});

$('#tbody').on('click', '.modify', function() {
    $.ajax({
        type: "get",
        url: "/users/" + $('.modify').attr('data-id'),
        success: function(res) {
            var html = template('modifyTpl', res);
            $('#modifyBox').html(html);
        }
    });
});
$('#modifyBox').on('submit', 'modifyForm', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: "put",
        url: "/users/" + id,
        data: $(this).serialize(),
        success: function(res) {
            location.reload();
        }
    });
});

$('#tbody').on('click', '.delete', function() {
    if (confirm('您真的要删除用户吗？')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: "delete",
            url: "/users/" + id,
            success: function(res) {
                location.reload();
            }
        });
    }
});

var sellectAll = $('#sellectAll');

sellectAll.on('click', function() {
    var bool = sellectAll.prop('checked');
    $('.sellect').prop('checked', bool);
    if (bool) {
        $('#deleteMany').show();
    } else {
        $('#deleteMany').hide();
    }
});

$('#tbody').on('click', '.sellect', function() {
    var checkedList = $('#tbody input[type="checkbox"]:checked');
    if (checkedList.length !== 0) {
        $('#deleteMany').show();
    } else {
        $('#deleteMany').hide();
    }
    var bool = $('.sellect').prop('checked');
    if (bool == false) {
        $('#sellectAll').prop('checked', bool);
    } else {
        var sellects = document.querySelectorAll('.sellect');
        sellects.forEach(function(item) {
            bool = item.checked;
            if (bool == false) {
                bool = false;
                sellectAll.prop('checked', bool);
                return;
            }
        });
        sellectAll.prop('checked', bool);
    }
});

$('#deleteMany').on('click', function() {
    var checked = $('#tbody').find('input').filter(':checked');
    if (confirm('确定批量删除？'));
    var str = [];
    checked.each(function(i, ele) {
        str.push($(ele).attr('data-id'));
    });
    $.ajax({
        type: "delete",
        url: "/users/" + str.join('-'),
        success: function(res) {
            location.reload();
        }
    });
});