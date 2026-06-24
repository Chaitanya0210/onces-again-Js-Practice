function setUsername(username){
    this.username = username
}


function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const name = new createUser("chaitnaya","rayewarchaitanya@gmail.com","124")

console.log(name);