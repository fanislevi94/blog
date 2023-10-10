import Image from "next/image";
import IndexFunction from "./components/layouts/index";
import api from "./components/services/api";
import { useRouter } from "next/router";
var glob: any = null;
export default function Index(props: any) {
  const { allDatas } = props;

  const router = useRouter();
  function text(name: any) {
    // alert(`hello, ${name}`);
    if (name === "ournews") {
      router.push("/?name=ournews");
    } else if (name === "domains") {
      router.push("/?name=domains");
    } else if (name === "wordpress") {
      router.push("/?name=wordpress");
    } else if (name === "ecommerce") {
      router.push("/?name=ecommerce");
    } else if (name === "security") {
      router.push("/?name=security");
    } else if (name === "marketing") {
      router.push("/?name=marketing");
    } else if (name === "howto") {
      router.push("/?name=howto");
    }
  }
  return (
    <div>
      <div className="main">
        <style jsx>{`
          .blog {
            margin-top: 200px;
            margin-left: 100px;
            font-weight: 700;
            font-size: 35px;
            color: white;
          }
          .blog-detail {
            padding-top: 40px;
            margin-left: 100px;
            font-size: 18px;
            line-height: 28px;
            color: white;
          }
          .main {
            background-color: #1742e1;
          }
          .main-bar {
            background-color: #1742e1;
            height: 600px;
          }
        `}</style>
        <div className="main-bar">
          <div className="float-root">
            <div className="float-left ">
              <div className="blog ">Blog</div>
              <div className="blog-detail ">
                News, info, tips for your integrated online presence.
              </div>
            </div>
            <div className="float-right ">
              <div className="image-main pr-20 pt-20">
                {" "}
                <Image
                  src="/new_papaki_blog_hero.svg"
                  width={450}
                  height={450}
                  alt="Picture of the author"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-buttons">
        <style jsx>{`
          .main-button-each {
            border: 1px solid;
            border-color: #1742e1;
            color: #1742e1;
            cursor: pointer;
          }
          .main-button-each:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}</style>
        <div className="flex flex-nowrap">
          <div className="shrink w-64 ">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("ournews")}
            >
              Our News
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("domains")}
            >
              Domains
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("wordpress")}
            >
              WordPress
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("ecommerce")}
            >
              eCommerce
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("security")}
            >
              Security
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("marketing")}
            >
              Marketing
            </div>
          </div>
          <div className="shrink w-64">
            <div
              className="main-button-each pt-3 pb-3 text-center"
              onClick={() => text("howto")}
            >
              How To
            </div>
          </div>
        </div>
      </div>

      <div className="categories">
        <IndexFunction items={allDatas} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  var data = await api.get(
    process.env.customKey + "?value=" + context.query.name
  );

  console.log("getServerSideProps" + context.query.name);

  /* const data = [
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
    "Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
  ];*/
  console.log("data caleess -------->" + data);
  return {
    props: { allDatas: data.projects },
  };
}
