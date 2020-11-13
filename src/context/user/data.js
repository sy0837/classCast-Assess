const Data =
{
    name: 'Emma Green',
    dp: require('../../assets/profile.jpg').default,
    notification: 10,
    freeaccount: true,
    type: 'user',
    healthstats:
    {
        sleep: '13100',
        sleeplimit: '28800',
        bpm: '95',
        bpmlimit: '120',
        cal: '1.24',
        callimit: '3'
    },
    today: [
        {
            id: 1,
            trainingname: 'Box',
            starttime: '10:00',
            trainings: [
                {
                    id: 1,
                    name: 'Warmup',
                    duration: '2400',
                },
                {
                    id: 2,
                    name: 'stretch',
                    duration: '1200',
                },
            ],
            club: 'sport club'
        },
        {
            id: 2,
            trainingname: 'Crossfit',
            starttime: '12:00',
            trainings: [
                {
                    id: 1,
                    name: 'Warmup',
                    duration: '1200',
                },
                {
                    id: 2,
                    name: 'Pullup',
                    duration: '1200',
                },
            ],
            club: 'sport club'
        }


    ],
    trainer: [
        {
            id: 1,
            name: 'John Kavanogh',
            dp: 'https://source.unsplash.com/random/30x30',
            sport: 'Mma',
            type: 'trainer',
            online: true
        },
        {
            id: 2,
            name: 'Jonas Jacob',
            dp: 'https://source.unsplash.com/random/50x50',
            sport: 'Box',
            type: 'trainer',
            online: true
        },
    ]

}

export default Data