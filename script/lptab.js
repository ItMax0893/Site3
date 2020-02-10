(function($){
    $(document).ready(function(){
        $.fn.lpTabs=function(userParams){
           
            return $(this).each(function(){
                let tabs= $(this),
                    tabsTitleName=[];
                tabs.addClass('lp-tabs');
                tabs.children().each(function(){
                    tabsTitleName.push($(this).attr('data-name'));
                }).addClass('lp-tab');
    
                tabs.wrapInner('<div class="lp-tabs-content"></div>');
                tabs.prepend('<div class="lp-tabs-titles"><ul></ul></div>');
                let tabsTitles=tabs.find('.lp-tabs-titles'),
                    tabsContent=tabs.find('.lp-tabs-content'),
                    tabsContenTabs=tabsContent.find('.lp-tab');
                    
                tabsTitleName.forEach(function(value){
                    tabsTitles.find('ul').append('<li>'+value+'</li>');
                });
    
                let tabsTitlesItems=tabsTitles.find('ul li');
    
                tabsTitlesItems.eq(0).addClass('active');
                tabsContenTabs.eq(0).addClass('active').show();
    
                tabsTitlesItems.on('click', function(){
                    if(!tabs.hasClass('changing')){
                        tabs.addClass('changing');
                        tabsTitlesItems.removeClass('active');
                        $(this).addClass('active');
    
                        let curTab=tabsContent.find('.active'),
                            nextTab=tabsContenTabs.eq($(this).index());
                        
                        let curHeight=curTab.outerHeight();
                        nextTab.show();
                        let nextHeight=nextTab.outerHeight();
                        nextTab.hide();
    
                        
    
                        curTab.fadeOut(500, function(){
    
                            
                            nextTab.fadeIn(500, function(){
                                curTab.removeClass('active');
                                nextTab.addClass('active');
                                tabs.removeClass('changing');
                            });
                        });
                    }
                });
    
                $(window).on('load resize', function(){
                    tabsContent.height(tabsContent.find('.active').outerHeight());
                });
    
            });
        }
    });
})(jQuery);
   