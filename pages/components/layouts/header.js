import Image from "next/image";
export default function Header() {
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
      </div>
    </div>
  );
}
