import { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./component/Preloader";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none none",
});

function App() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      const gspItem = gsap.utils.toArray(".revela__img-item");

      gspItem.forEach((item) => {
        const imgNum = item.querySelector(".reveal__img-num");
        const imgInner = item.querySelector(".reveal__img-inner");
        const imgBl = item.querySelector(".reveal__img-bl");
        const img = item.querySelector(".reveal__img-img");

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            /* markers: true, */
          },
        });

        tl.from(imgNum, {
          opacity: 0,
          translateY: "80px",
          ease: "expo.out",
          duration: 1,
        });
        tl.to(
          imgInner,
          {
            clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            ease: "expo.out",
            duration: 0.5
          },
          "-=1"
        );
        tl.to(
          imgBl,
          {
            clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            ease: "expo.out",
            duration: 1.5
          },
          "-=.5"
        );
        tl.from(
          img,
          { scale: 1.5, filter: "blur(15px)", ease: "Expo.out", duration: 1.5},
          "-=1.7"
        );
      });

    });

    return () => ctx.revert();
  }, []);
  return (
    <>
    <Preloader />
      <div className="wrapp">
        <section className="reveal">
          <h1 className="title">
            Block reveal <span> on GSAP</span>
          </h1>

          <div className="reveal__wrap">
            <div className="reveal__img">
              {/* aqui va una imagen */}
              <div className="revela__img-item">
                <span className="reveal__img-num">001</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img1.jpg" alt="1" className="reveal__img-img" />
                  </div>
                </div>
              </div>
              {/* as */}
              <div className="revela__img-item">
                <span className="reveal__img-num">002</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img2.jpg" alt="2" className="reveal__img-img" />
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="revela__img-item">
                <span className="reveal__img-num">003</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img3.jpg" alt="3" className="reveal__img-img" />
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="revela__img-item">
                <span className="reveal__img-num">004</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img4.jpg" alt="4" className="reveal__img-img" />
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="revela__img-item">
                <span className="reveal__img-num">005</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img5.jpg" alt="5" className="reveal__img-img" />
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="revela__img-item">
                <span className="reveal__img-num">006</span>
                <div className="reveal__img-inner">
                  <div className="reveal__img-bl">
                    <img src="./img6.jpg" alt="6" className="reveal__img-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
