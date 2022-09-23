import { Header } from "~/components/layout/Header";

export default function Index() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="underline decoration-amber-600">Welcome to Remix</h1>
      </div>
    </>
  );
}
