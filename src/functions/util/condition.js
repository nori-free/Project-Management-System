/**
 * 複数の値を受け取って、1つでも空データがあればtrueを棄却する
 */
export const hasSomeEmptyData = (...datalist) => {
    let flag = false
    datalist.forEach(items => {
        flag = items ? flag : !items
    })
    return flag
}