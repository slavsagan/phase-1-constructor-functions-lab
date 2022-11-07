function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}
let samson = new Scooter(2015, 'red', 'swoosh')
console.log(samson)
console.log(samson.year)
console.log(samson.color)
console.log(samson.model)

function Driver(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}
let allison = new Driver('Allison', '16 years', '2 years')
console.log(allison)
console.log(allison.name)
console.log(allison.age)
console.log(allison.experience)

function PickupLocation(address, city) {
  this.address = address
  this.city = city
}
let poshHotel = new PickupLocation('123 Broadway', 'New York City')
console.log(poshHotel)
console.log(poshHotel.address)
console.log(poshHotel.city)
