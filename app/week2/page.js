import Heading from "./heading";

export default function Page() {

    let a = 3;
    let b = 2;
    let c = a + b;

    return (
        <main>
            <Heading />
            <h1 className="text-4xl">Week2 Demo</h1>
            <p>This is a paragraph.</p>
            <p>The value of a is {a}.</p>
            <p>The sum of a and b = {c}.</p>
        </main>
    );
}
