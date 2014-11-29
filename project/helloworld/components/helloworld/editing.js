/**
 * Created by Administrator on 2014/9/18.
 */
define(["jquery", "component", 'lib/mustache', 'utils/uiHelper'], function ($, Component, mustache, uiHelper) {
        'user strict';

        // my function
        function helloworld(){
            return "helloworld";
        }

        return Component.extend({
            panels:null,
            "html_edit": '<div class="helloworld">hello <span class="title">{{content}}</span></div>',
            "config_edit": '<form action="javascript:;" method="post" onsubmit="return false;"> \
                                <fieldset class="js-tabpanel-property"> \
                                    <div class="form-row"><label>我的名字</label><div class="form-cell"><input type="text" name="title" value="硕硕" placeholder="" class=""></div></div> \
                                    <div class="form-row"><label>颜色</label><div class="form-cell"><input type="text" name="color" value="#666" placeholder="" class=""></div></div> \
                                </fieldset> \
                            </form> \
                            这个是自定义的',
            init: function() {
                Component.prototype.init.apply(this, arguments);
            },
            renderConfigurator: function () {
                var that = this;
                // 渲染右侧编辑框 不要删
                // that.panels.$propertyPanel 表示编辑框最外层div
                that.panels = uiHelper.createConfiguartor(this);

                // 自定义编辑框
                that.panels.$propertyPanel.html(mustache.render(this.config_edit));
                that.panels.$propertyPanel.find('[name="title"]').on('change',function(e,val){
                    that.$viewEl.find('.title').html(val);
                });

                that.panels.$propertyPanel.find('[name="color"]').on('change',function(e,val){
                    that.$viewEl.find('.title').css('color',val);
                });
            },

            renderView: function () {
                // 渲染手机框内的模版
                // this.$viewEl 是手机框内的最外层div
                this.$viewEl.html(mustache.render(this.html_edit,{
                    content: helloworld()
                }));
            },

            //编辑完毕点发布时 调用此方法做最后验证
            // return true 验证通过 false 不通过
            isValid: function(){
                this.data['title'] = this.panels.$propertyPanel.find('[name="title"]').val();
                return true;
            }
        });
    }
)
;
