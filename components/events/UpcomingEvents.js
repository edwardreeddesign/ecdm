import { upcomingEvents } from '../../constants';
import UpcomingCard from './UpcomingCard';

const UpcomingEvents = () => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-wrap justify-center  gap-4 pb-24">
        {upcomingEvents.map(upcomingEvent => (
          <UpcomingCard
            upcomingEvent={upcomingEvent}
            key={upcomingEvent.name}
          />
        ))}
      </div>
    </div>
  );
};
export default UpcomingEvents;
