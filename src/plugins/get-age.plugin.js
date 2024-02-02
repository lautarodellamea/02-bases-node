// este archivo solo adapta un paquete en especifico, para que en el caso de que cambiempos el paquete no tengamos que cambiar y entrar a las entrañas de mi app ya que puede ser compley complicado, esto se denomina "PATRON ADAPTADOR" o "PATTERN ADAPTER"

// el dia de mañana si cambia o queremos cambiar el paquete, solo modificariamos este archivo

const getAgePlugin = require('get-age')

const getAge = (birthdate) =>{
  if(!birthdate) return new Error('birthdate is required')

  return getAgePlugin(birthdate)
}


module.exports = {
  getAge
}