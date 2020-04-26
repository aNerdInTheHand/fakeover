export const initialDilemma = {
  text: 'A reputable sports company offers you £10,000,000 to advertise at your stadium',
  options: [
    {
      adjustments: {
        clubFunds: 10000000,
        externalOpinion: 0,
        fanHappiness: 10,
        leaguePosition: 1,
        personalWealth: -7500000
      },
      buttonText: 'Accept Deal',
      resultText: 'In an unusual development, you take a deal that benefits the club, costing you as you lose out on free advertising to your sweatshop brand. Fans are happy, if a little suspicious, and pundits the world over wax lyrical about your continued marvellous stewardship of the club.'
    },
    {
      adjustments: {
        clubFunds: -250000,
        externalOpinion: 2,
        fanHappiness: -10,
        leaguePosition: 0,
        personalWealth: 500000
      },
      buttonText: 'Reject Deal',
      resultText: 'Fans are outraged as you turn down investment in the club in order to keep advertising your cheap tat for free. Pundits feel obliged to defend you against this unfair slander. Gates are down at the next game, but on the plus side worldwide sales of your goods increase slightly. Any publicity is good publicity!'
    },
    {
      adjustments: {
        clubFunds: -2000000,
        externalOpinion: 0,
        fanHappiness: -15,
        leaguePosition: -1,
        personalWealth: 1000000
      },
      buttonText: 'Accept Deal, then renege',
      resultText: 'Fans protest as you accept a bumper sponsorship deal, only to backtrack in order to keep advertising your cheap tat for free. Pundits refuse to criticise you by and large. Gates are down at the next two games and an additional sponsor withdraws support, but on the plus side worldwide sales of your goods increase. Any publicity is good publicity!'
    }
  ]
}
