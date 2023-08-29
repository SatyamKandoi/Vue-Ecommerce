interface Rating {
    rate:number ,
    count:number

}

interface Item {
    id:number,
    title:string,
    description:string,
    category:string,
    image:string
    rating:Rating
}

export default Item