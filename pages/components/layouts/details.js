import Image from "next/image";
import Link from "next/link";
export default function Detail(props) {
  const { items } = props;
  return (
    <div>
      <style jsx>{`

@media only screen and (min-width: 1000px) {
    .text{
        /*background-color:blue;*/
        position: absolute;
        top: 765px;
        padding-left:260px;
        padding-right:260px;
    }
    .top-image {
        padding-top:455px;
      
      
    }
    .image-in{
        padding-left:230px;
        padding-right:230px;
    }
    

}

@media only screen and (max-width: 999px) {
    .text{
        position: absolute;
        top: 1065px;
        padding-left:230px;
        padding-right:230px;
    }

    .top-image {
        padding-top:765px;
    }
    .image-in{
        padding-left:230px;
        padding-right:230px;
    }

}
      @media only screen and (min-width: 500px) {
        .header-image {
            position: absolute;
            width:500px;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 575px;
        }
    }
        .header-buttons-bellow{
            position: absolute;
            left: 20%;
            transform: translate(-30%, -30%);
            top: 775px;
        }
        .header-buttons-bellow {
            display: none;
        }
        @media only screen and (max-width: 1000px) {
            .header-buttons {
                display: none;
            }
            .header-buttons-bellow {
                display: block;
            }
          }
        }
        @media only screen and (max-width: 499px) {
            .header-image {
                position: absolute;
                width:100%;
                left: 50%;
                transform: translate(-50%, -50%);
                top: 565px;
            }            
        }

        .side{
            margin-left:10%;
            margin-top:0px;
            position:fixed;
            padding-bottom:10px;
        }
        .papaki{
            color:#7243ff;
        }
        .button-small{
            color:white;
            background-color:#7243ff;
            width:100px;
            text-align:center;
        }
        .title-bar{
            font-size:30px;
            text-align:center;
        }
       
      `}</style>
      <div className="all">
        <div className="header-buttons ">
          <div className="side grid grid-rows-1 gap-4">
            <div>
              <Image
                className="rounded-full"
                src="/avatar.webp"
                width={50}
                height={60}
                alt="Picture of the author"
              />
            </div>
            <div className="papaki">Papaki Team</div>
            <div>02 october 2023</div>
            <div className="button-small">OUR NEWS</div>
          </div>
        </div>
        <div className="header-image ">
          <Image
            src="/listpapaki.jpg"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="header-buttons-bellow ">
          <div className="side grid grid-rows-1 gap-4">
            <div>
              <Image
                className="rounded-full"
                src="/avatar.webp"
                width={50}
                height={60}
                alt="Picture of the author"
              />
            </div>
            <div className="papaki">Papaki Team</div>
            <div>02 october 2023</div>
            <div className="button-small">OUR NEWS</div>
          </div>
        </div>

        <div className="text text-center">
          Papaki, supporting the eCommerce and business community, was present
          this year as a sponsor and exhibitor at the eCommerce & Digital
          Marketing Expo SEE 2023 (ECDM Expo), held at Zappeion Megaron on 23
          and 24 September.
        </div>

        <div className="top-image">
          <div className="title-bar ">Papaki’s expo booth</div>
          {items.map((data) => (
            <div>
              <div className="image flex justify-center items-center ">
                <Image
                  src="/listpapaki.jpg"
                  width={500}
                  height={600}
                  alt="Picture of the author"
                />
              </div>
              <div className="image-in text-center">
                The impressive Papaki booth with the central motto “All you need
                for your digital presence” was full of unique swags for
                visitors, and the contest for a 27’’ Monitor also attracted many
                entries.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
