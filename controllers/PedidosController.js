
const { Pedido } = require('../models/index');


const PedidosController = {};

PedidosController.nuevoPedido = (req,res) => {
    
    let body = req.body;

    console.log("este es body",body)

    Pedido.create({
        precio: body.precio,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha,
        fechaDev: body.fecha
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

PedidosController.pedidoId = (req,res) => {

    Pedido.findAll({ where : { id : req.params.id }})
    .then(data => {
        console.log(data)
        res.send(data)
    });
}

PedidosController.todosPedidos = async (req,res) => {

    // let consulta = `SELECT usuarios.name AS nombre, peliculas.titulo AS titulo, usuarios.email AS correo
    // FROM usuarios INNER JOIN pedidos 
    // ON usuarios.id = pedidos.usuarioId INNER JOIN peliculas`; 

    // let resultado = await Pedido.sequelize.query(consulta,{
    //     type: Pedido.sequelize.QueryTypes.SELECT});

    // if(resultado){
    //     res.send(resultado);
    // }

        Pedido.findAll()
        .then(data => {
            res.send(data)
        });
    };

PedidosController.deleteById = (req,res) => {
    let id = req.params.id;

    try {

        Pedido.destroy({
            where : { id : id },
            truncate : false
        })
        .then(usuarioEliminado => {
            console.log(usuarioEliminado);
            res.send(`El pedido con la id ${id} ha sido eliminado`);
        })

    } catch (error) {
        res.send(error);
    }
}

PedidosController.deleteAll = (req,res) => {
    
    try {

        Pedido.destroy({
            where : {},
            truncate : false
        })
        .then(PedidosEliminados => {
            res.send(`Se han eliminado ${PedidosEliminados} pedidos`);
        })

    } catch (error) {
        res.send(error);
    }
}
module.exports = PedidosController;