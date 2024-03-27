import { Label, TextInput } from "flowbite-react";

export default function BookingWidget({ place }) {
  return (
    <div className="">
      <div className="bg-gray-200 shadow p-4 rounded-2xl ">
        <div className="text-2xl text-center">
          <span className="font-bold ">&#8377;{place.price}</span> per night
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="">
            <Label>Check in:</Label>
            <TextInput type="date" />
          </div>
          <div className="">
            <Label>Check out:</Label>
            <TextInput type="date" />
          </div>
        </div>
        <div className="">
          <Label>Number of guests:</Label>
          <TextInput type="number" value={1} />
        </div>
        <div className="text-center">
          <button className="bg-primary py-2 px-4 my-4 rounded-2xl text-white font-medium">
            Book this place
          </button>
        </div>
      </div>
    </div>
  );
}
