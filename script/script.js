(function($){
    $(document).ready(function(){
        $('.lp-slider').lpTabs();

        $.fn.hoverCard=function(){
            return $(this).each(function(){
               let card=$(this);
               card.children('.service').children(".setvice__linkMore").on('click', function(){
                    card.children('.service').css('display', 'none');
                    card.children('.service-hover').css('zIndex', '1');
                    
               });  
               card.children('.service-hover').mouseleave(function(){
                    card.children('.service').css('display', 'block');
                    card.children('.service-hover').css('zIndex', '-1');

               }) ;  
            });
        }
        $('.card').hoverCard();

        $.fn.listHover=function(){
            return $(this).each(function(){
                let list=$(this);
                list.children('.list-select').on('mousemove', function(){
                    
                    list.children('.list-select').addClass('active');
                    
                });
                    list.mouseleave(function(){
                    list.children('.list-select').removeClass('active');
                });
            });
        }
        $('.list').listHover();


        $.fn.activeBlock=function(){
            return $(this).each(function(){
                let activBlock=$(this);
                activBlock.children('.express-logistic__nav').children('.nav').addClass('active');
            });
        }
        $('.express-logistic').activeBlock();
    });
    
})(jQuery);