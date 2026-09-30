let first = 5;

first = 10;

// &&    ||   !

if (first > 5 && first < 15) {
  console.log(1);
}

if (first > 5 || first < 15) {
  console.log(2);
}

if (!(first > 5)) {
  console.log(3);
}

function func(x, y, z) {
  const a = 5;
  const b = 6;
  const c = 12;

  return a + b + c;
}

func();
func();
func();
func();

const arr = [6, 5, 1, 6, 0];
const a = arr.map((x) => x * 2); // [12, 10, 2, 8, 0]

const b = a.filter((x) => x > 7); //[12, 10, 8]

arr.sort((a, b) => a < b);

arr.forEach((x) => {
  // asdas
});

const str = "HELLO WORLD ITSMY FIRST WORLD STRING. KJHASD AKSJDH AKSDJH";
str.split("STR");

async function func1() {
  console.log(1);
  return 1;
}

const s = await func1();
