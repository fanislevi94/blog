import Image from "next/image";
import IndexFunction from "./components/layouts/index";
export default function Index(props: any) {
  const { allDatas } = props;
  return (
    <div>
      {/* <div className="headerbar">
        <style jsx>{`
          .headerbar {
            background-color: #1742e1;
          }
          .menus {
            color: white;
            font-size: 14px;
            font-weight: 700;
          }
          #button-sub {
            border: 2px solid;
            padding: 5px;
            border-radius: 20px;
          }
        `}</style>
        <div className="flow-root pr-10 pl-10">
          <div className="float-left pl-15 pt-4 ">
            <Image
              src="/papaki_new_logo_white.svg"
              width={180}
              height={180}
              alt="Picture of the author"
              className="image"
            />
          </div>
          <div className="float-right">
            <div className="flex flex-nowrap pr-18 pt-6 gap-10">
              <div className="menus">PAPAKI SITE</div>
              <div className="menus">STATUS PAGE</div>
              <div className="menus">
                <div id="button-sub">SUBSCRIBE</div>
              </div>
              <div className="menus">GR</div>
              <div className="menus">EN</div>
            </div>
          </div>
        </div>
      </div>*/}
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
            <div className="main-button-each pt-3 pb-3 text-center">
              Our News
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              Domains
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              WordPress
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              eCommerce
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              Security
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              Our News
            </div>
          </div>
          <div className="shrink w-64">
            <div className="main-button-each pt-3 pb-3 text-center">
              Our News
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
