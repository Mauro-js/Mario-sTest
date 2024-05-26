import Dropdown from "../../components/dropdown";
import tests  from "../../public/tests.json";

export default function Home() {
  return (
    <main>
      {
        tests.map(test => <Dropdown test={test} />)
      }
    </main>
  );
}
