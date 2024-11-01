import { useEffect, Suspense } from "react";
import { fetchCats } from "./features/cats/catSlice";
import { useAppSelector } from "./store/hooks";
import { useDispatch } from "react-redux";
import Card from "./components/Card";
import Container from "./components/Container";
import { CatState } from "./features/cats/catSlice";
import Loading from "./components/Loading";
function App() {
  const cats = useAppSelector((state) => state.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);
  console.log(cats);

  if (cats.isLoading) {
    return <Loading />;
  }

  return (
    <section className="m-auto w-full mt-7">
      <Container>
        <div className="py-8">
          <h1 className="text-5xl text-center py-8 font-medium">
            Cats Library
          </h1>
          <div className="grid grid-cols-4 gap-4 pb-8">
            {cats.cats.slice(0, 8).map((cat: CatState, index: number) => (
              <Card
                key={index}
                imgUrl={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                desc={cat.description}
              />
            ))}
          </div>
          <div className="text-center">
            <button className="py-2 px-4 text-center bg-[#3b3b3b] text-white">
              Load more
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default App;
