import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.parent}>
              <div className={styles.div}>350</div>
              <div className={styles.iconframe}>
                <img
                  className={styles.outlinearrowDownIcon}
                  alt=""
                  src="/outlinearrowdown.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsParent}>
              <b className={styles.recommendations}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon}
                alt=""
                src="/outlineinfo-15@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.group}>
              <div className={styles.div1}>216</div>
              <div className={styles.iconframe1}>
                <img
                  className={styles.outlinearrowUpIcon}
                  alt=""
                  src="/outlinearrowup.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsGroup}>
              <b className={styles.recommendations1}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon1}
                alt=""
                src="/outlineinfo-16@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.container}>
              <div className={styles.div2}>72%</div>
              <div className={styles.iconframe2}>
                <img
                  className={styles.outlinearrowDownIcon1}
                  alt=""
                  src="/outlinearrowdown.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsContainer}>
              <b className={styles.recommendations2}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon2}
                alt=""
                src="/outlineinfo-16@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.parent1}>
              <div className={styles.div3}>350</div>
              <div className={styles.iconframe3}>
                <img
                  className={styles.outlinearrowUpIcon1}
                  alt=""
                  src="/outlinearrowup.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsParent1}>
              <b className={styles.recommendations3}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon3}
                alt=""
                src="/outlineinfo-16@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.parent2}>
              <div className={styles.div4}>350</div>
              <div className={styles.iconframe4}>
                <img
                  className={styles.outlinearrowDownIcon2}
                  alt=""
                  src="/outlinearrowdown.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsParent2}>
              <b className={styles.recommendations4}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon4}
                alt=""
                src="/outlineinfo-16@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.parent3}>
              <div className={styles.div5}>350</div>
              <div className={styles.iconframe5}>
                <img
                  className={styles.outlinearrowDownIcon3}
                  alt=""
                  src="/outlinearrowdown.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationsParent3}>
              <b className={styles.recommendations5}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon5}
                alt=""
                src="/outlineinfo-16@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.totalRevenueGeneratedParent}>
            <div className={styles.totalRevenueGenerated}>
              TOTAL REVENUE GENERATED
            </div>
            <b className={styles.studentEngagementWith}>
              Student engagement with opportunities
            </b>
          </div>
          <div className={styles.button}>
            <div className={styles.dataAggregator}>
              <img className={styles.reactIconsririmappinline} alt="" />
              <b className={styles.button1}>Last 30 Days</b>
              <img className={styles.fillarrowIosDownIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.frameParent6}>
          <div className={styles.frameParent7}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameInner} />
                <img className={styles.financeIcon} alt="" src="/finance.svg" />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.todaysRevenueParent}>
                  <div className={styles.todaysRevenue}>Today’s Revenue</div>
                  <b className={styles.b}>₦7.2B</b>
                </div>
                <div className={styles.trendingDownParent}>
                  <img
                    className={styles.trendingDownIcon}
                    loading="lazy"
                    alt=""
                    src="/trending-down.svg"
                  />
                  <div className={styles.decreaseFromYesterday}>
                    2% decrease from yesterday
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent3
            todaysPayment="Today’s Payment"
            b="₦26.8B"
            trendingUp="/trending-up.svg"
            increaseFromLastMonth="4.6% increase from last month"
          />
          <FrameComponent3
            todaysPayment="New Payments"
            b="₦26.8B"
            trendingUp="/trending-up.svg"
            increaseFromLastMonth="4.6% increase from last month"
            propBackgroundColor="#f5f2ff"
            propBorder="1px solid var(--primary-purple-main)"
            propBackgroundColor1="#7b47d0"
            propPadding="0px 0px 0px var(--padding-89xl)"
          />
          <FrameComponent3
            todaysPayment="Total Revenue"
            b="₦464.7B"
            trendingUp="/trending-down.svg"
            increaseFromLastMonth="1.4% decrease from last year"
            propBackgroundColor="#e5fffc"
            propBorder="1px solid var(--color-teal)"
            propBackgroundColor1="#0e7d70"
            propPadding="0px 0px 0px var(--padding-95xl)"
          />
          <div className={styles.symbolParent}>
            <img className={styles.symbolIcon} alt="" src="/symbol.svg" />
            <div className={styles.usdcParent}>
              <b className={styles.usdc}>33,000 USDC</b>
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-1000006798@2x.png"
              />
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.symbolGroup}>
                <img
                  className={styles.symbolIcon1}
                  alt=""
                  src="/symbol-1.svg"
                />
                <div className={styles.usdc1}>USDC</div>
              </div>
              <div className={styles.volume}>
                <div className={styles.volumeChild} />
                <div className={styles.volumeItem} />
                <div className={styles.div6}>79%</div>
              </div>
            </div>
          </div>
          <div className={styles.token2Parent}>
            <img className={styles.token2Icon} alt="" src="/token-2.svg" />
            <div className={styles.tusdParent}>
              <b className={styles.tusd}>41,000 TUSD</b>
              <img className={styles.lowIcon} alt="" src="/low@2x.png" />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.token2Group}>
                <img
                  className={styles.token2Icon1}
                  alt=""
                  src="/token-2-1.svg"
                />
                <div className={styles.tusd1}>TUSD</div>
              </div>
              <div className={styles.volume1}>
                <div className={styles.volumeInner} />
                <div className={styles.ellipseDiv} />
                <div className={styles.div7}>47%</div>
              </div>
            </div>
          </div>
          <div className={styles.token2Container}>
            <img className={styles.token2Icon2} alt="" src="/token-2-2.svg" />
            <div className={styles.daiParent}>
              <b className={styles.dai}>65,000 DAI</b>
              <img
                className={styles.frameChild1}
                alt=""
                src="/group-1000006798-1@2x.png"
              />
            </div>
            <div className={styles.frameParent12}>
              <div className={styles.token2Parent1}>
                <img
                  className={styles.token2Icon3}
                  alt=""
                  src="/token-2-3.svg"
                />
                <div className={styles.dai1}>DAI</div>
              </div>
              <div className={styles.volume2}>
                <div className={styles.volumeChild1} />
                <div className={styles.volumeChild2} />
                <div className={styles.div8}>61%</div>
              </div>
            </div>
          </div>
          <div className={styles.token3Parent}>
            <div className={styles.token3}>
              <img className={styles.vectorIcon1} alt="" src="/vector-16.svg" />
            </div>
            <div className={styles.pyusdParent}>
              <b className={styles.pyusd}>8,000 PYUSD</b>
              <img className={styles.lowIcon1} alt="" src="/low@2x.png" />
            </div>
            <div className={styles.frameParent13}>
              <div className={styles.token3Group}>
                <div className={styles.token31}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-17.svg"
                  />
                </div>
                <div className={styles.pyusd1}>PYUSD</div>
              </div>
              <div className={styles.volume3}>
                <div className={styles.volumeChild3} />
                <div className={styles.volumeChild4} />
                <div className={styles.div9}>28%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
