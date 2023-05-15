function Person(props: any) {
  return <div>{props.name}</div>;
}

const Greet = (props: any) => {
  return (
    <>
      <span>
        Hello, <Person name={props.name} />
      </span>
    </>
  );
};

export default Greet;
