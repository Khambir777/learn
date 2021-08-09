$(function () {
    $("#sortable").sortable({
      revent: true,
    });

    // є галерея і мусорка
    var $gallery = $("#gallery"),
      $trash = $(".trash"),
      $smoke = $('#smoke');

    $("#gallery #img1").draggable({
      revert: "invalid",
    });

    $trash.droppable({
      classes: {
        "ui-droppable-active": "ui-state-highlight",
      },
      drop: function (event, ui) {
        deleteImage(ui.draggable);
        $('.efectsmoke').show(1000, function(){
          setTimeout(function() {
            $('.efectsmoke').hide(500);
          }, 5000);
          }); 
            
               },
    });

    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage($item) {
      $item.fadeOut(function () {
        var $list = $("$trash").length;

        $item.find("a.ui-icon-trash").remove();
        $item.append(recycle_icon);
        $('.efectsmoke').show(1000, function(){
          setTimeout(function() {
            $('.efectsmoke').hide(500);
          }, 5000);
          });
        
      });
    }

    
  });
