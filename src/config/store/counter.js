import { defineStore } from 'pinia'
export const useCounter = defineStore('counter', {
	state: () => ({
		count:0
	}),
	actions: {
		add(){
			this.count ++
			this.saveLocal()
		},
		remove(){
			this.count --
			this.saveLocal()
		},
		saveLocal(){
			localStorage.setItem('count',this.count)
		},
		restoreLocal(){
			const c = localStorage.getItem('count')
			if(c) this.count = c
		}
	},
	getters: {
		getCount: (state) => state.count
	}
})