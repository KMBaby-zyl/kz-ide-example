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
            "html_edit": '<div><a href="javascript:;" class="btn-backtotop"> \
                <div class="arrow"></div> \
                <div class="stick"></div> \
                </a></div>',
            "config_edit": '<form action="javascript:;" method="post" onsubmit="return false;"> \
                                <fieldset class="js-tabpanel-property"> \
                                    <div class="form-row"><label>我的名字</label><div class="form-cell"><input type="text" name="title" value="硕硕" placeholder="" class=""></div></div> \
                                    <div class="form-row"><label>颜色</label><div class="form-cell"><input type="text" name="color" value="#666" placeholder="" class=""></div></div> \
                                </fieldset> \
                            </form>',
            init: function() {
                Component.prototype.init.apply(this, arguments);
            },
            renderConfigurator: function () {
                var that = this;
                that.panels = uiHelper.createConfiguartor(this);


            },

            renderView: function () {
                this.$viewEl.html(mustache.render(this.html_edit,{}));
            },

            isValid: function(){
                return true;
            }
        });
    }
)
;
