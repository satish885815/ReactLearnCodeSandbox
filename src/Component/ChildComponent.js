function ChildComponent(props) {
  return (
    <button onClick={() => props.greatParent("child")}>Great Parent</button>
  );
}
export default ChildComponent;
