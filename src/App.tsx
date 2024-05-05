import "./App.css";
import { Card } from "@gravity-ui/uikit";
import { Text } from "@gravity-ui/uikit";
import { User } from "@gravity-ui/uikit";
import imgSrc from "../public/assets/img/1.jpg";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "@gravity-ui/uikit";
import { ThemeProvider } from "@gravity-ui/uikit";
import type { dataUser } from "./types";
import { AnyComponent } from "./AnyComponent";

const dataUser: dataUser = {
  name: "Иван Иванкин",
  description: "супер чувак, один из лучших",
  textField:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt convallis porta. Suspendisse ut leo accumsan velit rutrum vehicula. Curabitur placerat tempus mattis. Mauris dictum eros consectetur laoreet gravida. Integer ac convallis erat. Praesent risus est, scelerisque sit amet finibus ut, scelerisque vitae metus. Donec sagittis velit at bibendum sollicitudin.",
};

export const App = () => {
  const textField = useRef<HTMLSpanElement>(null);
  const [visibleTooltip, setVisibleTooltip] = useState(true);

  useEffect(() => {
    if (textField.current!.offsetWidth < textField.current!.scrollWidth)
      setVisibleTooltip(!visibleTooltip);
  }, []);

  return (
    <>
      <ThemeProvider>
        <Card
          className="card"
          style={{ backgroundColor: "rgb(171, 171, 218)" }}
        >
          <User
            avatar={{ imgUrl: imgSrc }}
            name={dataUser.name}
            description={dataUser.description}
            size="xl"
          />
          <div className="card__footer">
            <Tooltip
              content={dataUser.textField}
              disabled={visibleTooltip}
              className="card__tooltip"
            >
              <div>
                <Text
                  ref={textField}
                  ellipsis={true}
                  className="card__text_field"
                >
                  {dataUser.textField}
                </Text>
              </div>
            </Tooltip>
            <AnyComponent />
          </div>
        </Card>
      </ThemeProvider>
    </>
  );
};
