import Banner from "@/components/Banner";
import Companies from "@/components/Companies";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Simple from "@/components/Simple";
import Table from "@/components/Table";
import Trade from "@/components/Trade";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <FAQ />
    </main>
  );
}
