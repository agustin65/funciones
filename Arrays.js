
const DropOne = (Array, toDrop, Index) => {
    for (let i in Array) {
        let Aux = null
        Index ? Aux = Array[i][Index] : Aux = Array[i]
        if (Aux == toDrop) {
            Array.splice(i, 1)
            break
        }
    }
    return Array
}
