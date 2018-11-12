/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
    /* el sprite contiene la ruta de la imagen
    */
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 10,
    direccion: "abajo",
    // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
    // y todo lo que haga falta para que cumpla con sus responsabilidades
    moverse: function moverseFn(movX, movY) {
        this.x += movX;
        this.y += movY;
    },

    girar: function girarFn(movX, movY) {
        const alto = 30;
        const ancho = 15;

        var direccionX = Math.sign(movX);
        var direccionY = Math.sign(movY);

        switch (direccionX) {
            case -1:
                this.direccion = "izquierda";
                break;

            case 1:
                this.direccion = "derecha";
                break;

            default:
                break;
        }

        switch (direccionY) {
            case -1:
                this.direccion = "arriba";
                break;

            case 1:
                this.direccion = "abajo";
                break;

            default:
                break;
        }
        
        switch (this.direccion) {
            case "arriba":
                this.ancho = ancho;
                this.alto = alto;
                this.sprite = 'imagenes/auto_rojo_arriba.png'
                break;
            
            case "abajo":
                this.ancho = ancho;
                this.alto = alto;
                this.sprite = 'imagenes/auto_rojo_abajo.png'
                break;

            case "izquierda":
                this.ancho = alto;
                this.alto = ancho;
                this.sprite = 'imagenes/auto_rojo_izquierda.png'
                break;
            
            case "derecha":
                this.ancho = alto;
                this.alto = ancho;
                this.sprite = 'imagenes/auto_rojo_derecha.png'
                break;
        }
    },

    perderVidas: function perderVidasFn(cantVidas) {
        this.vidas -= cantVidas;
    }
}
