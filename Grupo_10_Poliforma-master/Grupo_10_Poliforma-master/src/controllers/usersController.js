let users = {
    login: (req,res)=> res.render("users/login"),
    register: (req,res)=> res.render("users/register")
}


// Definición del controlador de usuarios
const userController = {
    userList: [],
  
    // Función para agregar un nuevo usuario
    addUser: function(username, email) {
      const newUser = {
        username: username,
        email: email
      };
      this.userList.push(newUser);
    },
  
    // Función para eliminar un usuario existente
    deleteUser: function(index) {
      if (index >= 0 && index < this.userList.length) {
        this.userList.splice(index, 1);
      }
    },
  
    // Función para obtener la lista de usuarios
    getUsers: function() {
      return this.userList;
    }
  };
  
  // Ejemplo de uso del controlador de usuarios
  userController.addUser("Usuario1", "usuario1@example.com");
  userController.addUser("Usuario2", "usuario2@example.com");
  userController.addUser("Usuario3", "usuario3@example.com");
  
  console.log("Lista de usuarios:");
  console.log(userController.getUsers());
  
  userController.deleteUser(1); // Eliminar el segundo usuario
  
  console.log("Lista de usuarios después de eliminar el usuario 2:");
  console.log(userController.getUsers());

  module.exports = users;

