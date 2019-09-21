/******************************************
    File Name: custom.js
/****************************************** */

(function($) {
    "use strict";

    /* ==============================================
    AFFIX
    =============================================== */
    $('.megamenu').affix({
        offset: {
            top: 0,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    /* ==============================================
    BACK TOP
    =============================================== */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "75px"
            });
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });


    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /*--------*/
    $( "#reglas-tlfn-mojado" ).click(function() {
        $('body').append(  '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
          '<div class="modal-content">'+
           ' <div class="modal-header">'+
              '<h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                '<span aria-hidden="true">&times;</span>'+
             ' </button>'+
            '</div>'+
            '<div class="modal-body">'+
           ' </div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
             ' <button type="button" class="btn btn-primary">Save changes</button>'+
           ' </div>'+
         ' </div>'+
       ' </div>'+
      '</div>')
      });
    /*---------*/
    /* ==============================================
     CODE WRAPPER -->
     =============================================== */


    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);
