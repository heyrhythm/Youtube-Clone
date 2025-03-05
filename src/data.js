// api key from youtube google docs
export const API_KEY = 'AIzaSyDUB_sQ7HAk5GH2_2CBWftAGAc0cC7-8uk';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K';
    }
    else{
        return value;
    }
}