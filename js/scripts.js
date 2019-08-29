$(document).ready(function() {
  $("button#original").click(function() {
    $("body").removeClass();
    $("p, h1, h2, h3, h4, li").removeClass();
  });

  $("button#switch").click(function() {
    $("body").removeClass();
    $("body").addClass("switch-background");
    $("p, h1, h2, h3, h4, li").addClass("switch-text");
  })
})
