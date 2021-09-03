import link from './links';

export const whatToDo = [
  {
    title: 'Wildfires',
    advice: [
      '- NO FIREWORKS; leave those to the professionals',
      '- Listen to Smokey the Bear',
      '- Have firefighting tools nearby and handy',
      '- Keep all flammable objects away from fire',
      '- Obey local laws regarding open fires, including campfires',
    ],
    links: [
      {
        title: '💕 Love to Donate to Charities?: Wildfire Relief',
        url: link.wildfireCharity
      },
      {
        title: '🐻  Who is Smokey Bear you ask? Learn more here',
        url: link.smokeyBear
      },
      {
        title: '🧸 Official Smokey Bear website (so cool)',
        url: link.officialSmokeyBear
      }
    ]
  },
  {
    title: 'Air Quality (Blotch)',
    advice: [
      '- Try to avoid/reduce smoking cigarettes (gentle advice)',
      '- Invest in an Air Purifier (helps with allergy symptoms)',
      '- Invest in Dehumidifier, to avoid mold growth airborne',
      '- Use public transit, electric vehicles, or a bicycle when possible',
    ],
    links: [
      {
        title: '🔬 Harvard Medical School, Air Quality tips',
        url: link.harvardAirQualityResearch
      },
      {
        title: '💭 Improve Air Quality in Your Schools',
        url: link.indoorAirSchools
      }
    ]
  },
  {
    title: 'Air Quality (Sensors)',
    advice: [
      '- Try to avoid/reduce smoking cigarettes (gentle advice)',
      '- Invest in an Air Purifier (helps with allergy symptoms)',
      '- Invest in Dehumidifier, to avoid mold growth airborne',
      '- Use public transit, electric vehicles, or a bicycle when possible',
    ],
    links: [
      {
        title: '👾 NASA air quality data, since the pandemic',
        url: 'https://www.nasa.gov/feature/esnt/2021/qa-scientists-analyze-how-the-pandemic-affected-air-quality',
      },
      {
        title: '💭 Improve Air Quality in Your Schools',
        url: link.indoorAirSchools
      },
      {
        title: '🤓 Operating Procedures advised by US Scientists',
        url: link.airSensorSop
      }
    ]
  },
  {
    title: 'Power Plants Tips for Managers/Executives',
    advice: [
      '- Streamline Factory Operations',
      '- Eliminate pollutants before they enter the atmospere',
      

    ],
    links: [
      {
        title: '💡 US Dept of Energy: Operations & Maintenance Best Practices',
        url: 'https://www.energy.gov/sites/prod/files/2013/10/f3/omguide_complete.pdf',
      },
      {
        title: '🏭 Saftey 101 for Power Plant Managers',
        url: 'https://www.ehstoday.com/safety/article/21916915/survival-guide-safety-101-for-a-power-generation-facility',
      },
    ]
  },
  {
    title: 'Alternative Fuel',
    advice: [
      '- Consider an electric vehicle',
      '- Know your stations',
      '- Check your route when planning long trips'
    ],
    links:[
      {
        title: '⚡ US Department of Energy: Mindful Driving Habits',
        url: 'https://www.fueleconomy.gov/feg/driveHabits.jsp',
      },
      {
        title: '📍 Need a GPS app? Utilize Waze to save on gas',
        url: 'https://www.waze.com/',
      },
      {
        title: '🚘 Toyota\'s advice: How to save gas',
        url: 'https://www.toyota.com/car-tips/driving-tips-getting-best-fuel-economy/',
      }
    ]
  }
];
