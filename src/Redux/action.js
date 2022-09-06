import { GET_PROFILE_DETAILS_FAILURE, GET_PROFILE_DETAILS_REQUEST, GET_PROFILE_DETAILS_SUCCESS } from "./actionTypes"

// Write the action object creators in this file
export const getProfileRequest=()=>{

    return {

        type:GET_PROFILE_DETAILS_REQUEST,
    }
}
export const getProfileSuccess=(payload)=>{
    
    return {

        type:GET_PROFILE_DETAILS_SUCCESS,
        payload
    }
}
export const getProfileFailure=()=>{

    return {
        
        type:GET_PROFILE_DETAILS_FAILURE
    }
}