$(function(){var a=$("#j-initdata").val(),b=$("#j-pageID").val();a=a.length?$.parseJSON(a):Defaults[b],$(".j-pagetitle").text(a.page.title),$(".j-pagetitle-ipt").val(a.page.title),_.each(a.PModules,function(a,b){var c=0==b?!0:!1;HYD.DIY.add(a,c)}),_.each(a.LModules,function(a){HYD.DIY.add(a)}),$("#j-savePage").click(function(){return HYD.DIY.Unit.getData()?($.ajax({url:window.location.href,type:"post",dataType:"json",data:{content:JSON.stringify(HYD.DIY.Unit.getData()),id:b,is_preview:0},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?HYD.hint("success","恭喜您，保存成功！"):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1):void 0}),$("#j-saveAndPrvPage").click(function(){return HYD.DIY.Unit.getData()?($.ajax({url:window.location.href,type:"post",dataType:"json",data:{content:JSON.stringify(HYD.DIY.Unit.getData()),id:b,is_preview:1},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，保存成功！"),setTimeout(function(){window.open(a.link)},1e3)):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1):void 0}),$("#j-homeRecover").click(function(){var a=($(this),$("#j-pageID").val());return $.jBox.show({title:"还原模板",content:"确认还原为初始状态吗？",btnOK:{onBtnClick:function(b){$.jBox.close(b),$.ajax({url:"/Shop/home_page_recover",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，恢复成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，恢复失败："+a.msg),$.jBox.hideloading()}})}}}),!1})});