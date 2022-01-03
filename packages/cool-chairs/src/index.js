const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/cool-chairs/src/index.js</pre>
    </>
  );
};

export default {
  name: "cool-chairs",
  roots: {
    coolChairs: Root
  },
  state: {
    coolChairs: {}
  },
  actions: {
    coolChairs: {}
  }
};
