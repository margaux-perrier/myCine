export interface IItem {
    id: number, 
    name : string, 
    avatar : string, 
    producerId : number, 
    producer? : {
        id : number, 
        firstname : string, 
        lastname : string
    }, 
    year : number, 
    duration? : number, 
    description : string, 
    type : string, 
    genre : number[]
}
