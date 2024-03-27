export default function PlaceImage({ place, index = 0, className = null }) {
  if (!place?.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return (
    <div>
      {/* {place.photos.length > 0 && ( */}
      <img
        className={className}
        src={`http://localhost:8080/uploads/${place.photos[index]}`}
        alt="Place Image"
      />
      {/* )} */}
    </div>
  );
}
