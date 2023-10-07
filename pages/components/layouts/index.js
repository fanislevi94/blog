import Image from "next/image";
import Link from "next/link";
export default function Index(props) {
  const { items } = props;
  return (
    <div>
      <style jsx>{`
        .box {
          height: 500px;
          background-color: #f5f5f5;
        }
        .area-field {
          color: gray;
        }
        .area-field-header {
          display: block;
          width: 500px;
          word-wrap: break-word;
          font-weight: 500;
          font-size: 20px;
        }
        .area-field-detail {
          display: block;
          width: 500px;
          word-wrap: break-word;
          font-weight: 190;
          font-size: 15px;
          color: black;
        }
        .over-image {
          position: absolute;
          color: white;
          margin-top: -15px;
          margin-left: -10px;
          padding-left: 15px;
          padding-right: 15px;
          background-color: #7243ff;
        }
        .my-link:hover {
          color: blue;
        }
      `}</style>
      <div className="flex flex-wrap flex justify-center items-center gap-20 pt-20">
        {items.map((data) => (
          <div className="box">
            <div className="image">
              <Image
                src="/listpapaki.jpg"
                width={500}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="over-image">Our news</div>
            <div className="area-field pt-5 pl-5">12 October 2023</div>
            <div className="area-field-header pl-5 my-link">
              <Link href="/details">
                Papaki had a dynamic presence at the eCommerce & Digital
                Marketing Expo 2023
              </Link>
            </div>
            <div className="area-field-detail pl-5 pt-2">
              Papaki, supporting the eCommerce and business community, was
              present this year as a sponsor and exhibitor at the eCommerce &...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
