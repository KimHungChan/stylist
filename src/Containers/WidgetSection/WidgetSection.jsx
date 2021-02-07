import React from "react";
import Paragraph from "../../Components/Widgets/Paragraph/Paragraph";
import Image from "../../Components/Widgets/Image/Image";
import PullQuote from "../../Components/Widgets/PullQuote/PullQuote";
import Divider from "../../Components/Widgets/Divider/Divider";
import "./WidgetSection.scss";

const WidgetSection = ({ widgets }) => {
  const RenderWidget = ({ widget }) => {
    switch (widget.acf_fc_layout) {
      case "paragraph":
        return <Paragraph paragraph={widget.paragraph} />;
      case "image":
        return (
          <Image crop={widget.crop} image={widget.image} width={widget.width} />
        );
      case "pull-quote":
        return <PullQuote text={widget.text} width={widget.width} />;
      case "divider":
        return <Divider />;
      default:
        return <></>;
    }
  };

  return (
    <div className="widget-container">
      {widgets.map((widget) => (
        <>
          <RenderWidget widget={widget} />
        </>
      ))}
    </div>
  );
};

export default WidgetSection;
