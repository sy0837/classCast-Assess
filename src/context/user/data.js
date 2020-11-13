import userEvent from "@testing-library/user-event"

const Data =
{
    name: 'Emma Green',
    dp: require('../../assets/profile.jpg').default,
    notification: 6,
    freeaccount: true,
    type: 'user',
    healthstats:
    {
        sleep: '23100',
        sleeplimit: '28800',
        bpm: '120',
        bpmlimit: '120',
        cal: '1.24',
        callimit: '3'
    },
    today: [
        {
            id: 1,
            trainingname: 'Box',
            starttime: '10',
            warmup: '2400',
            stretch: '1200',
            pullup: 0,
            club: 'sport club'
        },
        {
            id: 2,
            trainingname: 'Crossfit',
            starttime: '12',
            warmup: '1200',
            pullup: '1200',
            stretch: 0,
            club: 'sport club'
        }


    ],
    trainer: [
        {
            id: 1,
            name: 'John Kavanogh',
            dp: 'https://source.unsplash.com/random/30x30',
            sport: 'mma',
            type: 'trainer'
        },
        {
            id: 2,
            name: 'Jonas Jacob',
            dp: 'https://source.unsplash.com/random/50x50',
            sport: 'Box',
            type: 'trainer'
        }
    ]

}

export default Data