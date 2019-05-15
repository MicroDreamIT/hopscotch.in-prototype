export default {
    getDefaultValue(arr){
        let val =  arr.filter(value=>{
            if(value.default===1){

                return value
            }
        })[0]
        return '/images/'+val.path
    }
}