import * as React from 'react';
import { Paper, Icon } from 'material-ui';
import * as timeline  from 'react-event-timeline';

const Timeline = timeline.Timeline;
const TimelineEvent = timeline.TimelineEvent;

export class WorkExperience extends React.Component {
  render() {
    return (
      <Paper>
    <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           container="card"
                           icon={<i className="material-icons md-18">textsms</i>}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>
      </Paper>
    );
  }
}
