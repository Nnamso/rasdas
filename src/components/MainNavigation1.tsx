import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainNavigation1.module.css";

const MainNavigation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVerticalTabContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVerticalTabContainer3Click = useCallback(() => {
    // Please sync "Revenue Projections Dashboard" to the project
  }, []);

  const onVerticalTabContainer4Click = useCallback(() => {
    // Please sync "Additional Metrics and Features" to the project
  }, []);

  const onVerticalTabContainer5Click = useCallback(() => {
    // Please sync "Role Types" to the project
  }, []);

  const onVerticalTabContainer6Click = useCallback(() => {
    // Please sync "User Access" to the project
  }, []);

  return (
    <div className={styles.mainNavigation}>
      <div className={styles.mainNavigationChild} />
      <div className={styles.verticalTab}>
        <img
          className={styles.outlineradioIcon}
          alt=""
          src="/outlineradio@2x.png"
        />
        <div className={styles.navItemRightIcon}>
          <div className={styles.navItem}>
            <div className={styles.navItem1}>Campaigns</div>
            <img
              className={styles.notificationIndicatorIcon}
              alt=""
              src="/notification-indicator.svg"
            />
          </div>
          <div className={styles.iconPlaceholder}>
            <div className={styles.base} />
            <img
              className={styles.iconPlaceholderStroke}
              alt=""
              src="/iconplaceholder-stroke.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.verticalTab1}>
        <img
          className={styles.outlinebuildingIcon}
          alt=""
          src="/outlinebuilding.svg"
        />
        <div className={styles.navItemRightIcon1}>
          <div className={styles.navItem2}>
            <div className={styles.navItem3}>Organization</div>
            <img
              className={styles.notificationIndicatorIcon1}
              alt=""
              src="/notification-indicator.svg"
            />
          </div>
          <div className={styles.iconPlaceholder1}>
            <div className={styles.base1} />
            <img
              className={styles.iconPlaceholderStroke1}
              alt=""
              src="/iconplaceholder-stroke.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.imageRecognizer}>
        <div className={styles.logicGate}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.teamMemberRoleWrapper}>
                <div className={styles.teamMemberRole}>RAS</div>
              </div>
            </div>
            <div className={styles.organizationNameParent}>
              <b className={styles.organizationName}>RAS Admin</b>
              <div className={styles.teamMemberRole1}>Super Admin</div>
            </div>
          </div>
          <div className={styles.component26Parent}>
            <div className={styles.component26}>
              <div
                className={styles.verticalTab2}
                onClick={onVerticalTabContainerClick}
              >
                <img
                  className={styles.iconoutlineviewGrid}
                  alt=""
                  src="/iconoutlineviewgrid.svg"
                />
                <div className={styles.navItemRightIcon2}>
                  <div className={styles.navItem4}>
                    <div className={styles.navItem5}>Dashboard</div>
                    <img
                      className={styles.notificationIndicatorIcon2}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder2}>
                    <div className={styles.base2} />
                    <img
                      className={styles.iconPlaceholderStroke2}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalTab3}>
                <img
                  className={styles.reactIconsririarrowupdownli}
                  alt=""
                  src="/reacticonsririarrowupdownline1.svg"
                />
                <div className={styles.navItemRightIcon3}>
                  <div className={styles.navItem6}>
                    <div className={styles.navItem7}>Revenue Volume</div>
                    <img
                      className={styles.notificationIndicatorIcon3}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder3}>
                    <div className={styles.base3} />
                    <img
                      className={styles.iconPlaceholderStroke3}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalTab4}>
                <img
                  className={styles.reactIconsririfilechartline}
                  alt=""
                  src="/reacticonsririfilechartline.svg"
                />
                <div className={styles.navItemRightIcon4}>
                  <div className={styles.navItem8}>
                    <div className={styles.navItem9}>{`Tax & Compliance`}</div>
                    <img
                      className={styles.notificationIndicatorIcon4}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder4}>
                    <div className={styles.base4} />
                    <img
                      className={styles.iconPlaceholderStroke4}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.verticalTab5}
                onClick={onVerticalTabContainer3Click}
              >
                <img
                  className={styles.iconoutlinecash}
                  alt=""
                  src="/iconoutlinecash.svg"
                />
                <div className={styles.navItemRightIcon5}>
                  <div className={styles.navItem10}>
                    <div className={styles.navItem11}>Fines</div>
                    <img
                      className={styles.notificationIndicatorIcon5}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder5}>
                    <div className={styles.base5} />
                    <img
                      className={styles.iconPlaceholderStroke5}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.verticalTab6}
                onClick={onVerticalTabContainer4Click}
              >
                <img
                  className={styles.iconDocOutline}
                  alt=""
                  src="/icon-doc-outline.svg"
                />
                <div className={styles.navItemRightIcon6}>
                  <div className={styles.navItem12}>
                    <div className={styles.navItem13}>Additional Metrics</div>
                    <img
                      className={styles.notificationIndicatorIcon6}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder6}>
                    <div className={styles.base6} />
                    <img
                      className={styles.iconPlaceholderStroke6}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.verticalTab7}
                onClick={onVerticalTabContainer5Click}
              >
                <img
                  className={styles.reactIconsririaccountpinbox}
                  alt=""
                  src="/reacticonsririaccountpinboxline.svg"
                />
                <div className={styles.navItemRightIcon7}>
                  <div className={styles.navItem14}>
                    <div className={styles.navItem15}>Role Types</div>
                    <img
                      className={styles.notificationIndicatorIcon7}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder7}>
                    <div className={styles.base7} />
                    <img
                      className={styles.iconPlaceholderStroke7}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.verticalTab8}
                onClick={onVerticalTabContainer6Click}
              >
                <img
                  className={styles.outlinepeople2Icon}
                  alt=""
                  src="/outlinepeople2@2x.png"
                />
                <div className={styles.navItemRightIcon8}>
                  <div className={styles.navItem16}>
                    <div className={styles.navItem17}>User Access</div>
                    <img
                      className={styles.notificationIndicatorIcon8}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder8}>
                    <div className={styles.base8} />
                    <img
                      className={styles.iconPlaceholderStroke8}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalTab9}>
                <img
                  className={styles.reactIconsririfileeditline}
                  alt=""
                  src="/reacticonsririfileeditline.svg"
                />
                <div className={styles.navItemRightIcon9}>
                  <div className={styles.navItem18}>
                    <div className={styles.navItem19}>Applications</div>
                    <img
                      className={styles.notificationIndicatorIcon9}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder9}>
                    <div className={styles.base9} />
                    <img
                      className={styles.iconPlaceholderStroke9}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.verticalTab10}>
                <img
                  className={styles.outlineperson2Icon}
                  alt=""
                  src="/outlineperson21@2x.png"
                />
                <div className={styles.navItemRightIcon10}>
                  <div className={styles.navItem20}>
                    <div className={styles.navItem21}>My Account</div>
                    <img
                      className={styles.notificationIndicatorIcon10}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder10}>
                    <div className={styles.base10} />
                    <img
                      className={styles.iconPlaceholderStroke10}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalTab11}>
                <img
                  className={styles.outlinequestionMarkCircleIcon}
                  alt=""
                  src="/outlinequestionmarkcircle@2x.png"
                />
                <div className={styles.navItemRightIcon11}>
                  <div className={styles.navItem22}>
                    <div className={styles.navItem23}>Get help</div>
                    <img
                      className={styles.notificationIndicatorIcon11}
                      alt=""
                      src="/notification-indicator.svg"
                    />
                  </div>
                  <div className={styles.iconPlaceholder11}>
                    <div className={styles.base11} />
                    <img
                      className={styles.iconPlaceholderStroke11}
                      alt=""
                      src="/iconplaceholder-stroke.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navFeaturedCard}>
              <div className={styles.frameGroup}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/vector-746.svg"
                  />
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/vector-748.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-747.svg"
                  />
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/vector-749.svg"
                  />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/vector-742.svg"
                  />
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/vector-743.svg"
                  />
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/vector-744.svg"
                  />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="/vector-745.svg"
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle@2x.png"
                  />
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame-6@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.browserUrlControlsWrapper}>
                    <div className={styles.browserUrlControls}>
                      <img
                        className={styles.toolbarBrowserControls}
                        alt=""
                        src="/toolbar--browser-controls.svg"
                      />
                      <div className={styles.broswerControlBar}>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="/logo@2x.png"
                        />
                        <div className={styles.broswerControlBarChild} />
                        <div className={styles.broswerControlBarItem} />
                        <div className={styles.broswerControlBarInner} />
                        <img
                          className={styles.logoIcon1}
                          alt=""
                          src="/logo-1@2x.png"
                        />
                      </div>
                      <div className={styles.broswerControlBarParent}>
                        <div className={styles.broswerControlBar1}>
                          <img
                            className={styles.logoIcon2}
                            alt=""
                            src="/logo-2@2x.png"
                          />
                          <div className={styles.sorter} />
                          <div className={styles.sorter1} />
                          <div className={styles.sorter2} />
                          <div className={styles.sorter3} />
                          <img
                            className={styles.logoIcon3}
                            alt=""
                            src="/logo-3@2x.png"
                          />
                        </div>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameParent1}>
                            <div className={styles.frameChild6} />
                            <img
                              className={styles.logoIcon4}
                              alt=""
                              src="/logo-4@2x.png"
                            />
                          </div>
                          <div className={styles.broswerControlBar2}>
                            <div className={styles.broswerControlBarInner1}>
                              <div className={styles.logoParent}>
                                <img
                                  className={styles.logoIcon5}
                                  alt=""
                                  src="/logo-5@2x.png"
                                />
                                <div className={styles.functionTree}>
                                  <img
                                    className={styles.logoIcon6}
                                    alt=""
                                    src="/logo-6@2x.png"
                                  />
                                  <img
                                    className={styles.logoIcon7}
                                    alt=""
                                    src="/logo-7@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.broswerControlBarChild1} />
                            <div className={styles.broswerControlBarInner2}>
                              <div className={styles.logoGroup}>
                                <img
                                  className={styles.logoIcon8}
                                  alt=""
                                  src="/logo-8@2x.png"
                                />
                                <div className={styles.logoContainer}>
                                  <img
                                    className={styles.logoIcon9}
                                    alt=""
                                    src="/logo-9@2x.png"
                                  />
                                  <img
                                    className={styles.logoIcon10}
                                    alt=""
                                    src="/logo1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.broswerControlBarChild2} />
                            <div className={styles.broswerControlBarInner3}>
                              <div className={styles.logoParent1}>
                                <img
                                  className={styles.logoIcon11}
                                  alt=""
                                  src="/logo-11@2x.png"
                                />
                                <div className={styles.logoParent2}>
                                  <img
                                    className={styles.logoIcon12}
                                    alt=""
                                    src="/logo-12@2x.png"
                                  />
                                  <img
                                    className={styles.logoIcon13}
                                    alt=""
                                    src="/logo-13@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.broswerControlBar3}>
                            <div className={styles.broswerControlBarChild3} />
                            <div className={styles.broswerControlBarChild4} />
                            <div className={styles.broswerControlBarChild5} />
                            <div className={styles.broswerControlBarChild6} />
                            <div className={styles.broswerControlBarChild7} />
                            <div className={styles.loopStructure} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.variableHolder}>
                    <div className={styles.functionCaller}>Welcome</div>
                    <div className={styles.supportingText}>
                      Get to know your RAS Dashboard with our short walkthrough
                      course.
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.buttonTexts}>
                      <div className={styles.container}>
                        <div className={styles.label}>Start Tutorial</div>
                      </div>
                    </div>
                    <div className={styles.buttonTexts1}>
                      <div className={styles.container1}>
                        <div className={styles.label1}>Close</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainNavigationItem} />
    </div>
  );
};

export default MainNavigation;
