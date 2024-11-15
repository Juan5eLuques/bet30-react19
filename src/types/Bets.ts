export interface BetsData {
    bets: Bet[]
    nextPage: any
    previousPage: any
  }
  
  export interface Bet {
    id: number
    bet_code: string
    live_prematch: number
    straight_parlay: number
    event_id: string
    odd_id: string
    market_id: string
    market_name: string
    handicap_meta: string
    handicap: string
    line: string
    amount: string
    won_amount: string
    start_time: any
    user_id: number
    initiator_id: number
    outcome: number
    reserve_id: number
    full_data: FullData
    full_results: FullResults
    notes: string
    created_at: string
    updated_at: string
    sub_bets: SubBet[]
  }
  
  export interface FullData {
    Bet: Bet2
    amount: string
    req_id: string
    cust_id: string
    agent_id: string
    is_casino: string
    reserve_id: string
    "@attributes": Attributes3
    customer_id: string
    purchase_id: string
  }
  
  export interface Bet2 {
    Lines: Line[]
    "@attributes": Attributes2
  }
  
  export interface Line {
    "@attributes": Attributes
  }
  
  export interface Attributes {
    Gain: string
    Odds: string
    BetID: string
    Index: string
    Score: string
    Stake: string
    IsLive: string
    LineID: string
    Status: string
    Country: string
    EventID: string
    OddsDec: string
    YourBet: string
    AwayTeam: string
    BranchID: string
    HomeTeam: string
    LeagueID: string
    MarketID: string
    BetTypeID: string
    EventDate: string
    EventName: string
    NewLineID: string
    RowTypeID: string
    BranchName: string
    CustomerID: string
    EventState: string
    LeagueName: string
    LineTypeID: string
    LiveScore1: string
    LiveScore2: string
    NewEventID: string
    BetTypeName: string
    EventTypeID: string
    NewLeagueID: string
    SRIJbetCode: string
    CreationDate: string
    LineTypeName: string
    TransYourBet: string
    UserOddStyle: string
    EventTypeName: string
    MasterEventID: string
    TeamMappingID: string
    TransAwayTeam: string
    TransHomeTeam: string
    MasterLeagueID: string
    TransEventName: string
    OddsInUserStyle: string
    TransBranchName: string
    TransLeagueName: string
    NewMasterEventID: string
    ReserveAmountType: string
    TransEventTypeName: string
    ReserveAmountTypeID: string
  }
  
  export interface Attributes2 {
    Gain: string
    Odds: string
    BetID: string
    Stake: string
    IsLive: string
    Status: string
    BonusID: string
    OddsDec: string
    SOGEIID: string
    OrgStake: string
    BetTypeID: string
    IsFreeBet: string
    RealStake: string
    RealAmount: string
    BetTypeName: string
    Combinations: string
    CreationDate: string
    NumberOfBets: string
    UserOddStyle: string
    FreebetAmount: string
    PurchaseBetID: string
    WebProviderID: string
    CommomStatusID: string
    OddsInUserStyle: string
    ContributionType: string
    ReserveAmountType: string
    ContributionAmount: string
    ComboBetNumersLines: string
    ReserveAmountTypeID: string
  }
  
  export interface Attributes3 {
    amount: string
    cust_id: string
    reserve_id: string
  }
  
  export interface FullResults {
    amount: string
    req_id: string
    cust_id: string
    agent_id: string
    Purchases: Purchases
    is_casino: string
    "@attributes": Attributes8
    customer_id: string
    purchase_id: string
  }
  
  export interface Purchases {
    Purchase: Purchase
  }
  
  export interface Purchase {
    Selections: Selections
    "@attributes": Attributes7
  }
  
  export interface Selections {
    Selection: Selection
  }
  
  export interface Selection {
    Changes: Changes
    "@attributes": Attributes6
  }
  
  export interface Changes {
    Change: Change
  }
  
  export interface Change {
    Bets: Bets
    "@attributes": Attributes5
  }
  
  export interface Bets {
    Bet: Bet3
  }
  
  export interface Bet3 {
    "@attributes": Attributes4
  }
  
  export interface Attributes4 {
    ID: string
    Odds: string
    TOTax: string
    Amount: string
    IsLive: string
    BetType: string
    BonusID: string
    BetTypeID: string
    IsFreeBet: string
    NewStatus: string
    OldStatus: string
    TaxAmount: string
    NewBalance: string
    TaxedStake: string
    PrevBalance: string
    TaxPercentage: string
    BetSettledDate: string
    IsResettlement: string
    AmountBeforeTax: string
  }
  
  export interface Attributes5 {
    ID: string
    Amount: string
    DateUTC: string
    NewStatus: string
    OldStatus: string
    NewBalance: string
    PrevBalance: string
    TriggeredResult: string
  }
  
  export interface Attributes6 {
    Index: string
    Score: string
    IsLive: string
    LineID: string
    Country: string
    EventID: string
    YourBet: string
    AwayTeam: string
    BranchID: string
    HomeTeam: string
    LeagueID: string
    MarketID: string
    EncodedID: string
    EventName: string
    NewLineID: string
    BranchName: string
    EventState: string
    LeagueName: string
    LineTypeID: string
    NewEventID: string
    DecimalOdds: string
    EventTypeID: string
    NewLeagueID: string
    SRIJbetCode: string
    SelectionID: string
    EventDateUTC: string
    LineTypeName: string
    TransYourBet: string
    UserOddStyle: string
    CurrentResult: string
    EventTypeName: string
    MasterEventID: string
    TransAwayTeam: string
    TransHomeTeam: string
    MasterLeagueID: string
    TransEventName: string
    BestOddsApplied: string
    OddsInUserStyle: string
    TransBranchName: string
    TransLeagueName: string
    NewMasterEventID: string
    TransEventTypeName: string
  }
  
  export interface Attributes7 {
    Amount: string
    seq_num: string
    ReserveID: string
    PurchaseID: string
    CurrentStatus: string
    NumberOfLines: string
    CurrentBalance: string
    CreationDateUTC: string
    NumberOfWonLines: string
    MerchantReserveID: string
    NumberOfDrawLines: string
    NumberOfLostLines: string
    NumberOfOpenLines: string
    ExtBonusContribution: string
    NumberOfCashoutLines: string
    NumberOfSettledLines: string
    NumberOfCanceledLines: string
  }
  
  export interface Attributes8 {
    Amount: string
    DomainID: string
    CustomerID: string
    CustomerName: string
    MerchantCustomerCode: string
  }
  
  export interface SubBet {
    id: number
    external_bet_id: number
    straight_parlay: number
    live_prematch: number
    event_id: string
    odd_id: string
    market_id: string
    market_name: string
    handicap_meta: string
    handicap: string
    line: string
    amount: string
    start_time: string
    user_id: number
    initiator_id: number
    outcome: number
    full_data: FullData2
    full_results: any
    notes: any
    created_at: string
    updated_at: string
  }
  
  export interface FullData2 {
    sport: string
    team1Name: string
    team2Name: string
    "@attributes": Attributes9
  }
  
  export interface Attributes9 {
    Gain: string
    Odds: string
    BetID: string
    Index: string
    Score: string
    Stake: string
    IsLive: string
    LineID: string
    Status: string
    Country: string
    EventID: string
    OddsDec: string
    YourBet: string
    AwayTeam: string
    BranchID: string
    HomeTeam: string
    LeagueID: string
    MarketID: string
    BetTypeID: string
    EventDate: string
    EventName: string
    NewLineID: string
    RowTypeID: string
    BranchName: string
    CustomerID: string
    EventState: string
    LeagueName: string
    LineTypeID: string
    LiveScore1: string
    LiveScore2: string
    NewEventID: string
    BetTypeName: string
    EventTypeID: string
    NewLeagueID: string
    SRIJbetCode: string
    CreationDate: string
    LineTypeName: string
    TransYourBet: string
    UserOddStyle: string
    EventTypeName: string
    MasterEventID: string
    TeamMappingID: string
    TransAwayTeam: string
    TransHomeTeam: string
    MasterLeagueID: string
    TransEventName: string
    OddsInUserStyle: string
    TransBranchName: string
    TransLeagueName: string
    NewMasterEventID: string
    ReserveAmountType: string
    TransEventTypeName: string
    ReserveAmountTypeID: string
  }
  