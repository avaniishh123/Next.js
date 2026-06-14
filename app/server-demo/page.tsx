type User = {
  id: number;
  name: string;
};


async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function ServerDemo() {
  console.log("Running on SERVER");

  return (
    <div>
      <h1>Server Component</h1>
      <p>This runs on the server.</p>
    </div>
  );
}