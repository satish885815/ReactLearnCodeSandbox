import React from "react";

function MemoComp({ name }) {
  console.log("Memo Component");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
export default React.memo(MemoComp);
