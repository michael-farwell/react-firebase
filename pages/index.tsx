import { toast } from "react-hot-toast";

export default function Home () {
  return (
    <div>
      <button onClick={ () => toast.success("Toast is Ready!") }>
        Make Me Some Toast
      </button>
    </div>
  );
}
