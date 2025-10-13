import { Suspense } from "react";
import { use } from "./hooks/use";

type FakeDataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

/*
  SIMPLE DEMO OF USING THE CUSTOM USE() HOOK
*/

// Creating Simple Cache To Avoid The Infinite Suspense or Infinite Refetching
// Cause Without it each time will be creating a new pending promise

const fetchPost = async function (url: string) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const dataCache = function () {
  const cache = new Map<string, Promise<unknown>>(); // We'll Store Based on the url

  return function (url: string) {
    const promise = cache.get(url) ?? fetchPost(url);
    cache.set(url, promise);
    return promise;
  };
};

const fetchData = dataCache();

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DisplayData id={1} />
    </Suspense>
  );
}

function DisplayData({ id }: { id: number }) {
  const data = use<FakeDataType>(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`)
  );
  return <p>{data.title}</p>;
}

export default App;
