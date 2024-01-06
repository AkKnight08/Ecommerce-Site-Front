import famousproducts from "../data/Home/Famouscard"
export default function Famouscard()
{
return (
  <>
    {famousproducts.map((f) => (
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src={f.img} />
          <div className="famous-card-content position-absolute">
            <h5 className="text-white">{f.c1}</h5>
            <h3 className="text-white">{f.c2}</h3>
            <p className="text-white">{f.c3}</p>
          </div>
        </div>
      </div>
    ))}
  </>
);
}