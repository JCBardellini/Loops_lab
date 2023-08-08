// 1. Write a for loop that logs 0-15;

for (let i = 0; i <= 15; i++) {
  console.log(i)
}
  

// 2. Write a for loop that counts from 15-0

for (let i = 15; i >= 0; i--){
  console.log(i)
}

// 3. Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.

let laps = 0;

for (let i = 0; i <= 10; i++) {
  laps = i;
  console.log("there is another lap")
}
console.log(laps)



// 4. Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.

let age = 45
let whatsMyAge;

for (let i = 0; i <= 100; i++) {
  if (age == i) {
    console.log("my age is " + i)
    break;
  } else {
    console.log("age doesn't match")
  }
}

// 5. Write a loop that logs all even numbers from 0-700.

for (let i = 0; i <= 700; i += 2) {
  console.log(i);
}

// 6. Write a loop that logs all odd numbers from 0-700.

for (let i = 0; i <= 700; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}

// 7. Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and always log ("happy new year! The year is now ????). You should also log if something was invented that year. For example when i = 1902 the code should log "happy new year! The year is now 1902." AND “the teddy bear is invented!”

let year;
for (let i = 1900; i <= 1949; i++) {
  console.log("Happy new year! The year is now " + i)
  if (i == 1900) {
    console.log("Happy new year! The year is now 1900. The Zeppelin was invented this year.")
  } else if (i == 1902) {
    console.log("Happy new year! The year is now 1902. The Teddy Bear was invented this year.")
  } else if (i == 1910) {
    console.log("Happy new year! The year is now 1910. The Talking Motion Pictured was invented this year.")
  } else if (i == 1913) {
    console.log("Happy new year! The year is now 1913. The Bra was invented this year.")
  } else if (i == 1918) {
    console.log("Happy new year! The year is now 1918. The Fortune Cookie was invented this year.")
  } else if (i == 1923) {
    console.log("Happy new year! The year is now 1923. The Traffic Signal was invented this year.")
  } else if (i == 1935) {
    console.log("Happy new year! The year is now 1935. The Radar was invented this year.")
  } else if (i == 1938) {
    console.log("Happy new year! The year is now 1938. The Ballpoint Pen was invented this year.")
  } else if (i == 1943) {
    console.log("Happy new year! The year is now 1943. The Slinky was invented this year.")
  }
}
