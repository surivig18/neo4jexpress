import DB from '../config/db';

let movie = {
    name : {type : String},
    year : {type : Number}
};

export function getMovieList(){
    let db  = new DB();
    db.readData().then(function(result){
        console.log(result);
    });

}



