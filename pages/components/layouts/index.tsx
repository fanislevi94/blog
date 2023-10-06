import Image from "next/image";
export default function Index() {
  return (
    <div>
      <div className="headerbar">
        <style jsx>{`
          .headerbar {
            background-color: #1742e1;
          }
          .menus {
            color: white;
            font-size: 14px;
            font-weight: 700;
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
              <div className="menus">SUBSCRIBE</div>
              <div className="menus">GR</div>
              <div className="menus">EN</div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
