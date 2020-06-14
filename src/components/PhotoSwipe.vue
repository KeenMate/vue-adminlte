<template>
	<div ref="pswp" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="pswp__bg"></div>
		<div class="pswp__scroll-wrap">
			<div class="pswp__container">
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
			</div>
			<div class="pswp__ui pswp__ui--hidden" style="position: static">
				<div class="pswp__top-bar">
					<div class="pswp__counter"></div>
					<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
					<button class="pswp__button pswp__button--share" title="Share"></button>
					<div class="pswp__preloader">
						<div class="pswp__preloader__icn">
							<div class="pswp__preloader__cut">
								<div class="pswp__preloader__donut"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
					<div class="pswp__share-tooltip"></div>
				</div>
				<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
				</button>
				<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
				</button>
				<div class="pswp__caption">
					<div class="pswp__caption__center"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PhotoSwipe from "photoswipe"
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default.min"

export default {
	name: "PhotoSwipe",
	methods: {
		showImage (images, index) {
			const gallery = new PhotoSwipe(this.$refs.pswp, PhotoSwipeUI_Default, images, this.options)
			gallery.init()
			gallery.goTo(parseInt(index, 10))
		}
	},
	data () {
		return {
			options: {
				history: false,
				focus: false,
				showHideOpacity: true,
				clickToCloseNonZoomable: true,
				showAnimationDuration: 0,
				hideAnimationDuration: 0,
				tapToClose: true,
				spacing: 0,
				loop: false
			}
		}
	}
}
</script>

<style scoped>
</style>
