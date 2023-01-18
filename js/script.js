
const app = Vue.createApp({
    data(){
        return{
            mails:[],
            isLoading:true
        }
    },
    
    mounted(){
        for(let i=0; i<10;i++){ 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                const mail=(response.data.response)
                this.mails.push(mail)
        })
        }
            
         }

})



app.mount("#root")


    
