const product = {
    label: 'PC',
    stock: 100,
    price: 1299.99
}

const trans = (type,{label = 'No Product Selected',stock =0} = 0 ) => {

    console.log(type,label,stock)

}


trans('order')