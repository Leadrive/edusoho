webpackJsonp(["app/js/product/exit/index"],{a832146e28d1e2e6ab72:function(e,n,t){"use strict";var r=$("#refund-form"),a=r.parents(".modal"),o=r.find("#reasonNote"),i=r.find(".warnning");r.find('[name="reason[type]"]').on("change",function(){var e=$(this),n=e.find("option:selected");"other"==n.val()?o.val("").removeClass("hide"):o.addClass("hide").val(n.text()),i.text("")}).change(),o.on("change",function(){var e=$(this);e.val().length>120?i.text(Translator.trans("order.refund.reason_limit_hint")):0==e.val().length?i.text(Translator.trans("order.refund.reason_required_hint")):i.text("")}).change(),r.on("submit",function(){return"reason"==r.find("#reasonType").val()?(i.text(Translator.trans("order.refund.reason_choose_hint")),!1):o.val().length>120?(i.text(Translator.trans("order.refund.reason_limit_hint")),!1):0==o.val().length?(i.text(Translator.trans("order.refund.reason_required_hint")),!1):void a.find("[type=submit]").button("loading").attr("disabled",!0)})}},["a832146e28d1e2e6ab72"]);