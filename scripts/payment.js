//Initialize and declaration of flags
var cc_name_check = false;
var cc_no_check = false;
var cc_date_check = false;
var cc_cvv_no_check = false;

//Email Validation
function checkEmail(str) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(str)) {
    $(".error-msg").css("display", "none");
    $("#saveEmail").removeClass("btn-disabled").addClass("btn-active");

    //Save enabled
    $("#saveEmail").click(function () {
      $("#add-email").css("display", "none");
      $("#edit-email").css("display", "block");
      //Set values
      var user_email = $("#emailaddress").val();
      $("#setEmail").val(user_email);
    });
    //Edit Email Section
    $("#edit-email-sect").click(function () {
      $("#add-email").css("display", "block");
      $("#edit-email").css("display", "none");
    });
  } else {
    if ($("input.emailAdd").val().length !== 0) {
      $(".error-msg").css("display", "block");
      $("#saveEmail").removeClass("btn-active").addClass("btn-disabled");
    }
  }
}

function isNotEmpty(classname) {
  if ($(classname).val() !== "") {
    $(".error-bill-name").css("display", "none");
    $(".error-bill-add1").css("display", "none");
    // $('.error-bill-add2').css('display', 'none');
    $(".error-cust-state").css("display", "none");
    $(".error-cust-city").css("display", "none");
    $(".error-zipcode").css("display", "none");
  } else {
    switch (classname) {
      case "#billName":
        $(".error-bill-name").css("display", "block");
        break;
      case "#add1":
        $(".error-bill-add1").css("display", "block");
        break;
      case "#cust-state":
        $(".error-cust-state").css("display", "block");
        break;
      case "#cust-city":
        $(".error-cust-city").css("display", "block");
        break;
      case "#zipCode":
        $(".error-zipcode").css("display", "block");
        break;
    }
    if ("#add1") {
      $("#saveBilling").removeClass("btn-disabled").addClass("btn-active");
    } else {
      $("#saveBilling").removeClass("btn-active").addClass("btn-disabled");
    }
  }
}

//====Credit Card Validation====

// check for Credit Card name, should not empty
function CC_name_format() {
  if ($("#ccName").val().length == "") {
    $(".error-cc-name").css("display", "block");
    cc_name_check = false;
  } else {
    $(".error-cc-name").css("display", "none");
    cc_name_check = true;
  }
  isFormValid();
}
// Check Credit Card standard format for diff. cards
function validateCCnumber(value) {
  if (value != undefined) var ccNum = value.replace(/\s/g, "");
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var isValid = false;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
  } else if (mastercardRegEx.test(ccNum)) {
    isValid = true;
  } else if (amexpRegEx.test(ccNum)) {
    isValid = true;
  } else if (discovRegEx.test(ccNum)) {
    isValid = true;
  }

  if (isValid) {
    $(".error-cc-no").css("display", "none");
    cc_no_check = true;
  } else {
    cc_no_check = false;
    $(".error-cc-no").css("display", "block");
  }
  isFormValid();
}

// Check Credit Card no. format xxxx-xxxx-xxxx-xxxx
function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

document.getElementById("ccNo").oninput = function () {
  this.value = cc_format(this.value);
  validateCCnumber(this.value);
};

//The below code validates the Date for year 1000-2999 in MM/YYYY format. Make sure the textbox maxlength is 7.
function checkDateFormat(value) {
  // var filter = new RegExp("(0[123456789]|10|11|12)([/])([1-2][0-9][0-9][0-9])");
  var filter = new RegExp("(0[123456789]|10|11|12)([/])([2][0-9][1-9][0-9])");
  if (filter.test(value) && $("#ccDate").val().length !== "") {
    $(".error-cc-date").css("display", "none");
    cc_date_check = true;
  } else {
    cc_date_check = false;
    $(".error-cc-date").css("display", "block");
  }
  isFormValid();
}

//Check CVV number
//AMEX (American Express) cards have 4 digit CVV codes and Visa and Mastercard are 3 digits
function checkCvvFormat(value) {
  var pattern = /^[0-9]{3,4}$/;
  if (pattern.test(value) && $("#cvvNo").val().length !== "") {
    $(".error-cvv").css("display", "none");
    cc_cvv_no_check = true;
  } else {
    cc_cvv_no_check = false;
    $(".error-cvv").css("display", "block");
  }
  isFormValid();
}

// Enable Payment SAVE button after validating Credit card number, name, date & CVV number.
function isFormValid() {
  if (cc_name_check && cc_no_check && cc_date_check && cc_cvv_no_check) {
    $("#saveCC").removeClass("btn-disabled").addClass("btn-active");
    $("#saveCC").click(function () {
      $("#add-payment").css("display", "none");
      $("#edit-payment").css("display", "block");

      //store values
      $("#set_ccName").val($("#ccName").val());
      $("#set_ccDate").val($("#ccDate ").val());
      $("#set_cvvNo").val($("#cvvNo").val());

      //active place order button
      $("#place-order").addClass("active");
      $(".order-btn").addClass("active");
    });
    //Edit payment section
    $("#edit-payment-sect").click(function () {
      $(".save-card-box").css("border-color", "#00acc1");
      $("#edit-payment").css("display", "none");
      $("#add-payment").css("display", "block");
    });
  } else {
    $("#saveCC").removeClass("btn-active").addClass("btn-disabled");
  }
}

// Promocode JS here
function hasPromoCode() {
  // To remove the promocode
  $(".remove-btn").click(function () {
    $(".promo-label").css("display", "block");
    $(".promo-apply").css("display", "none");
    $("#promoUpdate").css("display", "none");
    $("#promoApply").val("");
    $(".promo-appl-btn").removeClass("active").addClass("disabled");
    $(".promo-appl-btn").off("click");
  });
  // Switch to promocode apply section
  $(".promo-label").css("display", "none");
  $(".promo-apply").css("display", "block");
  $("#promoUpdate").css("display", "none");
}
function promoCodeApply() {
  //Switch to promocode edit/remove section
  $(".promo-label").css("display", "none");
  $("#promoUpdate").css("display", "none");
  $(".promo-apply").css("display", "block");
  //Check if promo input is not empty
  if ($("#promoApply").val().length !== 0) {
    $(".promo-appl-btn").removeClass("disabled").addClass("active"); //active apply button
    //apply promo button click
    $(".promo-appl-btn").click(function () {
      $("#promoUpdate").css("display", "block");
      $(".promo-apply").css("display", "none");
      var promoCode = $("#promoApply").val();
      $("#promoCode_value").val(promoCode);
    });
  } else {
    $(".promo-appl-btn").removeClass("active").addClass("disabled"); //disabled button
    $(".promo-appl-btn").off("click"); //Remove apply button click
  }
}

// Add "/" in MM/YYYY date format (Add "oninput="validDate(value)" to textbox)
//     var result = false;
//     var isFormatted = false;
// function validDate(value) {

//     if(value.length == 3 && !isFormatted){
//         var res = value.substring(0, 2);
//         var afterval =value.substring(2, 3);
//         document.getElementById("ccDate").value =res + '/'+ afterval;
//         isFormatted=true;
//     }
//     if(document.getElementById("ccDate").value.length == 2 && !isFormatted){
//         document.getElementById("ccDate").value = document.getElementById("ccDate").value + '/';
//         isFormatted=true;
//     }
//     else if(value.length < 3){
//         isFormatted=false;
//     }
//     return value;
// }
