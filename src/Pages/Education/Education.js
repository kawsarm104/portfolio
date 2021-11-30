import React from "react";
// react timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div style={{ backgroundColor: "#e3e3e3" }}>
      <h2 className="text-center mt-3 py-4 fw-bolder">
        Education & Experience
      </h2>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{
            //   borderRight: "7px solid  rgb(33, 150, 243)",
            // }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              BSc in Computer Science & Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Information Technology and Sciences
            </h4>
            <p>CGPA:3.59 (out of 4.00)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{
            //   borderRight: "7px solid  rgb(33, 150, 243)",
            // }}
            date="2013 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Govt. Science College
            </h4>
            <p>GPA:4.08 (out of 5.00)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{
            //   borderRight: "7px solid  rgb(33, 150, 243)",
            // }}
            date="2011 - 2013"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary School Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Govt. Science College
            </h4>
            <p>GPA:5.00 (out of 5.00)</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
