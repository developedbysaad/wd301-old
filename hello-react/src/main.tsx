console.log('This is a typescript file!!!');

interface User {
  name: string;
  id: number;
  isAdmin: boolean;
}

function addUser(user: User): string {
  return user.name + ' added successfully';
}

let userName = 'Jane';
let userID = 10;
let uniqueID = userName + userID;
console.log(uniqueID);

let namei: any = 'hello';
namei = 42;
namei = false;

function printHello(): void {
  console.log('Hello!');
}

function throwError(): never {
  throw new Error('An error occurred!');
}

let projectID: number[] = [1, 2, 3, 4, 5];
let taskList: string[] = ['Fix Camera', 'Buy Milk'];
