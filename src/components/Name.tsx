const defaults = ["Goose", "Billy", "Sally"]

export default function Name() {
    const name = new URL(window.location.href).searchParams.get("name") ??
        defaults[Math.floor(Math.random() * defaults.length)];

    return (
        <h1>{name}</h1>
    )
}
