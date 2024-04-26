import { FunctionComponent } from "react";
import MainNavigation from "../components/MainNavigation";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.frameParent}>
        <div className={styles.tarrifHistoricalDataGraphParent}>
          <div className={styles.tarrifHistoricalData}>
            Tarrif Historical data graph
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
          <div className={styles.frameGroup}>
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
            <div className={styles.reactIconsririmappinlineContainer}>
              <img
                className={styles.reactIconsririmappinline2}
                alt=""
                src="/reacticonsririmappinline.svg"
              />
              <b className={styles.button5}>Last 1 year</b>
              <img
                className={styles.fillarrowIosDownIcon1}
                alt=""
                src="/fillarrowiosdown-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.provisionalRegistration}>
              Provisional Registration
            </div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.mortgageRegistration}>
              Mortgage Registration
            </div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameInner} />
            <div className={styles.cabotageRegistration}>
              Cabotage Registration
            </div>
          </div>
          <div className={styles.ellipseParent1}>
            <div className={styles.ellipseDiv} />
            <div className={styles.miscellaneousFees}>Miscellaneous Fees</div>
          </div>
          <div className={styles.ellipseParent2}>
            <div className={styles.frameChild1} />
            <div className={styles.fines}>Fines</div>
          </div>
          <div className={styles.ellipseParent3}>
            <div className={styles.frameChild2} />
            <div className={styles.brokerageAndCommissions}>
              Brokerage and Commissions
            </div>
          </div>
          <div className={styles.ellipseParent4}>
            <div className={styles.frameChild3} />
            <div className={styles.consultancy}>Consultancy</div>
          </div>
          <div className={styles.ellipseParent5}>
            <div className={styles.frameChild4} />
            <div className={styles.towageAndSalvage}>Towage and Salvage</div>
          </div>
          <div className={styles.ellipseParent6}>
            <div className={styles.frameChild5} />
            <div className={styles.title}>Title</div>
          </div>
          <div className={styles.ellipseParent7}>
            <div className={styles.frameChild6} />
            <div className={styles.title1}>Title</div>
          </div>
          <div className={styles.ellipseParent8}>
            <div className={styles.frameChild7} />
            <div className={styles.title2}>Title</div>
          </div>
          <div className={styles.ellipseParent9}>
            <div className={styles.frameChild8} />
            <div className={styles.title3}>Title</div>
          </div>
          <div className={styles.ellipseParent10}>
            <div className={styles.frameChild9} />
            <div className={styles.title4}>Title</div>
          </div>
        </div>
        <div className={styles.component34}>
          <div className={styles.tab}>
            <img className={styles.iconHeart} alt="" src="/icon--heart.svg" />
            <div className={styles.label}>USD</div>
            <div className={styles.badge}>
              <div className={styles.container}>
                <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                <img
                  className={styles.avatarsIcon}
                  alt=""
                  src="/avatars@2x.png"
                />
                <div className={styles.label1}>0</div>
                <img className={styles.iconRight} alt="" src="/iconleft.svg" />
              </div>
            </div>
          </div>
          <div className={styles.tab1}>
            <img className={styles.iconHeart1} alt="" src="/icon--heart1.svg" />
            <div className={styles.label2}>NGN</div>
            <div className={styles.badge1}>
              <div className={styles.container1}>
                <img className={styles.iconLeft1} alt="" src="/iconleft.svg" />
                <img
                  className={styles.avatarsIcon1}
                  alt=""
                  src="/avatars@2x.png"
                />
                <div className={styles.label3}>0</div>
                <img className={styles.iconRight1} alt="" src="/iconleft.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.legendtopAxisLabelstrue}>
          <div className={styles.autoLayoutHorizontal}>
            <div className={styles.yAxisLabel}>
              <div className={styles.text6}>Revenue ($)</div>
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
                    src="/divider.svg"
                  />
                  <div className={styles.number1}>Dec</div>
                </div>
                <div className={styles.yAxisLine1}>
                  <div className={styles.number2}>80k</div>
                  <img
                    className={styles.dividerIcon1}
                    alt=""
                    src="/divider-1.svg"
                  />
                  <div className={styles.number3}>Oct</div>
                </div>
                <div className={styles.yAxisLine2}>
                  <div className={styles.number4}>60k</div>
                  <img
                    className={styles.dividerIcon2}
                    alt=""
                    src="/divider-1.svg"
                  />
                  <div className={styles.number5}>Aug</div>
                </div>
                <div className={styles.yAxisLine3}>
                  <div className={styles.number6}>40k</div>
                  <img
                    className={styles.dividerIcon3}
                    alt=""
                    src="/divider-3.svg"
                  />
                  <div className={styles.number7}>Jun</div>
                </div>
                <div className={styles.yAxisLine4}>
                  <div className={styles.number8}>20k</div>
                  <img
                    className={styles.dividerIcon4}
                    alt=""
                    src="/divider-3.svg"
                  />
                  <div className={styles.number9}>Apr</div>
                </div>
                <div className={styles.yAxisLine5}>
                  <div className={styles.number10}>0</div>
                  <img
                    className={styles.dividerIcon5}
                    alt=""
                    src="/divider-3.svg"
                  />
                  <div className={styles.number11}>Jan</div>
                </div>
                <img
                  className={styles.complianceScoreTrends}
                  alt=""
                  src="/compliance-score-trends.svg"
                />
              </div>
              <div className={styles.xAxis}>
                <div className={styles.jan}>Jan</div>
                <div className={styles.feb}>Feb</div>
                <div className={styles.mar}>Mar</div>
                <div className={styles.apr}>Apr</div>
                <div className={styles.may}>May</div>
                <div className={styles.jun}>Jun</div>
                <div className={styles.jul}>Jul</div>
                <div className={styles.aug}>Aug</div>
                <div className={styles.sep}>Sep</div>
                <div className={styles.oct}>Oct</div>
                <div className={styles.nov}>Nov</div>
                <div className={styles.dec}>Dec</div>
              </div>
              <div className={styles.xAxisLabel}>
                <div className={styles.text7}>Months</div>
              </div>
            </div>
            <div className={styles.yAxisLabel1}>
              <div className={styles.text8}>No. of events</div>
            </div>
            <div className={styles.yAxisLabel2}>
              <div className={styles.text9}>Activity Level (%)</div>
            </div>
          </div>
          <img
            className={styles.series2ChartTypelineWavy}
            alt=""
            src="/series2-chart-typeline-wavy.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy1}
            alt=""
            src="/series2-chart-typeline-wavy1.svg"
          />
          <img
            className={styles.series2ChartTypelineWavy2}
            alt=""
            src="/series2-chart-typeline-wavy2.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
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
                src="/outlineinfo@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent4}>
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
                src="/outlineinfo-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.parent1}>
              <div className={styles.div2}>72%</div>
              <div className={styles.iconframe2}>
                <input className={styles.outlinearrowDown} type="checkbox" />
              </div>
            </div>
            <div className={styles.recommendationsContainer}>
              <b className={styles.recommendations2}>Recommendations</b>
              <img
                className={styles.outlineinfoIcon2}
                alt=""
                src="/outlineinfo-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.parent2}>
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
                src="/outlineinfo-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.parent3}>
              <div className={styles.div4}>350</div>
              <div className={styles.iconframe4}>
                <img
                  className={styles.outlinearrowDownIcon1}
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
                src="/outlineinfo-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.parent4}>
              <div className={styles.div5}>350</div>
              <div className={styles.iconframe5}>
                <img
                  className={styles.outlinearrowDownIcon2}
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
                src="/outlineinfo-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild10} />
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.taxSummaryParent}>
            <div className={styles.taxSummary}>TAX SUMMARY</div>
            <b className={styles.studentEngagementWith}>
              Student engagement with opportunities
            </b>
          </div>
          <div className={styles.button6}>
            <div className={styles.reactIconsririmappinlineParent1}>
              <img
                className={styles.reactIconsririmappinline3}
                alt=""
                src="/reacticonsririmappinline.svg"
              />
              <b className={styles.button7}>Last 30 Days</b>
              <img
                className={styles.fillarrowIosDownIcon2}
                alt=""
                src="/fillarrowiosdown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.analyticsDataPointParent}>
          <div className={styles.analyticsDataPoint}>
            <div className={styles.parent5}>
              <b className={styles.b}>350</b>
              <div className={styles.iconframe6}>
                <img className={styles.outlinearrowDownIcon3} alt="" />
              </div>
            </div>
            <div className={styles.engagementParent}>
              <b className={styles.engagement}>Total Collected Waste</b>
              <img
                className={styles.outlineinfoIcon6}
                alt=""
                src="/outlineinfo-6@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint1}>
            <div className={styles.parent6}>
              <b className={styles.b1}>80%</b>
              <div className={styles.iconframe7}>
                <img className={styles.outlinearrowDownIcon4} alt="" />
              </div>
            </div>
            <div className={styles.engagementGroup}>
              <b className={styles.engagement1}>Collection Efficiency</b>
              <img
                className={styles.outlineinfoIcon7}
                alt=""
                src="/outlineinfo-6@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint2}>
            <div className={styles.parent7}>
              <b className={styles.b2}>350</b>
              <div className={styles.iconframe8}>
                <img className={styles.outlinearrowUpIcon2} alt="" />
              </div>
            </div>
            <div className={styles.engagementContainer}>
              <b className={styles.engagement2}>Recycling Ratio</b>
              <img
                className={styles.outlineinfoIcon8}
                alt=""
                src="/outlineinfo-6@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint3}>
            <div className={styles.parent8}>
              <b className={styles.b3}>350</b>
              <div className={styles.iconframe9}>
                <img className={styles.outlinearrowUpIcon3} alt="" />
              </div>
            </div>
            <div className={styles.engagementParent1}>
              <b className={styles.engagement3}>Locations</b>
              <img
                className={styles.outlineinfoIcon9}
                alt=""
                src="/outlineinfo-6@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint4}>
            <div className={styles.parent9}>
              <b className={styles.b4}>350</b>
              <div className={styles.iconframe10}>
                <img className={styles.outlinearrowDownIcon5} alt="" />
              </div>
            </div>
            <div className={styles.engagementParent2}>
              <b className={styles.engagement4}>Average Bin Level</b>
              <img
                className={styles.outlineinfoIcon10}
                alt=""
                src="/outlineinfo-6@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint5}>
            <div className={styles.parent10}>
              <b className={styles.b5}>350</b>
              <div className={styles.iconframe11}>
                <img
                  className={styles.outlinearrowDownIcon6}
                  alt=""
                  src="/outlinearrowdown-7.svg"
                />
              </div>
            </div>
            <div className={styles.engagementParent3}>
              <b className={styles.engagement5}>Engagement</b>
              <img
                className={styles.outlineinfoIcon11}
                alt=""
                src="/outlineinfo-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint6}>
            <div className={styles.parent11}>
              <b className={styles.b6}>350</b>
              <div className={styles.iconframe12}>
                <img
                  className={styles.outlinearrowDownIcon7}
                  alt=""
                  src="/outlinearrowdown-7.svg"
                />
              </div>
            </div>
            <div className={styles.engagementParent4}>
              <b className={styles.engagement6}>Engagement</b>
              <img
                className={styles.outlineinfoIcon12}
                alt=""
                src="/outlineinfo-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint7}>
            <div className={styles.parent12}>
              <b className={styles.b7}>350</b>
              <div className={styles.iconframe13}>
                <img
                  className={styles.outlinearrowDownIcon8}
                  alt=""
                  src="/outlinearrowdown-7.svg"
                />
              </div>
            </div>
            <div className={styles.engagementParent5}>
              <b className={styles.engagement7}>Engagement</b>
              <img
                className={styles.outlineinfoIcon13}
                alt=""
                src="/outlineinfo-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.analyticsDataPoint8}>
            <div className={styles.parent13}>
              <b className={styles.b8}>350</b>
              <div className={styles.iconframe14}>
                <img
                  className={styles.outlinearrowDownIcon9}
                  alt=""
                  src="/outlinearrowdown-7.svg"
                />
              </div>
            </div>
            <div className={styles.engagementParent6}>
              <b className={styles.engagement8}>Engagement</b>
              <img
                className={styles.outlineinfoIcon14}
                alt=""
                src="/outlineinfo-11@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild11} />
          <div className={styles.frameChild12} />
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild13} />
        <div className={styles.frameChild14} />
        <div className={styles.frameChild15} />
        <div className={styles.frameChild16} />
      </div>
      <div className={styles.currencyBreakdownWrapper}>
        <div className={styles.currencyBreakdown}>Currency Breakdown</div>
      </div>
      <div className={styles.frameParent10}>
        <div className={styles.paymentTimelinessWrapper}>
          <div className={styles.paymentTimeliness}>Payment Timeliness</div>
        </div>
        <div className={styles.currencyBreakdownContainer}>
          <div className={styles.currencyBreakdown1}>Currency Breakdown</div>
        </div>
      </div>
      <div className={styles.frameParent11}>
        <div className={styles.regulatoryUpdatesWrapper}>
          <div className={styles.regulatoryUpdates}>Regulatory Updates</div>
        </div>
        <div className={styles.complianceScoreTrendsWrapper}>
          <div className={styles.complianceScoreTrends1}>
            Compliance Score Trends
          </div>
        </div>
      </div>
      <div className={styles.frameParent12}>
        <div className={styles.frameParent13}>
          <div className={styles.comparativeAnalysisGotParent}>
            <div className={styles.comparativeAnalysisGot}>
              Comparative Analysis (GOT)
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.button8}>
                <div className={styles.reactIconsririmappinlineParent2}>
                  <img
                    className={styles.reactIconsririmappinline4}
                    alt=""
                    src="/reacticonsririmappinline.svg"
                  />
                  <b className={styles.button9}>Nigeria</b>
                  <img
                    className={styles.fillarrowIosDownIcon3}
                    alt=""
                    src="/fillarrowiosdown.svg"
                  />
                </div>
              </div>
              <div className={styles.button10}>
                <div className={styles.reactIconsririmappinlineParent3}>
                  <img
                    className={styles.reactIconsririmappinline5}
                    alt=""
                    src="/reacticonsririmappinline.svg"
                  />
                  <b className={styles.button11}>Add / Remove Country</b>
                  <img
                    className={styles.iconsolidplus1}
                    alt=""
                    src="/iconsolidplus.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent14}>
              <div className={styles.textWrapper3}>
                <div className={styles.text10}>1D</div>
              </div>
              <div className={styles.textWrapper4}>
                <div className={styles.text11}>1W</div>
              </div>
              <div className={styles.textWrapper5}>
                <div className={styles.text12}>1M</div>
              </div>
              <div className={styles.textWrapper6}>
                <div className={styles.text13}>3M</div>
              </div>
              <div className={styles.textWrapper7}>
                <div className={styles.text14}>6M</div>
              </div>
              <div className={styles.textWrapper8}>
                <div className={styles.text15}>1Y</div>
              </div>
            </div>
            <div className={styles.button12}>
              <div className={styles.reactIconsririmappinlineParent4}>
                <img
                  className={styles.reactIconsririmappinline6}
                  alt=""
                  src="/reacticonsririmappinline.svg"
                />
                <b className={styles.button13}>Last 1 year</b>
                <img
                  className={styles.fillarrowIosDownIcon4}
                  alt=""
                  src="/fillarrowiosdown-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent15}>
            <div className={styles.ellipseParent11}>
              <div className={styles.frameChild17} />
              <div className={styles.naira}>Naira</div>
            </div>
            <div className={styles.ellipseParent12}>
              <div className={styles.frameChild18} />
              <div className={styles.stableCoin}>Stable coin</div>
            </div>
            <div className={styles.ellipseParent13}>
              <div className={styles.frameChild19} />
              <div className={styles.title5}>Title</div>
            </div>
            <div className={styles.ellipseParent14}>
              <div className={styles.frameChild20} />
              <div className={styles.title6}>Title</div>
            </div>
            <div className={styles.ellipseParent15}>
              <div className={styles.frameChild21} />
              <div className={styles.title7}>Title</div>
            </div>
            <div className={styles.ellipseParent16}>
              <div className={styles.frameChild22} />
              <div className={styles.title8}>Title</div>
            </div>
            <div className={styles.ellipseParent17}>
              <div className={styles.frameChild23} />
              <div className={styles.title9}>Title</div>
            </div>
          </div>
          <div className={styles.legendtopAxisLabelstrue1}>
            <div className={styles.autoLayoutHorizontal1}>
              <div className={styles.yAxisLabel3}>
                <div className={styles.text16}>Comparative Efficiency (%)</div>
              </div>
              <div className={styles.content1}>
                <div className={styles.legend1}>
                  <div className={styles.legendSeries6}>
                    <div className={styles.color6} />
                    <div className={styles.series11}>No. of Earners</div>
                  </div>
                  <div className={styles.legendSeries7}>
                    <div className={styles.color7} />
                    <div className={styles.series21}>Spent</div>
                  </div>
                  <div className={styles.legendSeries8}>
                    <div className={styles.color8} />
                    <div className={styles.series31}>Series 3</div>
                  </div>
                  <div className={styles.legendSeries9}>
                    <div className={styles.color9} />
                    <div className={styles.series41}>Series 4</div>
                  </div>
                  <div className={styles.legendSeries10}>
                    <div className={styles.color10} />
                    <div className={styles.series51}>Series 5</div>
                  </div>
                  <div className={styles.legendSeries11}>
                    <div className={styles.color11} />
                    <div className={styles.series61}>Series 6</div>
                  </div>
                </div>
                <div className={styles.yAxis1}>
                  <div className={styles.yAxisLine6}>
                    <div className={styles.number12}>100</div>
                    <img
                      className={styles.dividerIcon6}
                      alt=""
                      src="/divider-6.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine7}>
                    <div className={styles.number13}>80</div>
                    <img
                      className={styles.dividerIcon7}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine8}>
                    <div className={styles.number14}>60</div>
                    <img
                      className={styles.dividerIcon8}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine9}>
                    <div className={styles.number15}>40</div>
                    <img
                      className={styles.dividerIcon9}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine10}>
                    <div className={styles.number16}>20</div>
                    <img
                      className={styles.dividerIcon10}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine11}>
                    <div className={styles.number17}>0</div>
                    <img
                      className={styles.dividerIcon11}
                      alt=""
                      src="/divider-7.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine12}>
                    <div className={styles.number18}>0</div>
                    <img
                      className={styles.dividerIcon12}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine13}>
                    <div className={styles.number19}>0</div>
                    <img
                      className={styles.dividerIcon13}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine14}>
                    <div className={styles.number20}>0</div>
                    <img
                      className={styles.dividerIcon14}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine15}>
                    <div className={styles.number21}>0</div>
                    <img
                      className={styles.dividerIcon15}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine16}>
                    <div className={styles.number22}>0</div>
                    <img
                      className={styles.dividerIcon16}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                  <div className={styles.yAxisLine17}>
                    <div className={styles.number23}>0</div>
                    <img
                      className={styles.dividerIcon17}
                      alt=""
                      src="/divider-12.svg"
                    />
                  </div>
                </div>
                <div className={styles.xAxis1}>
                  <div className={styles.jan1}>Jan</div>
                  <div className={styles.feb1}>Feb</div>
                  <div className={styles.mar1}>Mar</div>
                  <div className={styles.apr1}>Apr</div>
                  <div className={styles.may1}>May</div>
                  <div className={styles.jun1}>Jun</div>
                  <div className={styles.jul1}>Jul</div>
                  <div className={styles.aug1}>Aug</div>
                  <div className={styles.sep1}>Sep</div>
                  <div className={styles.oct1}>Oct</div>
                  <div className={styles.nov1}>Nov</div>
                  <div className={styles.dec1}>Dec</div>
                </div>
                <div className={styles.xAxisLabel1}>
                  <div className={styles.text17}>Month</div>
                </div>
              </div>
              <div className={styles.yAxisLabel4}>
                <div className={styles.text18}>No. of events</div>
              </div>
            </div>
            <div className={styles.series2ChartTypelineWavy3}>
              <img className={styles.series1Icon} alt="" src="/series-1.svg" />
              <div className={styles.parent14}>
                <div className={styles.div6}>80%</div>
                <div className={styles.frameChild24} />
              </div>
            </div>
            <img
              className={styles.series2ChartTypelineWavy4}
              alt=""
              src="/series2-chart-typeline-wavy3.svg"
            />
            <img
              className={styles.series2ChartTypelineWavy5}
              alt=""
              src="/series2-chart-typeline-wavy4.svg"
            />
            <img
              className={styles.legendtopAxisLabelstrueChild}
              alt=""
              src="/group-2046.svg"
            />
          </div>
        </div>
        <div className={styles.geographicalHeatMapParent}>
          <div className={styles.geographicalHeatMap}>
            Geographical Heat Map
          </div>
          <div className={styles.frameParent16}>
            <div className={styles.ellipseParent18}>
              <div className={styles.frameChild25} />
              <div className={styles.highestActivity}>Highest activity</div>
            </div>
            <div className={styles.ellipseParent19}>
              <div className={styles.frameChild26} />
              <div className={styles.midLevelActivity}>Mid-level activity</div>
            </div>
            <div className={styles.ellipseParent20}>
              <div className={styles.frameChild27} />
              <div className={styles.lowestActivity}>Lowest activity</div>
            </div>
            <div className={styles.ellipseParent21}>
              <div className={styles.frameChild28} />
              <div className={styles.title10}>Title</div>
            </div>
            <div className={styles.ellipseParent22}>
              <div className={styles.frameChild29} />
              <div className={styles.title11}>Title</div>
            </div>
            <div className={styles.ellipseParent23}>
              <div className={styles.frameChild30} />
              <div className={styles.title12}>Title</div>
            </div>
            <div className={styles.ellipseParent24}>
              <div className={styles.frameChild31} />
              <div className={styles.title13}>Title</div>
            </div>
            <div className={styles.ellipseParent25}>
              <div className={styles.frameChild32} />
              <div className={styles.title14}>Title</div>
            </div>
          </div>
          <div className={styles.autoAddedFrame}>
            <div className={styles.modulemapCard}>
              <img
                className={styles.componentcardWithHeader}
                alt=""
                src="/componentcard-with-header.svg"
              />
              <img className={styles.mapIcon} alt="" src="/map@2x.png" />
              <img
                className={styles.modulemapCardChild}
                alt=""
                src="/group-2047.svg"
              />
              <div className={styles.cardTrip}>
                <div className={styles.elementcardBase}>
                  <div className={styles.cardBase} />
                  <div className={styles.cardBase1} />
                  <div className={styles.groupDiv}>
                    <div className={styles.groupChild} />
                    <img
                      className={styles.jammapMarkerFIcon}
                      alt=""
                      src="/jammapmarkerf.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.groupItem} />
                  <img
                    className={styles.jammapMarkerFIcon1}
                    alt=""
                    src="/jammapmarkerf.svg"
                  />
                </div>
                <div className={styles.componentcontenttrip}>
                  <div className={styles.left}>
                    <div className={styles.manhattanMall}>
                      Theatre District - 7529 E. Pecan St.
                    </div>
                    <div className={styles.manhattanMall1}>
                      40.689265 -75.044505
                    </div>
                  </div>
                </div>
                <div className={styles.text19}>
                  <div className={styles.componentcontentRowtrip}>
                    <div className={styles.componentcontenttrip1}>
                      <div className={styles.left1}>
                        <div className={styles.manhattanMall2}>
                          Theatre District - 7529 E. Pecan St.
                        </div>
                        <div className={styles.manhattanMall3}>
                          40.689263 -74.044505
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.locationInfoParent}>
                <div className={styles.locationInfo}>
                  <img className={styles.maskIcon} alt="" src="/mask.svg" />
                  <div className={styles.elementcardBase1}>
                    <div className={styles.cardBase2} />
                    <div className={styles.cardBase3} />
                    <div className={styles.rectangleParent2}>
                      <div className={styles.groupInner} />
                      <img
                        className={styles.jammapMarkerFIcon2}
                        alt=""
                        src="/jammapmarkerf-2.svg"
                      />
                    </div>
                    <div className={styles.manhattanMallTimesSquareParent}>
                      <div className={styles.manhattanMall4}>Lagos</div>
                      <div className={styles.frameParent17}>
                        <div className={styles.manhattanMallTimesSquareGroup}>
                          <div className={styles.manhattanMall5}>
                            Transaction volume
                          </div>
                          <div className={styles.manhattanMall6}>
                            NGN 55,595,721,977
                          </div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.imageParent}>
                            <img
                              className={styles.imageIcon}
                              alt=""
                              src="/image@2x.png"
                            />
                            <div className={styles.avatar}>
                              <img
                                className={styles.imageIcon1}
                                alt=""
                                src="/image1@2x.png"
                              />
                              <div className={styles.verticalContainer} />
                              <div className={styles.verticalContainer1} />
                              <div className={styles.verticalContainer2} />
                              <div className={styles.verticalContainer3} />
                            </div>
                            <div className={styles.frameChild33} />
                            <div className={styles.symbol}>
                              <img className={styles.vectorIcon} alt="" />
                              <img
                                className={styles.image20Icon}
                                alt=""
                                src="/image-20@2x.png"
                              />
                            </div>
                            <div className={styles.token3}>
                              <img
                                className={styles.vectorIcon1}
                                alt=""
                                src="/vector-1.svg"
                              />
                            </div>
                            <div className={styles.value}>PYUSD - NGN</div>
                            <div className={styles.vectorParent}>
                              <img
                                className={styles.vectorIcon2}
                                alt=""
                                src="/vector-2.svg"
                              />
                              <div className={styles.value1}>10,572,896</div>
                            </div>
                          </div>
                          <div className={styles.token31}>
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="/vector-3.svg"
                            />
                          </div>
                          <img
                            className={styles.fillcheckmarkCircleIcon}
                            alt=""
                            src="/fillcheckmarkcircle@2x.png"
                          />
                          <img
                            className={styles.series1Icon1}
                            alt=""
                            src="/series-1-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardTrip1}>
                  <div className={styles.elementcardBase2}>
                    <div className={styles.cardBase4} />
                    <div className={styles.cardBase5} />
                  </div>
                  <div className={styles.text20}>
                    <div className={styles.componentcontentRowtrip1}>
                      <div className={styles.manhattanMall7}>+</div>
                      <div className={styles.manhattanMall8}>-</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.locationInfoGroup}>
                <div className={styles.locationInfo1}>
                  <img className={styles.maskIcon1} alt="" src="/mask.svg" />
                  <div className={styles.elementcardBase3}>
                    <div className={styles.cardBase6} />
                    <div className={styles.cardBase7} />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.groupChild1} />
                      <img
                        className={styles.jammapMarkerFIcon3}
                        alt=""
                        src="/jammapmarkerf-2.svg"
                      />
                    </div>
                    <div className={styles.manhattanMallTimesSquareContainer}>
                      <div className={styles.manhattanMall9}>Lagos</div>
                      <div className={styles.frameParent19}>
                        <div className={styles.manhattanMallTimesSquareParent1}>
                          <div className={styles.manhattanMall10}>
                            Transaction volume
                          </div>
                          <div className={styles.manhattanMall11}>
                            NGN 55,595,721,977
                          </div>
                        </div>
                        <input className={styles.frameInput} type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardTrip2}>
                  <div className={styles.elementcardBase4}>
                    <div className={styles.cardBase8} />
                    <div className={styles.cardBase9} />
                  </div>
                  <div className={styles.text21}>
                    <div className={styles.componentcontentRowtrip2}>
                      <div className={styles.manhattanMall12}>+</div>
                      <div className={styles.manhattanMall13}>-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainNavigation />
      <main className={styles.frameMain}>
        <FrameComponent4 />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default Dashboard;
