
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../index.css';
function Details() {
  return (
    <div className="bg-custom-text bg-image w-full h-screen mt-5 rounded-lg">


...

<VerticalTimeline className='w-1/2'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(73, 69, 64)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '1px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Manipal University Jaipur</h3>
    <h4 className="vertical-timeline-element-subtitle">BCA</h4>
    <p className="timeline-hidden">
      1st year= 7.5 CGPA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(73, 69, 64)', color: '#fff' }}
    date="Future"
    iconStyle={{ background: 'rgb(96, 85, 97)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Progress</h3>
    <h4 className="vertical-timeline-element-subtitle">Wait</h4>
    <p className="timeline-hidden">
      Future is unpredictable
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(73, 69, 64)', color: '#fff' }}
    date="Future"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Progress</h3>
    <h4 className="vertical-timeline-element-subtitle">Wait</h4>
    <p className="timeline-hidden">
    Future is unpredictable
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(73, 69, 64)', color: '#fff' }}
    date="Future"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Progress</h3>
    <h4 className="vertical-timeline-element-subtitle">Wait</h4>
    <p className="timeline-hidden">
    Future is unpredictable
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education w-1/2"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education w-1/2"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement> */}


</VerticalTimeline>
    </div>
  );
}
export default Details; 