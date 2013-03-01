/* ===========================================================
* ExternalModal
* extends/requires bootstrap-modal
* By Jason Gill @gilluminate
* https://github.com/gilluminate/Bootstrap-Fullscreen-Modal
* ===========================================================
* Allows href to load as iFrame instead of ajax.
* Resizes modal window to fit viewport.
* ===========================================================
* Use data-toggle="external-modal"
* (instead of bootstrap data-toggle="modal").
* Include an iframe with empty src='' inside .modal-body div.
* ========================================================== */
;(function($) {
	$.fn.externalModal = function(){	
		return this.each(function(index){
			var element = $(this);
			var em = $(element.attr('data-target')),
				url = element.attr('href'),
				verticalMargins = Math.floor(parseInt(em.css('margin-top'), 10)+parseInt(em.css('margin-bottom'), 10)),
				windowH = $(window).height(),
//TODO: make this value dynamic
				modalChromeH = 100; //hard-coded guess. seems to work.
			em.css('height',Math.floor(windowH-verticalMargins)+"px")
			.find('.modal-body').css('height',Math.floor(windowH-modalChromeH-verticalMargins)+"px");
			em.find('iframe').attr('src',url);
			em.modal('show').on('hidden',function(){
				em.find('iframe').attr('src','');
			});
		});
	};
	$(function () {
		$('body').on('click','[data-toggle="external-modal"]',function(e){
			e.preventDefault();
			$(this).externalModal();
		})
	})
})(jQuery);