
//  login form validation
$(document).ready(function() {
    $('#Loginform').on('submit',function(event) {
        event.preventDefault()
        var emailphone = $('#exampleInputEmail1').val();
        var password = $('#passwordInput').val();
        // var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // var num_pattern = /^\d{10}$/;
        let isValid = true;
        if(emailphone.trim() === ''){
            $('#emailError').text('Email id or phone number is required.');
            $('#exampleInputEmail1').addClass('border-danger');
            isValid = false;
        }
         else {
            $('#emailError').text('');
            $('#exampleInputEmail1').removeClass('border-danger');
            isValid = true;
                console.log('done');
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else if(password.length <= 8 ){
            $('#passwordError').text('The password must be 8 charters');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else{
            console.log('done');
            $('#passwordInput').removeClass('border-danger');
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
        var regEx = /^[A-Za-z]+$/;
        // var passparttren =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let isValid = true;
        if(name.trim() === ''){
            $('#fullnameerror').text('Full name is required');
            $('#Fullname').addClass('border-danger');
             isValid =false
        }
        else if(!regEx.test(name)){
            $('#Fullname').addClass('border-danger');
            $('#fullnameerror').text('Please provide Valid name');
            isValid = false
        } 
        else{
            $('#fullnameerror').text('');
            $('#Fullname').removeClass('border-danger');
            isValid = true
            console.log('done');
        }
        if(emailphone.trim() === ''){
            $('#emailError').text('Email id or phone number is required.');
            $('#exampleInputEmail1').addClass('border-danger');
            isValid = false;
        }
         else {
            $('#emailError').text('');
            $('#exampleInputEmail1').removeClass('border-danger');
            isValid = true;
                console.log('done');
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else if(password.length <= 8 ){
            $('#passwordError').text('The password must be 8 charters');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else{
            console.log('done');
            $('#passwordInput').removeClass('border-danger');
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
        var regEx = /^[A-Za-z]+$/;
        let isValid = true;
        if(addreess.trim() === ''){
            $('#addreess').addClass('border-danger');
            $('#addressError').text("Address is required");
            isValid = false;
        }
        else{
            $('#addreess').removeClass('border-danger');
            console.log('done');
        }
        if(cover_Location.trim() === ''){
            console.log("not yet");
            $('#cover_LocationError').text('Location will cover for puja is required.');
            $('#cover_Location').addClass('border-danger');
            isValid = false;
        }else if(!regEx.test(cover_Location)){
            $('#cover_LocationError').text('Please Provide Your Currect Location');
            $('#cover_Location').addClass('border-danger');
            isValid = false;
        }
        else {
            isValid =true;
            $('#cover_Location').removeClass('border-danger');
            $('#cover_LocationError').text('');
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
    $('form').submit(function(event){
        event.preventDefault();
        var total_no_puja = $("#total_no_puja").val();
        var reference = $("#referenceid").val();
        var regEx = /^[0-9]+$/;
        let isValid = true;
        if(reference.trim() ===''){
        // console.log("good night");
        $("#referenceError").text("Reference ID is required");  
        $('#referenceid').addClass('border-danger');
        
        isValid = false;
    }
    else if(!regEx.test(reference)){
        $("#referenceError").text("Only Numbers");  
        $('#referenceid').addClass('border-danger');
        isValid = false;
    }
    else{
        isValid = true;
        // console.log("good morning");
        $('#referenceid').removeClass('border-danger');
        $("#referenceError").text(""); 
    }
    if(total_no_puja.trim() ===""){
        
        $("#total_no_pujaError").text("Reference ID is required");  
        $('#total_no_puja').addClass('border-danger');
        isValid = false;
    }else if(!regEx.test(total_no_puja)){
        $("#total_no_pujaError").text("Only numbers");  
        $('#total_no_puja').addClass('border-danger');
        isValid = false;
    }
    else{
        $('#total_no_puja').removeClass('border-danger');
        $("#total_no_pujaError").text("");
        isValid = true;
    }
    var isLanguage_preference = $(".Language_preference:checked").length ;
    if(isLanguage_preference < 1){
        isValid = false;
        $('.Language_preference').addClass('border-danger');

         $('#Language_preferenceError').text('Expertise in puja is required');
        }
        else{
           isValid = true; 
        $('#Language_preferenceError').text('');
    }
    if(isValid = true){
    }
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