import Navbar from "@/components/navbar";
import Grid from "@/components/grid";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto flex flex-col items-center sm:items-start">
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </main>
    </>
  );
}
