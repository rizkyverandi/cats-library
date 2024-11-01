import Container from "./Container";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <section className="m-auto w-full mt-7">
      <Container>
        <div className="py-8 flex justify-center flex-col items-center h-screen ">
          <MoonLoader size={100} color="white" />
        </div>
      </Container>
    </section>
  );
};

export default Loading;
