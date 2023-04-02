import useStore from "./productStore";

export default function Counter() {
  const increaseCount = useStore((product) => product.increase);
  const decreaseCount = useStore((product) => product.decrease);
  return (
    <div className="Counter">
      <button onClick={() => increaseCount()}>Increase</button>
      <button onClick={() => decreaseCount()}>Decrease</button>
      hello
    </div>
  );
}
