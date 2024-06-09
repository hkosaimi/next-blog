async function Madri() {
  const res = await fetch(`https://api.github.com/users`);
  const data = await res.json();
  console.log(data[0]);
  return <div>page</div>;
}
export default Madri;
