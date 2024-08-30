// Your code here
// Define the Cat class
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    // Method to return the cat's speech
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Define the Dog class
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    // Method to return the dog's speech
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Define the Bird class
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    // Method to return the bird's speech based on its sex
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example instances
  let cat = new Cat("Whiskers", "female");
  let dog = new Dog("Rex", "male");
  let birdMale = new Bird("Polly", "male");
  let birdFemale = new Bird("Lola", "female");
  
  console.log(cat.speak()); // Whiskers says meow!
  console.log(dog.speak()); // Rex says woof!
  console.log(birdMale.speak()); // It's me! Polly, the parrot!
  console.log(birdFemale.speak()); // Lola says squawk!
  