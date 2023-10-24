 (document).on("ajax:success", ".favorite-link", function(event) {
  var $link = (this);
  var responseData = event.detail[0];
  var $favoriteCount = $link.siblings(".favorite-count");
  
  $favoriteCount.text(responseData.favoriteCount);
 });