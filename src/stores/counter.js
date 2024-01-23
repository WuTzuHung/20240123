import { defineStore } from "pinia";
export default defineStore("counter", {
// data(){}
    state(){
        return{
            location:1
            
        }
    },
    // computed
    getters:{
        locationInfo(){
            return `現在位置: ${this.location} `
        }
    },
// methods
    actions:{
        getLocation(){
            console.log(this.location)
        },
        setLocation(num) {
            this.location = num;
        },
        getData(){
            fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                })
        },
    }
})
