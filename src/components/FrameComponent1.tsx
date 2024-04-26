import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import WindowFunctionWithKey from "./WindowFunctionWithKey";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.revenueBreakdownParent}>
            <div className={styles.revenueBreakdown}>REVENUE Breakdown</div>
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
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <b className={styles.b}>35%</b>
            </div>
            <div className={styles.rankingFunction}>
              <div className={styles.filterFunction} />
              <b className={styles.mapReduce}>12%</b>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameItem} />
                <b className={styles.filter}>10%</b>
              </div>
              <div className={styles.ellipseContainer}>
                <div className={styles.frameInner} />
                <b className={styles.b1}>28%</b>
              </div>
            </div>
            <div className={styles.reduceJoin}>
              <div className={styles.reduceJoinChild} />
              <b className={styles.combineMapper}>15%</b>
            </div>
            <div className={styles.averageFunction}>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
              <div className={styles.maxFunction}>
                <div className={styles.lastFunction}>
                  <div className={styles.firstFunction} />
                </div>
                <div className={styles.imageHandler}>
                  <div className={styles.provisionalRegistration}>
                    Provisional Registration
                  </div>
                </div>
                <div className={styles.shapeAssembler}>- 35%</div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <div className={styles.animationControllerParent}>
                <div className={styles.animationController}>
                  <div className={styles.soundManager} />
                </div>
                <div className={styles.decisionMaker}>
                  <div className={styles.mortgageRegistration}>
                    Mortgage Registration
                  </div>
                </div>
                <div className={styles.functionTree}>- 15%</div>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
              <div className={styles.dataFlow}>
                <div className={styles.dataFlowInner}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.cabotageRegistrationWrapper}>
                  <div className={styles.cabotageRegistration}>
                    Cabotage Registration
                  </div>
                </div>
                <div className={styles.errorHandler}>- 28%</div>
              </div>
              <img className={styles.groupIcon1} alt="" src="/group2.svg" />
              <div className={styles.frameParent3}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.miscellaneousFeesWrapper}>
                  <div className={styles.miscellaneousFees}>
                    Miscellaneous Fees
                  </div>
                </div>
                <div className={styles.div}>- 12%</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild2} />
                </div>
                <b className={styles.fines}>Fines</b>
                <div className={styles.div1}>- 15%</div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild3} />
                  <div className={styles.shipManagementParent}>
                    <div className={styles.shipManagement}>Ship Management</div>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.div2}>- 12%</div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild4} />
                  <div className={styles.brokerageAndCommissionsParent}>
                    <div className={styles.brokerageAndCommissionsContainer}>
                      <p className={styles.brokerageAnd}>Brokerage and</p>
                      <p className={styles.commissions}>Commissions</p>
                    </div>
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group3.svg"
                    />
                  </div>
                  <div className={styles.pyusd}>PYUSD</div>
                </div>
                <div className={styles.div3}>- 10%</div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
                  <div className={styles.consultancyParent}>
                    <div className={styles.consultancy}>Consultancy</div>
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group4.svg"
                    />
                  </div>
                  <div className={styles.pyusd1}>PYUSD</div>
                </div>
                <div className={styles.div4}>- 8%</div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild6} />
                  <div className={styles.towageAndSalvageParent}>
                    <div className={styles.towageAndSalvage}>
                      Towage and Salvage
                    </div>
                    <img
                      className={styles.groupIcon4}
                      alt=""
                      src="/group5.svg"
                    />
                  </div>
                  <div className={styles.pyusd2}>PYUSD</div>
                </div>
                <div className={styles.div5}>- 2%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.revenueTypeBreakdownParent}>
            <div className={styles.revenueTypeBreakdown}>
              Revenue Type Breakdown
            </div>
            <div className={styles.button5}>
              <div className={styles.reactIconsririmappinlineContainer}>
                <img className={styles.reactIconsririmappinline2} alt="" />
                <div className={styles.button6}>Add / Remove country</div>
                <img
                  className={styles.outlineflagIcon}
                  alt=""
                  src="/outlineinfo-6@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent10}>
            <div className={styles.ellipseParent1}>
              <div className={styles.ellipseDiv} />
              <div className={styles.historicalRevenue}>Historical Revenue</div>
            </div>
            <div className={styles.ellipseParent2}>
              <div className={styles.frameChild7} />
              <div className={styles.forecastedProjections}>
                Forecasted Projections
              </div>
            </div>
            <div className={styles.ellipseParent3}>
              <div className={styles.frameChild8} />
              <div className={styles.usdc}>USDC</div>
            </div>
            <div className={styles.ellipseParent4}>
              <div className={styles.frameChild9} />
              <div className={styles.tusd}>TUSD</div>
            </div>
            <div className={styles.ellipseParent5}>
              <div className={styles.frameChild10} />
              <div className={styles.dai}>DAI</div>
            </div>
            <div className={styles.ellipseParent6}>
              <div className={styles.frameChild11} />
              <div className={styles.pyusd3}>PYUSD</div>
            </div>
            <div className={styles.ellipseParent7}>
              <div className={styles.frameChild12} />
              <div className={styles.title}>Title</div>
            </div>
            <div className={styles.ellipseParent8}>
              <div className={styles.frameChild13} />
              <div className={styles.title1}>Title</div>
            </div>
            <div className={styles.ellipseParent9}>
              <div className={styles.frameChild14} />
              <div className={styles.title2}>Title</div>
            </div>
            <div className={styles.ellipseParent10}>
              <div className={styles.frameChild15} />
              <div className={styles.title3}>Title</div>
            </div>
            <div className={styles.ellipseParent11}>
              <div className={styles.frameChild16} />
              <div className={styles.title4}>Title</div>
            </div>
          </div>
          <img
            className={styles.series2ChartTypelineWavy}
            alt=""
            src="/series2-chart-typeline-wavy5.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy1}
            alt=""
            src="/series2-chart-typeline-wavy6.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy2}
            alt=""
            src="/series2-chart-typeline-wavy7.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy3}
            alt=""
            src="/series2-chart-typeline-wavy8.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy4}
            alt=""
            src="/series2-chart-typeline-wavy9.svg"
          />
          <img className={styles.series2ChartTypelineWavy5} alt="" />
          <div className={styles.frameParent11}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild17} />
              <div className={styles.ngn}>NGN</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild18} />
              <div className={styles.usdc1}>USDC</div>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild19} />
              <div className={styles.pyusd4}>PYUSD</div>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild20} />
              <div className={styles.usdt}>USDT</div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild21} />
              <div className={styles.tusd1}>TUSD</div>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild22} />
              <div className={styles.dai1}>DAI</div>
            </div>
          </div>
          <div className={styles.autoLayoutHorizontalParent}>
            <div className={styles.autoLayoutHorizontal}>
              <div className={styles.yAxisLabel}>
                <div className={styles.text6}>
                  Revenue (<span className={styles.n}>N</span>)
                </div>
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
                    <div className={styles.number}>100k</div>
                    <img
                      className={styles.dividerIcon}
                      alt=""
                      src="/divider-6.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine1}>
                    <div className={styles.number1}>80k</div>
                    <img
                      className={styles.dividerIcon1}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine2}>
                    <div className={styles.number2}>60k</div>
                    <img
                      className={styles.dividerIcon2}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine3}>
                    <div className={styles.number3}>40k</div>
                    <img
                      className={styles.dividerIcon3}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine4}>
                    <div className={styles.number4}>20k</div>
                    <img
                      className={styles.dividerIcon4}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine5}>
                    <div className={styles.number5}>0</div>
                    <img
                      className={styles.dividerIcon5}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine6}>
                    <div className={styles.number6}>0</div>
                    <img
                      className={styles.dividerIcon6}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine7}>
                    <div className={styles.number7}>0</div>
                    <img
                      className={styles.dividerIcon7}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine8}>
                    <div className={styles.number8}>0</div>
                    <img
                      className={styles.dividerIcon8}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine9}>
                    <div className={styles.number9}>0</div>
                    <img
                      className={styles.dividerIcon9}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine10}>
                    <div className={styles.number10}>0</div>
                    <img
                      className={styles.dividerIcon10}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine11}>
                    <div className={styles.number11}>0</div>
                    <img
                      className={styles.dividerIcon11}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                </div>
                <div className={styles.xAxis}>
                  <div className={styles.jan}>2015</div>
                  <div className={styles.feb}>2016</div>
                  <div className={styles.mar}>2017</div>
                  <div className={styles.apr}>2018</div>
                  <div className={styles.may}>2019</div>
                  <div className={styles.jun}>2020</div>
                  <div className={styles.jul}>2021</div>
                  <div className={styles.aug}>2022</div>
                  <div className={styles.sep}>2023</div>
                  <div className={styles.oct}>Oct</div>
                  <div className={styles.nov}>Nov</div>
                  <div className={styles.dec}>Dec</div>
                </div>
                <div className={styles.xAxisLabel}>
                  <div className={styles.windowFunction}>Scenarios</div>
                </div>
              </div>
              <div className={styles.yAxisLabel1}>
                <div className={styles.text7}>No. of events</div>
              </div>
            </div>
            <div className={styles.windowAggWrapper}>
              <div className={styles.windowAgg}>
                <div className={styles.rankingWindow}>
                  <div className={styles.component61}>
                    <div className={styles.mapJoinWindow} />
                  </div>
                  <div className={styles.communication}>Communication</div>
                </div>
                <div className={styles.temporalWindow}>
                  <div className={styles.component611}>
                    <div className={styles.tumblingWindow} />
                  </div>
                  <div className={styles.navigation}>Navigation</div>
                </div>
                <div className={styles.rectangleParent9}>
                  <div className={styles.frameChild23} />
                  <div className={styles.germany}>Germany</div>
                </div>
                <WindowFunctionWithKey distribution="Distribution" />
                <div className={styles.validationFunction}>
                  <div className={styles.component612}>
                    <div className={styles.weightFunction} />
                  </div>
                  <div className={styles.clusteredForest}>
                    <div className={styles.industry}>Industry</div>
                  </div>
                </div>
                <WindowFunctionWithKey
                  distribution="Trade Routes"
                  propHeight="166px"
                  propFlex="1"
                  propPadding="0px var(--padding-6xs-7) 0px var(--padding-6xs)"
                  propBackgroundColor="#4b10ac"
                />
                <div className={styles.component61Parent}>
                  <div className={styles.component613}>
                    <div className={styles.component61Child} />
                  </div>
                  <div className={styles.shipManagement1}>Ship Management</div>
                </div>
                <div className={styles.rectangleParent10}>
                  <div className={styles.frameChild24} />
                  <div className={styles.japan}>Japan</div>
                </div>
                <div className={styles.rectangleParent11}>
                  <div className={styles.frameChild25} />
                  <div className={styles.safrica}>S/Africa</div>
                </div>
                <div className={styles.rectangleParent12}>
                  <div className={styles.frameChild26} />
                  <div className={styles.russia}>Russia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
