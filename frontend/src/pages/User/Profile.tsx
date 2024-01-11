import React from 'react';
import OfferedJourney, { OfferedJourneyProps } from '../../components/OfferedJourney/OfferedJourney';

interface UserProfileProps {
    username: string;
    busJourneys: Array<OfferedJourneyProps>;
}

const BasicUserProfile: React.FC<UserProfileProps> = ({ username, busJourneys }) => {
    return (
        <div>
            <h1>User Profile</h1>
            <h2>Welcome, {username}!</h2>
            <h3>Your Bus Journeys:</h3>
            <div>
                {busJourneys.map((busJourney) => {
                    return (
                        <OfferedJourney
                            driver={busJourney.driver}
                            bus={busJourney.bus}
                            date={busJourney.date}
                            startTime={busJourney.startTime}
                            endTime={''}
                            capacity={0}
                            slots={[]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

async function getOfferedJourney() {
    const response = await fetch('http://localhost:5000/api/offeredJourney/get-offeredJourney', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json();
    return data.data;
}

const UserProfile: React.FC = () => {

    const [username, setUsername] = React.useState<string>('');
    const [busJourneys, setBusJourneys] = React.useState<Array<object>>([]);

    setUsername('test');

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getOfferedJourney();
            setBusJourneys(data);
        };
        fetchData();
    }, []);


    return (
        <BasicUserProfile username={username} busJourneys={busJourneys as OfferedJourneyProps[]} />
    );
}

export default UserProfile;
