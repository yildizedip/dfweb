/**
 * Created by pardus on 12/29/17.
 */
function changeImage(){if($("#homeSlider img.current").next().size()>0){$("#homeSlider img.current").removeClass("current").next().addClass("current");$("#homeSlideNav li.active").removeClass("active").next().addClass("active")}else{$("#homeSlider img.current").removeClass("current");$("#homeSlider img:first-child").addClass("current");$("#homeSlideNav li.active").removeClass("active");$("#homeSlideNav li:first-child").addClass("active")}var e=$("#homeSlideNav li.active").find("a.slideNavDetail").attr("href");$("#homeSlider a").attr("href",e)}function screenFixer(){if($(this).width()>854){$("#latestPosts").removeAttr("style");var e=$("#primary").height();var t=$("#secondary").height();var n=$("#social").height();if(e>t){var r=e-n;$("#latestPosts").height(r);$("#content").height("auto")}else{$("#latestPosts").height("auto");$("#content").outerHeight(t)}}else{$("#latestPosts , #content").height("auto")}}var $=jQuery;$(document).ready(function(){if($(".tableRanking").length>0){var e=$(".tableRanking tbody tr td.team");e.each(function(){var e=$(this).text();console.log(e);if(e.toLowerCase().indexOf("aÅŸakÅŸehir")>=0){$(this).parent("tr").addClass("ibfkPT")}})}var t=$("#otherPostsNav li");var n;if(t.length>0){t.first().addClass("active");$("#otherPostsImgCt img").attr("src",t.first().attr("data-src"));$("#otherPostsImgCt a, #otherPostsCt").attr("href",t.first().attr("data-href"));$("#otherPostTitle").html(t.first().attr("data-title"));$("#otherPostDetail").html(t.first().attr("data-detail"));t.on("mouseover",function(){var e=$(this);t.removeClass("active");e.addClass("active");$("#otherPostsImgCt img").attr("src",e.attr("data-src"));$("#otherPostsImgCt a, #otherPostsCt").attr("href",e.attr("data-href"));$("#otherPostTitle").html(e.attr("data-title"));$("#otherPostDetail").html(e.attr("data-detail"))})}$("#playMovie").fancybox();if($("#davetiye").size()>0){if($("#davetiye").html().trim()!=""){$.fancybox($("#davetiye"))}}if($.cookie("test_status")!="1"){$.cookie("test_status","1",{expires:.125})}$(".home .gallery .gallery-item a").attr("rel","homeGallery").fancybox({openEffect:"none",closeEffect:"none"});if($("p.sml_thankyou").size()>0){$.fancybox($("p.sml_thankyou"))}$("#homeSlider img:first-child").addClass("current");$("#homeSlideNav li:first-child").addClass("active");var r=setInterval(function(){changeImage()},5e3);$("#homeSlideNav li").click(function(){r=window.clearInterval(r);var e=$(this).find("a.slideNavDetail").attr("href");$("#homeSlider a").attr("href",e);$("#homeSlideNav li").removeClass("active");$(this).addClass("active");var t=$(this).index();$("#homeSlider img.current").removeClass("current");$("#homeSlider img").eq(t).addClass("current");r=window.setInterval(function(){changeImage()},5e3)});$(".entry-content a[href$='.jpg'] , .entry-content a[href$='.png'] , .entry-content a[href$='.gif'] , .entry-content a[href$='.jpeg']").each(function(){var e=$(this).find("img").attr("alt");var t=$(this).find("img").css("float");console.log(t);if(t=="none"){var n=$(this).parent().css("float");console.log(n);t=n;$(this).parent().addClass("hasSubTxt")}$(this).attr("title",e).addClass(t+"PicDesc").css("position","relative");$(this).append("<span class='picDesc'><em>"+e+"</em></span>");$(this).addClass("fancybox").attr("rel","gallery")});$(".fancybox").fancybox({openEffect:"none",closeEffect:"none"})})