//MAKE PRODUCT VARIANT SELECTION DISPLAY THE CORRECT IMAGE ON PRODUCT DETAIL PAGE
$(document).ready(function() {
  var productImages = $('div.thumbs .image a img'),
      productVariants = $('select.single-option-selector option');
      productVariantsHidden = $('#product-select option');

//ADD AN INCREMENTED DATA ATTRIBUTE TO EACH PRODUCT IMAGE THUMBNAIL ANCHOR TAG AND EACH PRODUCT VARIANT OPTION TAG
  $.each(productImages, function(i,k) {
    $(this).attr('data',i);
  });

  $.each(productVariants, function(i,k) {
    $(this).attr('data',i);
  });
  
  $.each(productVariantsHidden, function(i,k) {
    $(this).attr('data',i);
  });

//LISTEN FOR THE PRODUCT VARIANT OPTION BEING SELECTED
  $('select.single-option-selector').change(function() {
    var dataAttributeValue = $('select.single-option-selector option:selected').attr('data');
		$(productImages[dataAttributeValue]).click();		
	});
	
//LISTEN FOR PRODUCT IMAGE THUMBNAIL BEING CLICKED
	$('div.thumbs .image a img').click(function() {
		var imageAttributeValue = $(this).attr('data');
     $(productVariants[imageAttributeValue]).attr('selected','selected');
     $(productVariantsHidden[imageAttributeValue]).attr('selected','selected');
	});
});