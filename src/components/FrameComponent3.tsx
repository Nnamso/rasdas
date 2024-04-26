import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  todaysPayment?: string;
  b?: string;
  trendingUp?: string;
  increaseFromLastMonth?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  todaysPayment,
  b,
  trendingUp,
  increaseFromLastMonth,
  propBackgroundColor,
  propBorder,
  propBackgroundColor1,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} style={ellipseDivStyle} />
          <img className={styles.financeIcon} alt="" src="/finance.svg" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.todaysPaymentParent}>
            <div className={styles.todaysPayment}>{todaysPayment}</div>
            <b className={styles.b}>{b}</b>
          </div>
          <div className={styles.trendingUpParent} style={frameDiv1Style}>
            <img
              className={styles.trendingUpIcon}
              loading="lazy"
              alt=""
              src={trendingUp}
            />
            <div className={styles.increaseFromLast}>
              {increaseFromLastMonth}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
