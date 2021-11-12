// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================


const topHeaderClose = document.querySelector('.top-header_close');

topHeaderClose.addEventListener('click', function () {
	let parent = this.closest('.top-header');
	parent.querySelector('.top-header_inner').remove();
	parent.querySelector('.header_inner').style.top = '25px';
})