$(document).ready(function(){
 
  var $allcheck = $("<div align='left'><span>Tümünü Seç <input type='checkbox' id='checkall' /><span></div>");
    $("#dgListe").before($allcheck);

  
  $("#Table9 #checkall").click(function () {
        if ($("#Table9 #checkall").is(':checked')) {
            $("#Table9 input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#Table9 input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
    
//  $("[data-toggle=tooltip]").tooltip();
  
});
