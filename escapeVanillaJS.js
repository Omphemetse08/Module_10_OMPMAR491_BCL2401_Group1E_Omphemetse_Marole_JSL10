document.addEventListener("DOMContentLoaded", () => {
  // **Room 1 - Event Listener & Result ID**
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  // **Room 2 - Missing async & Intersection**
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]); // Added 'async'
    const commonConcepts = new Set(
      [...jsConcepts].filter((concept) => reactConcepts.has(concept))
    ); // Use filter for intersection
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // **Room 3 - Asynchronous Handling**
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    // Made the function async
    try {
      const response = await fetch("directions.json");
      const directions = await response.json();
      const message = await navigateLabyrinth(directions);
      document.getElementById("room3Result").textContent = message;
    } catch (error) {
      console.error("Error navigating labyrinth:", error);
    }
  });
});

function findMostRecentBook(books) {
  return books.reduce(
    (mostRecent, book) =>
      new Date(book.published) > new Date(mostRecent.published)
        ? book
        : mostRecent,
    books[0]
  ); // Fixed comparison & initial value
}

function findIntersection(setA, setB) {
  return new Set([...setA].filter((concept) => setB.has(concept))); // Use filter for intersection
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Added await for delay
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
