import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.historicalDataGraphParent}>
            <div className={styles.historicalDataGraph}>
              historical data graph
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.reactIconsririmappinlineParent}>
                  <img
                    className={styles.reactIconsririmappinline}
                    alt=""
                    src="/reacticonsririmappinline.svg"
                  />
                  <b className={styles.button1}>Nigeria</b>
                  <img
                    className={styles.fillarrowIosDownIcon}
                    alt=""
                    src="/fillarrowiosdown.svg"
                  />
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.reactIconsririmappinlineGroup}>
                  <img
                    className={styles.reactIconsririmappinline1}
                    alt=""
                    src="/reacticonsririmappinline.svg"
                  />
                  <b className={styles.button3}>Add / Remove Country</b>
                  <img
                    className={styles.iconsolidplus}
                    alt=""
                    src="/iconsolidplus.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.textWrapper}>
                <div className={styles.text}>1D</div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.text1}>1W</div>
              </div>
              <div className={styles.textFrame}>
                <div className={styles.text2}>1M</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.text3}>3M</div>
              </div>
              <div className={styles.textWrapper1}>
                <div className={styles.text4}>6M</div>
              </div>
              <div className={styles.textWrapper2}>
                <div className={styles.text5}>1Y</div>
              </div>
            </div>
            <div className={styles.button4}>
              <Form.Select className={styles.frameFormselect} />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.tag}>
              <div className={styles.dotWrapper}>
                <input
                  className={styles.dot}
                  checked={true}
                  type="radio"
                  name="radioGroup-1"
                />
              </div>
              <div className={styles.tag1}>This year</div>
            </div>
            <div className={styles.tag2}>
              <div className={styles.dotContainer}>
                <input className={styles.dot1} type="radio" />
              </div>
              <div className={styles.tag3}>Last year</div>
            </div>
            <div className={styles.groupInner}>
              <div className={styles.frameParent1}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.text6}>Freight Fees</div>
              </div>
            </div>
            <div className={styles.tapWrapper}>
              <div className={styles.tap}>
                <div className={styles.text7}>
                  <div className={styles.text8}>Freight Fees</div>
                </div>
              </div>
            </div>
            <div className={styles.tapContainer}>
              <div className={styles.tap1}>
                <div className={styles.text9}>
                  <div className={styles.text10}>Operating Status</div>
                </div>
              </div>
            </div>
            <div className={styles.textWrapper3}>
              <div className={styles.text11}>
                <div className={styles.text12}>|</div>
              </div>
            </div>
          </div>
          <div className={styles.series2ChartTypelineWavy} />
          <img
            className={styles.series2ChartTypelineWavy1}
            alt=""
            src="/series2-chart-typeline-wavy6.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy2}
            alt=""
            src="/series2-chart-typeline-wavy11.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy3}
            alt=""
            src="/series2-chart-typeline-wavy12.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy4}
            alt=""
            src="/series2-chart-typeline-wavy13.svg"
          />
          <img className={styles.series2ChartTypelineWavy5} alt="" />
          <div className={styles.frameParent2}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.ngn}>NGN</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.usdc}>USDC</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.pyusd}>PYUSD</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.usdt}>USDT</div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.tusd}>TUSD</div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.dai}>DAI</div>
            </div>
          </div>
          <div className={styles.autoLayoutHorizontalParent}>
            <div className={styles.autoLayoutHorizontal}>
              <div className={styles.yAxisLabel}>
                <div className={styles.dataAggregator}>Revenue</div>
              </div>
              <div className={styles.content}>
                <div className={styles.legend}>
                  <div className={styles.legendSeries}>
                    <div className={styles.color} />
                    <div className={styles.series1}>No. of Earners</div>
                  </div>
                  <div className={styles.legendSeries1}>
                    <div className={styles.color1} />
                    <div className={styles.series2}>Spent</div>
                  </div>
                  <div className={styles.legendSeries2}>
                    <div className={styles.color2} />
                    <div className={styles.series3}>Series 3</div>
                  </div>
                  <div className={styles.legendSeries3}>
                    <div className={styles.color3} />
                    <div className={styles.series4}>Series 4</div>
                  </div>
                  <div className={styles.legendSeries4}>
                    <div className={styles.color4} />
                    <div className={styles.series5}>Series 5</div>
                  </div>
                  <div className={styles.legendSeries5}>
                    <div className={styles.color5} />
                    <div className={styles.series6}>Series 6</div>
                  </div>
                </div>
                <div className={styles.yAxis}>
                  <div className={styles.yAxisLine}>
                    <div className={styles.number}>500B</div>
                    <img
                      className={styles.dividerIcon}
                      alt=""
                      src="/divider-30.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine1}>
                    <div className={styles.number1}>400B</div>
                    <img
                      className={styles.dividerIcon1}
                      alt=""
                      src="/divider-31.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine2}>
                    <div className={styles.number2}>300B</div>
                    <img
                      className={styles.dividerIcon2}
                      alt=""
                      src="/divider-31.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine3}>
                    <div className={styles.number3}>200B</div>
                    <img
                      className={styles.dividerIcon3}
                      alt=""
                      src="/divider-31.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine4}>
                    <div className={styles.number4}>100B</div>
                    <img
                      className={styles.dividerIcon4}
                      alt=""
                      src="/divider-31.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine5}>
                    <div className={styles.number5}>0</div>
                    <img
                      className={styles.dividerIcon5}
                      alt=""
                      src="/divider-31.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine6}>
                    <div className={styles.number6}>0</div>
                    <img
                      className={styles.dividerIcon6}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine7}>
                    <div className={styles.number7}>0</div>
                    <img
                      className={styles.dividerIcon7}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine8}>
                    <div className={styles.number8}>0</div>
                    <img
                      className={styles.dividerIcon8}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine9}>
                    <div className={styles.number9}>0</div>
                    <img
                      className={styles.dividerIcon9}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine10}>
                    <div className={styles.number10}>0</div>
                    <img
                      className={styles.dividerIcon10}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine11}>
                    <div className={styles.number11}>0</div>
                    <img
                      className={styles.dividerIcon11}
                      alt=""
                      src="/divider-36.svg"
                    />
                  </div>
                </div>
                <div className={styles.xAxis}>
                  <div className={styles.jan}>2024</div>
                  <div className={styles.feb}>2025</div>
                  <div className={styles.mar}>2026</div>
                  <div className={styles.apr}>2027</div>
                  <div className={styles.may}>2028</div>
                  <div className={styles.jun}>2029</div>
                  <div className={styles.jul}>2030</div>
                  <div className={styles.aug}>2031</div>
                  <div className={styles.sep}>2032</div>
                  <div className={styles.oct}>Oct</div>
                  <div className={styles.nov}>Nov</div>
                  <div className={styles.dec}>Dec</div>
                </div>
                <div className={styles.xAxisLabel}>
                  <div className={styles.sequenceHandler}>Years</div>
                </div>
              </div>
              <div className={styles.yAxisLabel1}>
                <div className={styles.text13}>No. of events</div>
              </div>
            </div>
            <div className={styles.iterativeProcessor}>
              <div className={styles.horizontalLine}>
                <img
                  className={styles.lineGraphIcon}
                  loading="lazy"
                  alt=""
                  src="/line-graph@2x.png"
                />
              </div>
              <div className={styles.recursiveFunction}>Jan</div>
              <div className={styles.recursiveFunction1}>Feb</div>
              <div className={styles.recursiveFunction2}>Mar</div>
              <div className={styles.recursiveFunction3}>Apr</div>
              <div className={styles.recursiveFunction4}>May</div>
              <div className={styles.recursiveFunction5}>Jun</div>
              <div className={styles.recursiveFunction6}>Jul</div>
              <div className={styles.recursiveFunction7}>Aug</div>
              <div className={styles.recursiveFunction8}>Sep</div>
              <div className={styles.recursiveFunction9}>Oct</div>
              <div className={styles.recursiveFunction10}>Nov</div>
              <div className={styles.recursiveFunction11}>Dec</div>
            </div>
          </div>
        </div>
        <div className={styles.scenarioModellingWrapper}>
          <div className={styles.scenarioModelling}>Scenario Modelling</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
