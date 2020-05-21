export const updateErrorSelector = ({errors}) =>  {
    
    let return_errors;
    const {update_profile} = errors; 
    
    if (Object.keys(update_profile).length > 0){
        return_errors = errors.update_profile.response.data;
        
    }else{
        
        return null; 
    }
    //const update_errors = errors.update_profile.response.data; 

    //if(Object.values(update_errors).length === 0) return {};

    return return_errors; 

}