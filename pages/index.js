import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Timer from "../components/Timer";
import Button from "../components/Button";

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);

  const [sessions, setSessions] = useState(4);

  const [Break, setBreak] = useState(5);

  return (
    <div className=" bg-bg min-h-screen">
      <div className="bg-white max-w-2xl min-h-screen mx-auto">
        <Nav
          icon="ICON"
          title="Tomatodo"
          button={<Button styling="bg-prim" OnClick={<></>} value="test" />}
        />
        <Timer />
      </div>
    </div>
  );
}
