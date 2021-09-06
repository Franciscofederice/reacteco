
const prod = {id: 'asdfsadf', url:'https://labicikleta.com/wp-content/uploads/2016/07/FeatureBiciMontana-770x513.jpg' , descripcion: 'bicicleta', price: 123, name: 'producto', stock: 23}

export const getProduc = new Promise((resuelto)=>{
    setTimeout(() => {
        resuelto(prod)        
    }, 5000);
})