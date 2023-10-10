import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer">
      <style jsx>{`
        .footer {
          background-color: black;
        }
        .middleSub {
          font-family: "Proxima-Bold" !important;
          font-size: 25px;
          color: #fff;
        }
        .middleDetail {
          color: #fff;
          font-size: 19px;
        }
        input[type="text"] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid white;
          background-color: black;
        }
        #email:hover {
          border-bottom: 2px solid blue;
        }
        .buttonMiddle {
          color: white;
        }
        .subscribes {
          border: 2px solid white;
          width: 100px;
          text-align: center;
          padding: 10px;
          cursor: pointer;
          margin-top: 30px;
        }
        .subscribes:hover {
          background-color: blue;
          border: 2px solid blue;
        }
        .socialMedia {
          color: white;
        }
        hr {
          background-color: white;
          margin-top: 60px;
          margin-left:100px;
          margin-right:100px;
        }
        .classFooter {
          color: white;
        }
        .header{
            font-weight: bold;
        }
      `}</style>
      <div className="grid grid-cols-3 md:grid-cols-3 text-center pt-20">
        <div className="pl-10">
          {" "}
          <Image
            src="/papaki_new_logo_white.svg"
            width={180}
            height={180}
            alt="Picture of the author"
            className="image"
          />
        </div>
        <div className="middle">
          <div className="middleSub text-left">SUBSCRIBE TO OUR BLOG</div>
          <div className="middleDetail text-left">
            By subscribing, your email will be added to our lists for new blog
            post alerts.
          </div>
          <div>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="buttonMiddle text-left">
            <div className="subscribes">SUBSCRIBE</div>
          </div>
        </div>
        <div className="middle">
          <div className="middleSub text-left">PAPAKI AT SOCIAL MEDIA</div>
          <div className="middleDetail text-left">
            Follow us on social media to get all the updates.
          </div>
          <div>
            <div className="flex flex-nowrap gap-4">
              <div>
                {" "}
                <Image
                  src="/ln2.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="image"
                />
              </div>
              <div>
                {" "}
                <Image
                  src="/ln2.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="image"
                />
              </div>
              <div>
                {" "}
                <Image
                  src="/ln2.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="image"
                />
              </div>
              <div>
                {" "}
                <Image
                  src="/ln2.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-6 md:grid-cols-6 text-center pt-20">
        <div className="classFooter">
          <div className="grid grid-rows-6 md:grid-rows-6">
            <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div>
        </div>
        <div className="classFooter"><div className="grid grid-rows-6 md:grid-rows-6">
        <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div></div>
        <div className="classFooter"><div className="grid grid-rows-6 md:grid-rows-6">
        <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div></div>
        <div className="classFooter"><div className="grid grid-rows-6 md:grid-rows-6">
        <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div></div>
        <div className="classFooter"><div className="grid grid-rows-6 md:grid-rows-6">
        <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div></div>
        <div className="classFooter"><div className="grid grid-rows-6 md:grid-rows-6">
        <div className="header">Domain Search</div>
            <div>Domain Transfer</div>
            <div>Domain Resellers</div>
            <div>Corporate</div>
            <div>Security Pin</div>
            <div>Pricelist</div>
          </div></div>
      </div>
    </div>
  );
}
