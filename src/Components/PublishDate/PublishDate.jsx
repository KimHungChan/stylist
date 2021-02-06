import React from "react";
import moment from "moment";

const PublishDate = ({ date }) => {
  return (
    <time datetime={date} title={date}>
      {
        (moment.updateLocale("en", {
          relativeTime: {
            m: "1 minute",
            mm: "%d minutes",
            h: "1 hour",
            hh: "%d hours",
            d: "1 day",
            dd: "%d days",
            M: "1 month",
            MM: "%d months",
            y: "1 year",
            yy: "%d years",
          },
        }),
        moment(date).fromNow())
      }
    </time>
  );
};

export default PublishDate;
