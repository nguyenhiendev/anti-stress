var sound;!function(t){(sound||(sound={})).check=function(){!function t(){"undefined"==typeof aidn||"undefined"==typeof jQuery?setTimeout(function(){return t()},10):$(function(){(new a).initialize()})}()};var a=function(){function t(){this.__titles=[],this.__emSounds=[],this._val=""}return t.prototype.initialize=function(){var a=this;this._audio=new aidn.Audio,this._audio.addEndEvent(function(){return a._playerStop()});var t="../shared/main/data/sound.json",e=$("body").attr("data-ver");e&&(t+="?"+e),$.ajax({url:t,dataType:"json"}).then(function(t){return a._loadComplete(t)})},t.prototype._loadComplete=function(t){for(var a=this,e=t.aidn.base,n=t.aidn.baseLyrics,s=t.aidn.list,i=s.length,r="",o=0;o<i;o++){var l=s[o],p=l.title,c="";l.vocal?c+="VOCAL: "+l.vocal+" / ":l.voice&&(c+="VOICE: "+l.voice+" / "),c+="BPM: "+l.bpm;var h=e+l.mp3,u=e+l.mp3Off,_=l.twitter,d=l.niconico,f=l.youtube,m=n+l.lyrics;if(l.mp3)var y=(b=h.split("/"))[b.length-1];if(l.mp3Off)var v=(b=u.split("/"))[b.length-1];var g=u;l.mp3&&(g=h);var b,C=p.toLowerCase()+" ";(b=C.match(/[\u30a1-\u30f6]/g))&&(C+=C.replace(/[\u30a1-\u30f6]/g,function(t){var a=t.charCodeAt(0)-96;return String.fromCharCode(a)})+" "),l.search&&(C+=l.search.toLowerCase()),this.__titles[o]=C,r+='<div class="sound">',r+='<p class="title">'+p+"</p>",r+='<p class="text">'+c+"</p>",r+="<div>",r+='<a href="" class="bt_play" data-path="'+g+'"><span>PLAY</span></a>',l.mp3?r+='<a href="'+h+'" download="'+y+'"><span>MP3</span></a>':r+='<span class="none">MP3</span>',l.mp3Off?r+='<a href="'+u+'" download="'+v+'"><span>MP3 (inst)</span></a>':r+='<span class="none">MP3 (inst)</span>',_?(r+='<a href="'+_+'" target="_blank" class="twitter"><span>TWITTER</span></a>',r+='<span class="none">　</span>'):(r+=f?'<a href="'+f+'" target="_blank" class="youtube"><span>YOU TUBE</span></a>':'<span class="none">YOU TUBE</span>',r+=d?'<a href="'+d+'" target="_blank" class="niconico"><span>NICONICO</span></a>':'<span class="none">NICONICO</span>'),l.lyrics?r+='<a href="" class="bt_lyrics" data-title="'+p+'" data-path="'+m+'"><span>LYRICS</span></a>':r+='<span class="none">LYRICS</span>',r+="</div>",r+="</div>"}$("#sound").html(r),$(".bt_play").on("click",function(t){return a._clickPlay(t)}),$(".bt_lyrics").on("click",function(t){return a._clickLyrics(t)}),$(".niconico,.youtube,.twitter").on("click",function(){return a._playerStop()}),$("#bt_close").click(function(t){$("#lyrics_base").stop().fadeOut(200)}),$("#loading").hide();var T=$(".sound");for(i=T.length,o=0;o<i;o++)this.__emSounds[o]=$(T.get(o));$("#search").show(),this._emInput=$("#in_search"),this._emInput.on("change",function(t){return a._changeText(t)}),setInterval(function(){return a._checkSearcText()},200)},t.prototype._changeText=function(t){""==this._emInput.val().replace(/[ 　\t]*/g,"")&&this._emInput.val(""),this._checkSearcText()},t.prototype._checkSearcText=function(){var t=this._emInput.val();t=t.toLowerCase(),this._val!=t&&(this._val=t,this._search(t))},t.prototype._search=function(t){for(var a=this.__titles.length,e=""==t,n=0;n<a;n++){var s=this.__titles[n],i=this.__emSounds[n];e||0<=s.indexOf(t)?i.show():i.hide()}},t.prototype._clickPlay=function(t){var a=this;t.preventDefault();var e=$(t.currentTarget).attr("data-path");this._nowPath!=e?(this._playerStop(),this._nowPath=e,this._tmpElem=$(t.target),this._tmpTitle=$(t.currentTarget).parent().parent().children(".title"),this._audio.load([e]),this._audio.play(0,!1,function(){return a._playerPlay()}),this._tmpElem.addClass("loading"),this._tmpElem.text("LOADING")):this._playerStop()},t.prototype._clickLyrics=function(t){var a=this;t.preventDefault();var e=$(t.currentTarget).attr("data-path"),n=$(t.currentTarget).attr("data-title");this.__title=n,$("#lyrics_area").html('<h2 class="loading">-</h2>'),$("#lyrics_base").stop().fadeIn(300),$.ajax({url:e,dataType:"text"}).then(function(t){return a._lyricsComplete(t)},function(){return a._lyricsError()})},t.prototype._lyricsComplete=function(t){for(var a="",e=t.split("\n"),n=e.length,s=0;s<n;s++){var i=e[s],r=i.match(/｛.+?｝/g);if(r)for(var o=0;o<r.length;o++){var l=r[o],p=l.substr(1,l.length-2).split("／");2<=p.length&&(i=i.replace(l,"<ruby><rb>"+p[0]+"</rb><rp>＜</rp><rt>"+p[1]+"</rt><rp>＞</rp></ruby>"))}a+=i+"<br>"}$("#lyrics_area").html("<h2>"+this.__title+"</h2><p>"+a+"</p>"),$("#lyrics_area").scrollTop(0)},t.prototype._lyricsError=function(){$("#lyrics_base").stop().fadeOut(200)},t.prototype._playerPlay=function(){this._tmpElem&&(this._tmpElem.removeClass("loading"),this._tmpElem.text("STOP"),this._tmpTitle.addClass("playing"))},t.prototype._playerStop=function(){this._tmpElem&&(this._tmpElem.removeClass("loading"),this._tmpElem.text("PLAY"),this._tmpElem=null,this._tmpTitle.removeClass("playing"),this._tmpTitle=null),this._audio.pause(),this._nowPath=""},t}()}(),sound.check();