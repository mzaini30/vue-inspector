import {store} from './store.mjs'

export default {
	install (app){
		app.mixin({
			methods: {
				init(){
					const location = this.$.vnode.type.__file

					if (store.active){
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
					}
				}
			},
			mounted(){
				document.addEventListener('keypress', x => {
					if (x.key == 'k' && x.target.outerHTML.includes('<body')){
						this.init()
					}		
				})
				this.init()
			}
		})

		document.addEventListener('keypress', x => {
			if (x.key == 'k' && x.target.outerHTML.includes('<body')){
				store.active = !store.active
			}
		})

		document.addEventListener('click', x => {
      let target
      function show(x){
      	if (store.active){
      		prompt('', x)
      	}
      }

      let position = x.target
      function getTarget(){
        target = position.getAttribute('data-v-location')
        if (!target){
        	if (position.parentNode){
	        	position = position.parentNode
	        	getTarget()
        	}
        } else {
        	show(target)
        }
      }
      getTarget()
    })
	}
}