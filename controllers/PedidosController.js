
const { Pedido } = require('../models/index');


const PedidosController = {};

PedidosController.nuevoPedido = (req,res) => {
    
    let body = req.body;

    console.log("este es body",body)

    Pedido.create({
        price: body.price,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha
    })
    .then(pedido => {
        if(pedido){
            res.send(pedido)
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

PedidosController.todosPedidos = async (req,res) => {

    let consulta = `SELECT usuarios.name AS nombre, peliculas.titulo AS titulo , peliculas.popularity AS top_rated, usuarios.nickname AS Nick, usuarios.email AS correo
    FROM usuarios INNER JOIN pedidos 
    ON usuarios.id = pedidos.usuarioId INNER JOIN peliculas 
    ON peliculas.id = pedidos.peliculaId WHERE popularity > 6 AND name LIKE '%Ra%' ORDER BY top_rated DESC`; 

    let resultado = await Pedido.sequelize.query(consulta,{
        type: Pedido.sequelize.QueryTypes.SELECT});

    if(resultado){
        res.send(resultado);
    }

}
module.exports = PedidosController;