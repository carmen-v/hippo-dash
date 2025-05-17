import Image from "next/image";

export default function Home() {
  return (
    <div>
    Events
    <div className="flex flex-col gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">Event 1</h2>
            <p className="text-gray-600">Description of Event 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">Event 2</h2>
            <p className="text-gray-600">Description of Event 2</p>
        </div>
</div>
<p>Add to shoping list</p>
<p>Add event</p>
<div>
    <p>Suggested for dinner</p>
</div>
</div>
  );
}
