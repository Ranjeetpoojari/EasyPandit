$(document).ready(function(){
    $("#continue").click(function(){
        event.preventDefault();
       

    });
    $("#continue1").click(function(){
        event.preventDefault();
    //     $('#pills-contact-tab').addClass('show active');
    //     $('#pills-contact').addClass('show active');
    //     $('#pills-profile-tab').removeClass('show active');
    //     $('#pills-profile').removeClass('show active');
    //     $('.rangeid').addClass('range-color3');
    // $('.rangeid').removeClass('range-color2');
    // $('.rangeid').removeClass('range-color1');
    // $('.ch2').removeClass('d-none');
    });
});

//  login form validation
$(document).ready(function() {
    $('#Loginform').on('submit',function(event) {
        event.preventDefault()
        var emailphone = $('#exampleInputEmail1').val();
        var password = $('#passwordInput').val();
        // var passparttren =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let isValid = true;
        if(emailphone.trim() === ''){
            $('#emailError').text('Email id or phone number is required.');
            isValid = false;
        }
         else {
                console.log('done');
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            isValid = false;
        }
        else if(password.length <= 8 ){
            $('#passwordError').text('The password must be 8 charters');
            isValid = false;
        }
        else{
            console.log('done');
        }
        if(isValid){
            console.log("login submit");
        }
});
 });
 $(document).ready(function() {
    $('#signup').on('click',function(event) {
        event.preventDefault()
        var emailphone = $('#exampleInputEmail1').val();
        var password = $('#passwordInput').val();
        var name = $('#Fullname').val();
        // var passparttren =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let isValid = true;
        if(name.trim() === ''){
            $('#fullnameerror').text('Full name is required');
        }
        else{
            console.log('done');
        }
        if(emailphone.trim() === ''){
            $('#emailError').text('Email id or phone number is required.');
            isValid = false;
        }
         else {
                console.log('done');
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            isValid = false;
        }
        else if(password.length <= 8 ){
            $('#passwordError').text('The password must be 8 charters');
            isValid = false;
        }
        else{
            console.log('done');
        }
        if(password.trim() === ''){
        }
        if(isValid){
            console.log("login submit");
        }
});
 });
 $(document).ready(function() {
    $('#continue').on('click',function(event) {
        event.preventDefault();
        var cover_Location = $('#cover_Location').val();
        var addreess = $('#addreess').val();
        // var name = $('#Fullname').val();
        // var passparttren =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let isValid = true;
        if(addreess.trim() === ''){
            console.log("not Yet addree")
            $('#addressError').text("Address is required");
            isValid = false;
        }
        else{
            console.log('done');
        }
        if(cover_Location.trim() === ''){
            console.log("not yet");
            $('#cover_LocationError').text('Location will cover for puja is required.');
            isValid = false;
        }
         else {
                console.log('ok');
        }
        if(isValid){
            console.log("form is submited")
            $('#pills-profile-tab').addClass('show active');
            $('#pills-profile').addClass('show active');
            $('#pills-home').removeClass('show active');
            $('#pills-home-tab').removeClass('show active');
            $('.rangeid').addClass('range-color2');
            $('.rangeid').removeClass('range-color1');
            $('.rangeid').removeClass('range-color3');
            $('.ch1').removeClass('d-none');
        }
});
 });
$(document).ready(function() {
$('#continue1').on('click',function(event) {
    event.preventDefault();
    var isChecked = $(".Pujacheck:checked").length ;
    if(isChecked < 2){
        $('#pujaError').text('Expertise in puja is required');
      
    }
    else{
        $('#pills-contact-tab').addClass('show active');
        $('#pills-contact').addClass('show active');
        $('#pills-profile-tab').removeClass('show active');
        $('#pills-profile').removeClass('show active');
        $('.rangeid').addClass('range-color3');
    $('.rangeid').removeClass('range-color2');
    $('.rangeid').removeClass('range-color1');
    $('.ch2').removeClass('d-none');
    }
});
});
$(document).ready(function(){
    $("#pandit_info_btn").on("click",function(){
        event.preventDefault();
        var total_no_puja = $("#total_no_puja").val();
        var reference = $("#referenceid").val();
      
        if(reference.trim() ===''){
        // console.log("good night");
        $("#referenceError").text("Reference ID is required");  
    }
    else{
        // console.log("good morning");
        $("#referenceError").text(""); 
    }
    if(total_no_puja.trim() ===""){
        $("#total_no_pujaError").text("Reference ID is required");  
    }
    else{
        $("#total_no_pujaError").text("");
    }
    var isLanguage_preference = $(".Language_preference:checked").length ;
    if(isLanguage_preference < 1){
         console.log("good night");
         $('#Language_preferenceError').text('Expertise in puja is required');
        }
        else{
        console.log("good morning");
        $('#Language_preferenceError').text('');
    }
    var formData = $(this).serializeArray();
    var data = {};
    $.each(formData, function(_, field) {
        data[field.name] = field.value;
      });
      console.log(JSON.stringify(data));
    });
});

$(document).ready(function(){
    $('input[name="passport"]').on('click', function() {
        var selectedValue = $('input[name="passport"]:checked').val();
        if (selectedValue === 'pass_yes') {
            $('#seleiectFld').prop('disabled', true);
            console.log('my name');
        }
        else 
        {
            $('#seleiectFld').prop('disabled', false);  
            console.log('your name')
        }
    });
});

$(document).ready(function() {
    var previousWord = "";
  
    $("#extrapuja").keyup(function(event) {
      var inputValue = $(this).val().trim();
  
      if (event.keyCode === 32 || event.keyCode === 13) { 
        if (inputValue !== '') {
          addWord(inputValue);
          previousWord = inputValue;
          $(this).val('');
        }
      } else if (event.keyCode === 8) { 
        if (inputValue === '') {
          removeLastWord();
          $(this).val(previousWord);
        }
      }
    });
  
    $("#wordContainer").on("click", ".remove-cross", function() {
      $(this).parent().remove();
    });
  });
  
  function addWord(word) {
    var redBox = $("<div>").addClass("red-box").text(word);
    var removeCross = $("<span>").addClass("remove-cross").text("x");
    redBox.append(removeCross);
    $("#wordContainer").append(redBox);
  }
  
  function removeLastWord() {
    $("#wordContainer").children().last().remove().delete();
  }
  
  // pandit for extra puja end js 