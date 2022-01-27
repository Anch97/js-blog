export class TransformService {
    static fbObjectToArray(fbData) {
        //returtning array of objects from fb database with new parameter 'id'
        return Object.keys(fbData).map(key => {
            const item = fbData[key]
            item.id = key
            return item
        })
    }
}   