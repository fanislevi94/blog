import Image from "next/image";
import { useRouter } from "next/router";
import Detail from "../components/layouts/details";
export default function Details(props: any) {
  const router = useRouter();
  const { allDatas } = props;

  return (
    <div>
      <div className="main">
        <style jsx>{`
          .main-bar {
            background-color: #1742e1;
            height: 400px;
          }
          .detail-bar {
            font-weight: 700;
            color: white;
            font-size: 35px;
          }
        `}</style>
        <div className="main-bar">
          <div className="text-center pt-20 detail-bar pl-20 pr-20">
            Papaki had a dynamic presence at the eCommerce & Digital Marketing
            Expo 2023
          </div>
        </div>
      </div>
      <div className="image-bar">
        <div>
          <Detail items={allDatas} />
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  //const data = await api.get(process.env.customKey);
  const data = [
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
  ];
  console.log("data caleess -------->" + data);
  return {
    props: { allDatas: data },
  };
}
