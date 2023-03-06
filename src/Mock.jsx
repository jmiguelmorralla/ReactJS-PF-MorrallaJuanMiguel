const listadoProductos = [
    {
       id:1,
       nombre:"Balancín",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:12000,
       disponibilidad:true,
       img: '/img/balancin.png',
       category: "Motricidad gruesa"
    },

    {
       id:2,
       nombre:"Arcoiris",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:7000,
       disponibilidad:true,
       img:"/img/arcoiris.png",
       category: "Motricidad fina"
    },
    {
       id:3,
       nombre:"Casita",
       marca:"Confiture",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:4500,
       disponibilidad:true,
       img:"/img/casita.png",
       category: "Motricidad fina"
    },
    {
       id:4,
       nombre:"Bloques",
       marca:"Tak Tak",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:3000,
       disponibilidad:true,
       img:"/img/bloques.png",
       category: "Motricidad fina"
    },
    {
       id:5,
       nombre:"Torre",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:2900,
       disponibilidad:true,
       img:"/img/torre.jpg",
       category: "Motricidad gruesa"
    },
    {
       id:6,
       nombre:"Luna",
       marca:"Confiture",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:5900,
       disponibilidad:true,
       img:"/img/luna.png",
       category: "Motricidad fina"
    }
 ]

 export const getFech = new Promise((respuesta, reject) => {
    let url = "www.vitonio.com.ar";

    if (url === "www.vitonio.com.ar") {
        setTimeout(()=> {
            respuesta(listadoProductos)}, 
            2000       
        )
    } else {
        reject("Fallo de conexión.")
    }


 })

 export default listadoProductos;