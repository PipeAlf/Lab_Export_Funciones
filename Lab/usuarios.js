export function crearUsuario(nombre,rol){
    this.nombre = nombre;
    this.rol = rol;
    console.log("nombre: ",this.nombre);
    console.log("rol: ",this.rol);
    const fecha = new Date();
    const fechar=fecha.toLocaleDateString("es-CO")
    console.log("fechaRegistro: ",fechar);
    return {
        nombre: this.nombre,
        rol: this.rol,
        fecharegistro: fechar
    }
}