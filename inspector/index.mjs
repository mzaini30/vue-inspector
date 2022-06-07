export default {
	install (app){
		app.mixin({
			data(){
				return {
					active: false
				}
			},
			methods: {
				init(){
					const location = this.$.vnode.type.__file

					if (this.active){
						document.title = `[dev] ${document.title.replace('[dev] ', '')}`
					} else {
						document.title = document.title.replace('[dev] ', '')
					}

					if (
						location 
						&& this.$el.innerText != undefined 
						&& this.$el.getAttribute('data-v-location') == undefined
					){
						this.$el.setAttribute('data-v-location', location)
						this.$el.setAttribute('title', location.split('/').reverse()[0])
						this.$el.addEventListener('click', () => {
							if (this.active){
								prompt('', location)
							}
						})
					}
				}
			},
			mounted(){
				document.addEventListener('keypress', x => {
					if (x.metaKey == true && x.key == '/'){
						this.active = !this.active
						this.init()
					}
				})
				this.init()
			}
		})
	}
}