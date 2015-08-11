(function(win, doc, $) {

  'use strict';

  // Don't run script if jQuery isn't loaded
  if (typeof win.jQuery === 'undefined') {
    return;
  }

  var data, fillForm, FormData, len, _rand;

  _rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Load ChanceJS library
  $.getScript('https://raw.githubusercontent.com/victorquinn/chancejs/master/chance.js')
    .done(function() {
      fillForm();
    })
    .fail(function() {
      win.console.error('ERROR: ChanceJS not loaded!');
    });


  FormData = function() {
    this.chance     = chance;

    alert(chance.string());
    // this.username  = faker.internet.userName().split('.').join('').substring(0,12);
    // this.email     = this.username + '@dispostable.com';

    // this.password  = 'Abcd@1234';
    // this.firstname = faker.name.firstName();
    // this.lastname  = faker.name.lastName();
    // this.address   = faker.address.streetAddress();
    // this.zip       = '0'+_rand(7001,8989); //Valid GNNJ zip codes
    // this.city      = faker.address.city();
    // this.mobile    = faker.phone.phoneNumberFormat();
    // this.phone     = faker.phone.phoneNumberFormat();
    // this.ssn       = _rand(101,999)+'-'+_rand(11,99)+'-'+_rand(101,999);

    // this.passport  = _rand(10000000000,99999999999);
  };

  FormData.prototype.checkCheckbox = function(el) {
    var $el  = $(el);

    $el.prop('checked', true);
  };


  fillForm = function() {
    data = new FormData(win.Chance);

    // $('#registration_username').val(data.username);
    // $('#registration_email').val(data.email);
    // $('#registration_emailConfirmation').val(data.email);
    // $('#registration_password').val(data.password);
    // $('#registration_passwordConfirmation').val(data.password);
    // $('#registration_firstName').val(data.firstname);
    // $('#registration_lastName').val(data.lastname);
    // $('#registration_passport').val(data.passport);

    // $('#registration_addressStreet').val(data.address);
    // $('#registration_addressZip').val(data.zip);
    // $('#registration_addressCity').val(data.city);

    // $('#registration_mobilePhone').val(data.mobile);
    // $('#registration_homePhone').val(data.phone);
    // $('#registration_socialSecurityNumber').val(data.ssn);
    // $('#registration_secretResponse').val('Bet');

    // Check all checkboxes
    //$('input[type=checkbox]').each(function() {
    //  data.checkCheckbox(this);
    //});

  };

}(window, window.document, window.jQuery));
