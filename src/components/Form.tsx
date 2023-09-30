import { useMemo, useState } from "preact/hooks";

export default function Form() {
  const [name, setName] = useState("");
  const url = useMemo(
    () => `/results?name=${encodeURIComponent(name)}`,
    [name],
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className={"mr-2"} htmlFor={"name"}>
          Name
        </label>
        <input
          name={"name"}
          value={name}
          type={"text"}
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <a href={url}>Submit</a>
    </form>
  );
}
