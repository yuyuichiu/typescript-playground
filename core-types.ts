enum Role { ADMIN, READONLY, AUTHOR } // Behind the scene, assigned 0, 1, 2

type User = { name: string, age: number, role: Role, hobbies: object[] }

let person = {
  name: 'Wojak',
  age: 50,
  role: Role.READONLY,
  hobbies: ['Buy bitcoin', 'Stay at home']
}

// OR

let person2:User = {
  name: 'Joseph',
  age: 65,
  role: Role.READONLY,
  hobbies: [{ activity: 'sport' }]
}

console.log(person.role);