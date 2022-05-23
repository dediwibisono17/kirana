// alert(1)

var submitjob = $("#submit-job")
submitjob.click(() => {
    var inputjob = $("#input-job").val();
    var categoryjob = $("#category-job").val();
    // alert(1)
    if (inputjob.length < 1) {
        $("#input-job").next().addClass('show');
    } else {
        $("#input-job").next().removeClass('show');
    }
    if (categoryjob.length < 1) {
        $("#category-job").next().addClass('show');
    } else {
        $("#category-job").next().removeClass('show');
    }
    if (inputjob.length > 0 && categoryjob.length > 0) {
        alert('berhasil')
    }
})

$("#input-job").on('input', function() {
    var this_ = $(this)
        // console.log(this_.val());
})

$(".form-control").focusin(function() {
    $(".overlay-bg").addClass('is-active')
    $(this).addClass('helping-white')
})

$(".form-control").focusout(function() {
    $(".overlay-bg").removeClass('is-active')
    $(this).removeClass('helping-white')
})

$('select.form-control').change(function() {
    $(".overlay-bg").removeClass('is-active')
    $(this).removeClass('helping-white')
});

$("#search-job").click(() => {
    alert(1)
})

$('input.uang').keyup(function(event) {

    // skip for arrow keys
    if (event.which >= 37 && event.which <= 40) return;

    // format number
    $(this).val(function(index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    var $this = $(this).val();
    var nilai = parseFloat($this.replace(/,/g, ''))

    console.log(nilai);
});

$("#show_hide_password .show-hide").on('click', function(event) {
    event.preventDefault();
    // alert(1)
    if ($('#show_hide_password input').attr("type") == "text") {
        $('#show_hide_password input').attr('type', 'password');
        $('#show_hide_password i').addClass("fa-eye-slash");
        $('#show_hide_password i').removeClass("fa-eye");
    } else if ($('#show_hide_password input').attr("type") == "password") {
        $('#show_hide_password input').attr('type', 'text');
        $('#show_hide_password i').removeClass("fa-eye-slash");
        $('#show_hide_password i').addClass("fa-eye");
    }
});