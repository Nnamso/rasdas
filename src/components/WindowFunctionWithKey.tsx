import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./WindowFunctionWithKey.module.css";

export type WindowFunctionWithKeyType = {
  distribution?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const WindowFunctionWithKey: FunctionComponent<WindowFunctionWithKeyType> = ({
  distribution,
  propHeight,
  propFlex,
  propPadding,
  propBackgroundColor,
}) => {
  const windowFunctionWithKeyStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const conditionFunctionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={styles.windowFunctionWithKey}
      style={windowFunctionWithKeyStyle}
    >
      <div className={styles.component61Wrapper} style={frameDiv2Style}>
        <div className={styles.component61}>
          <div
            className={styles.conditionFunction}
            style={conditionFunctionStyle}
          />
        </div>
      </div>
      <div className={styles.distribution}>{distribution}</div>
    </div>
  );
};

export default WindowFunctionWithKey;
