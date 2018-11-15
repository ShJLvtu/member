$(function(){
    $(window).scroll(function() {
        var nowTop = $(document).scrollTop();
        if(nowTop>200){
            $('.menu').css({
                position:'fixed',
                left:'50%',
                top:0,
                marginLeft:-480
            });
            $('.menu_pos').show();
        }
        else{
            $('.menu').css({
                position:'static',
                marginLeft:'auto'
            });
            $('.menu_pos').hide();
        }
      if(nowTop>400){
         $('.totop').fadeIn();
      }
      else{
        $('.totop').fadeOut();
      }
    });
    $('.totop').click(function() {
        $('html,body').animate({'scrollTop':0});
    });
})

window._bd_share_config={
"common":{"bdSnsKey":{},"bdText":"","bdMini":"2",
    "bdMiniList":["mshare","weixin","sqq","qzone","tsina","bdysc","renren","tqq","bdxc","kaixin001",
    "tqf","tieba","douban","bdhome","thx","ibaidu","meilishuo","mogujie","diandian","huaban","duitang",
    "hx","fx","youdao","sdo","qingbiji","people","xinhua","mail","isohu","yaolan","wealink","ty","iguba",
    "fbook","twi","linkedin","h163","evernotecn","copy","print"],"bdPic":"","bdStyle":"0","bdSize":"16"},
    "slide":{"type":"slide","bdImg":"3","bdPos":"right","bdTop":"103"}};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
