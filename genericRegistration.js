getScript('https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', function(){
  var forms = $('form');
  var supportedFields = ["username", "email", "password", "confirm", "firstname", "lastname", "gender", "socialsecuritynumber", "address", "zip", "city", "country", "state", "phone", "mobile"];
  var fieldId, fieldSupported;
  for(var i=0;i<forms.length;i++)
  { 
    $("form#"+forms[i].id+" :input:visible").each(function() {
      if ($(this).css('visibility') !== 'hidden') {
        fieldId = $(this).prop('id');
        fieldSupported = supportedFields.filter(function(a){
          return fieldId.indexOf(a) !== -1;
        });
        
        if(fieldSupported.length > 0) {
          console.log(fieldId);
        }
      }
    });
  }
});

function getScript(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;
    prior.parentNode.insertBefore(script, prior);

    script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if(!isAbort) { if(callback) callback(); }
        }
    };

    script.src = source;
}