const { v4: uuidv4Plugin } = require('uuid');


const getUUID = () => {
  return uuidv4Plugin()

}

module.exports = {
  getUUID
}