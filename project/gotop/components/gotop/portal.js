;define(['jquery'], function ($) {
    'use strict';
    //初始化组件类，参数为组件配置，如果组件第一次创建，将传递空配置，如果组件为已经创建到视图窗口，重新加载，将传递已保存的配置
    return {
        //输出到发布页面，当用户正式发布后，调用此函数创建视图。
        onAfterRender: function (el) {
            for(var i =0; i<10; i++){
                $('body').append($('<div style="height:200px;border-bottom:1px solid #333;"></div>'));
            }
            $(el).on(
                'touchstart',function(){
                    var $self = $(this);
                    $self.addClass('onsoso');
                    $('html,body').animate({
                        scrollTop: 0
                    }, 500,function(){
                        $self.removeClass('onsoso');
                    });
                }
            );
        }
    }
});
