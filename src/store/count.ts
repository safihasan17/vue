
import { defineStore } from "pinia";

export const  useCounterState = defineStore('counter', {
    state: () =>({
        count: 0,
        id: 0
    }),
    getters:{
        double:(state) =>state.count*2,
        triple: (state)=>state.count*3,
        square: (state) =>state.count*state.count,
    },

    actions: {
        increnment(){
            this.count++
        },
        decrement(){
            this.count--
        },
        reset(){
            this.count= 0
        },
        
        setId(_id: number){
            this.id =_id
        },
        random(){
            this.id= Math.floor(Math.random()*100)
        }

    }
});