import { faker } from '@faker-js/faker';

interface Student {
  id: number;
  name: string;
  age: number;
  class: string
}

const students = [
  { id: 0, name: 'Angelica DuBuque', age: 8, class: '5E' },
  { id: 1, name: 'Ebony Schroeder', age: 12, class: '4C' },
  { id: 2, name: 'Lynda Effertz', age: 6, class: '3C' },
  { id: 3, name: 'Jodi Grady Sr.', age: 14, class: '5A' },
  { id: 4, name: 'Ian Kutch', age: 13, class: '3C' },
  { id: 5, name: 'Kirk Nader', age: 8, class: '3A' },
  { id: 6, name: 'Antoinette Krajcik', age: 10, class: '5A' },
  { id: 7, name: 'Jerome Olson', age: 7, class: '4A' },
  { id: 8, name: 'Beatrice Spinka', age: 14, class: '1E' },
  { id: 9, name: 'Ebony Jakubowski IV', age: 5, class: '1E' },
  { id: 10, name: 'Donnie Hoeger', age: 6, class: '3C' },
  { id: 11, name: 'Dr. Dan Hammes', age: 11, class: '4D' },
  { id: 12, name: 'Leland Anderson', age: 8, class: '5D' },
  { id: 13, name: 'Ana Lockman', age: 6, class: '2F' },
  { id: 14, name: 'Mike Rogahn', age: 10, class: '1C' },
  { id: 15, name: 'Erin Murray', age: 11, class: '5F' },
  { id: 16, name: 'Lorene Upton', age: 15, class: '2A' },
  { id: 17, name: 'Meredith Champlin', age: 9, class: '1F' },
  { id: 18, name: 'Audrey DuBuque', age: 17, class: '2F' },
  { id: 19, name: 'Julius Ruecker', age: 8, class: '2F' },
  { id: 20, name: 'Julia Hayes', age: 7, class: '4E' },
  { id: 21, name: 'Curtis Lockman', age: 6, class: '4B' },
  { id: 22, name: 'Katherine Hudson', age: 11, class: '5B' },
  { id: 23, name: 'Emily Hartmann', age: 12, class: '5B' },
  { id: 24, name: 'Orville Kilback', age: 10, class: '5B' },
  { id: 25, name: 'Merle Ryan', age: 9, class: '2E' },
  { id: 26, name: 'Mr. Forrest Connelly', age: 18, class: '2E' },
  {
    id: 27,
    name: 'Mrs. Guadalupe Bednar-Feeney MD',
    age: 9,
    class: '5E'
  },
  { id: 28, name: 'Megan Casper', age: 15, class: '1B' },
  { id: 29, name: 'Paula Nolan', age: 17, class: '1B' },
  { id: 30, name: 'Colin Kiehn II', age: 9, class: '1C' },
  { id: 31, name: 'Chester Abbott-Berge II', age: 7, class: '3C' },
  { id: 32, name: 'Dr. Mona Swaniawski', age: 5, class: '3A' },
  { id: 33, name: 'Tyler Rau', age: 9, class: '2B' },
  { id: 34, name: 'Connie Dicki', age: 16, class: '2A' },
  { id: 35, name: 'Dixie Kuhn', age: 10, class: '5A' },
  { id: 36, name: 'Ricardo Rath', age: 10, class: '2E' },
  { id: 37, name: 'Elena Stamm', age: 7, class: '5D' },
  { id: 38, name: 'Gustavo Prohaska', age: 6, class: '5B' },
  { id: 39, name: 'Kirk Bergnaum', age: 13, class: '3B' },
  { id: 40, name: 'Dwayne Leuschke', age: 10, class: '2E' },
  { id: 41, name: 'Janis Terry', age: 8, class: '1C' },
  { id: 42, name: 'Levi Barton', age: 5, class: '5C' },
  { id: 43, name: "Milton O'Connell", age: 15, class: '1C' },
  { id: 44, name: 'Tommie Thiel', age: 11, class: '3D' },
  { id: 45, name: 'Nadine Erdman', age: 17, class: '5E' },
  { id: 46, name: 'Dr. Ira Beier', age: 13, class: '3B' },
  { id: 47, name: 'Ross Reilly DVM', age: 16, class: '4C' },
  { id: 48, name: 'Roosevelt Kohler', age: 5, class: '2C' },
  { id: 49, name: 'Mr. Lyle Schroeder', age: 5, class: '5B' },
  { id: 50, name: 'Sonia Bradtke', age: 8, class: '2B' },
  { id: 51, name: 'Kristen Roberts', age: 6, class: '2D' },
  { id: 52, name: 'Ms. Candice Krajcik', age: 17, class: '2D' },
  { id: 53, name: 'Dwight Ritchie', age: 7, class: '2C' },
  { id: 54, name: 'Marshall Davis', age: 9, class: '5C' },
  { id: 55, name: 'Chad Howell', age: 16, class: '5B' },
  { id: 56, name: 'Miss Helen Schoen II', age: 14, class: '2F' },
  { id: 57, name: 'Carolyn Hudson', age: 6, class: '4C' },
  { id: 58, name: 'Adam Powlowski', age: 17, class: '4D' },
  { id: 59, name: 'Beulah Smith', age: 8, class: '3C' },
  { id: 60, name: 'Joanna Reilly', age: 11, class: '2D' },
  { id: 61, name: 'Monique Kutch', age: 12, class: '1D' },
  { id: 62, name: 'George Cartwright', age: 14, class: '5F' },
  { id: 63, name: 'Bernadette Osinski', age: 13, class: '1B' },
  { id: 64, name: 'Glenn Beier III', age: 7, class: '3C' },
  { id: 65, name: 'Muriel Leannon', age: 13, class: '2A' },
  { id: 66, name: 'Dr. Joy Jenkins', age: 17, class: '3F' },
  { id: 67, name: 'Brittany Anderson-Hegmann MD', age: 8, class: '1A' },
  { id: 68, name: 'Tim Jacobs II', age: 8, class: '4A' },
  { id: 69, name: 'Peggy Gorczany', age: 18, class: '2B' },
  { id: 70, name: 'Carla Mayer', age: 9, class: '3A' },
  { id: 71, name: 'Ian Schinner', age: 11, class: '5C' },
  { id: 72, name: 'Thelma Upton', age: 14, class: '2D' },
  { id: 73, name: 'Johanna Weissnat', age: 10, class: '4E' },
  { id: 74, name: 'Dr. Dwight Gusikowski', age: 18, class: '2F' },
  { id: 75, name: 'Sabrina DuBuque', age: 10, class: '2F' },
  { id: 76, name: 'Tasha Kassulke', age: 12, class: '2F' },
  { id: 77, name: 'Yvonne Steuber', age: 5, class: '1F' },
  { id: 78, name: 'Roderick Larkin', age: 18, class: '1F' },
  { id: 79, name: 'Dustin Lynch', age: 18, class: '5C' },
  { id: 80, name: 'Candace Conn', age: 18, class: '4B' },
  { id: 81, name: 'Lionel Johnson PhD', age: 8, class: '3E' },
  { id: 82, name: 'Judith Hartmann', age: 18, class: '4E' },
  { id: 83, name: 'Josh Huels', age: 12, class: '3E' },
  { id: 84, name: 'Mr. Steve Windler', age: 10, class: '1E' },
  { id: 85, name: 'Scott Veum', age: 18, class: '2E' },
  { id: 86, name: 'Pearl Kiehn', age: 5, class: '1A' },
  {
    id: 87,
    name: "Mr. Jonathon O'Conner-Lubowitz",
    age: 15,
    class: '4F'
  },
  { id: 88, name: 'Floyd Upton', age: 9, class: '3E' },
  { id: 89, name: 'Charlotte Hoeger', age: 10, class: '5A' },
  { id: 90, name: 'Kristy Dietrich', age: 9, class: '4E' },
  { id: 91, name: 'Marc Ernser-Hintz', age: 12, class: '3F' },
  { id: 92, name: 'June Feest', age: 5, class: '2E' },
  { id: 93, name: 'Veronica Fisher', age: 17, class: '2D' },
  { id: 94, name: 'Winston Berge', age: 9, class: '4B' },
  { id: 95, name: 'George Feil', age: 5, class: '3F' },
  { id: 96, name: 'Miss Bertha Lehner', age: 9, class: '3B' },
  { id: 97, name: 'Courtney Schuster IV', age: 12, class: '3B' },
  { id: 98, name: 'Mrs. Laura Stark', age: 16, class: '4D' },
  { id: 99, name: 'Shannon Muller', age: 8, class: '1C' }
]

// const letters = ["A", "B", "C", "D", "E", "F"]

// const students: Student[]= []

// for(let i=0; i<100; i++){
//   students.push({
//     id: i,
//     name: faker.person.fullName(),
//     age: faker.number.int({min: 5, max: 18}),
//     class: `${faker.number.int({min: 1, max: 5})}${letters.sort(()=>Math.random() - 0.5)[0]}`
//   })
// }

// console.log(students)


export default students