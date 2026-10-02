enum Status {
  UNCOMPLETED = "UNCOMPLETED",
  PAID = "PAID",
  SENT = "SENT",
  COMPLETED = "COMPLETED",
}

const status: Status = Status.PAID;

// UNCOMPLETED PAID SENT COMPLETED

console.log(status);

// any  - unknow
function func(x: string, y: boolean): void {
  if (typeof x === "number") {
    const a = x * 3 + 5;
  }

  if (typeof x === "string") {
    const b = x.split(" ");
  }
}

enum MarriageStatus {
  SIGNLE = "SIGNLE",
  DATING = "DATING",
  MARRIED = "MARRIED",
  DIVCORDER = "DIVCORDER",
}

interface IPreson {
  age: number;
  name: string;
  surname: string;
  height?: number;
  isWorking: boolean;
  status: MarriageStatus;
}

const person: IPreson = {
  age: 30,
  name: "JOHN",
  surname: "DOE",
  height: 185,
  isWorking: true,
  status: MarriageStatus.MARRIED,
};

// Without Generics: 'any' strips away all auto-completion and safety
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);

  return await response.json();
}

const data = await fetchData("/api/user");
const data2 = await fetchData("/api/post");
// 'data' is 'any', so TS won't catch typos like data.usename instead of data.username!

// 1. Define the shapes of data your API might return
interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
}

// 2. Generic Fetch Function
// 'Promise<T>' tells TypeScript: "This async function resolves to type T"
async function apiFetch<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}

// 3. Usage: Strong typing for different endpoints!

// Fetching User Data
const user = await apiFetch<IUser>("https://api.example.com/user/1");
console.log(user.name); // ✅ Valid! TS knows 'user' has a 'name' property
// console.log(user.title); // ❌ Error: Property 'title' does not exist on type 'User'

// Fetching Product Data
const product = await apiFetch<IProduct>("https://api.example.com/product/42");
console.log(product.price); // ✅ Valid! TS knows 'product' has a 'price' property

type User = {
  name: string;
};

type strOrNum = string | number;
