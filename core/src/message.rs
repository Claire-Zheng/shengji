use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::bidding::{BidPolicy, BidTakebackPolicy};
use crate::game_state::{
    AdvancementPolicy, BonusLevelPolicy, FirstLandlordSelectionPolicy, FriendSelectionPolicy,
    GameModeSettings, KittyBidPolicy, KittyPenalty, KittyTheftPolicy, PlayTakebackPolicy,
    PlayerGameFinishedResult, ThrowPenalty,
};
use crate::trick::{ThrowEvaluationPolicy, TrickDrawPolicy};
use crate::types::{Card, Number, PlayerID};

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(tag = "type")]
pub enum MessageVariant {
    ResettingGame,
    StartingGame,
    TrickWon {
        winner: PlayerID,
        points: usize,
    },
    RankAdvanced {
        player: PlayerID,
        new_rank: Number,
    },
    AdvancementBlocked {
        player: PlayerID,
        rank: Number,
    },
    NewLandlordForNextGame {
        landlord: PlayerID,
    },
    PointsInKitty {
        points: usize,
        multiplier: usize,
    },
    JoinedGame {
        player: PlayerID,
    },
    JoinedTeam {
        player: PlayerID,
    },
    LeftGame {
        name: String,
    },
    AdvancementPolicySet {
        policy: AdvancementPolicy,
    },
    BonusLevelPolicySet {
        policy: BonusLevelPolicy,
    },
    KittySizeSet {
        size: Option<usize>,
    },
    FriendSelectionPolicySet {
        policy: FriendSelectionPolicy,
    },
    FirstLandlordSelectionPolicySet {
        policy: FirstLandlordSelectionPolicy,
    },
    BidPolicySet {
        policy: BidPolicy,
    },
    NumDecksSet {
        num_decks: Option<usize>,
    },
    NumFriendsSet {
        num_friends: Option<usize>,
    },
    GameModeSet {
        game_mode: GameModeSettings,
    },
    KittyTheftPolicySet {
        policy: KittyTheftPolicy,
    },
    TookBackPlay,
    TookBackBid,
    PlayedCards {
        cards: Vec<Card>,
    },
    ThrowFailed {
        original_cards: Vec<Card>,
        better_player: PlayerID,
    },
    SetDefendingPointVisibility {
        visible: bool,
    },
    SetCardVisibility {
        visible: bool,
    },
    SetLandlord {
        landlord: Option<PlayerID>,
    },
    SetLandlordEmoji {
        emoji: String,
    },
    SetRank {
        rank: Number,
    },
    MadeBid {
        card: Card,
        count: usize,
    },
    KittyPenaltySet {
        kitty_penalty: KittyPenalty,
    },
    ThrowPenaltySet {
        throw_penalty: ThrowPenalty,
    },
    KittyBidPolicySet {
        policy: KittyBidPolicy,
    },
    TrickDrawPolicySet {
        policy: TrickDrawPolicy,
    },
    ThrowEvaluationPolicySet {
        policy: ThrowEvaluationPolicy,
    },
    PlayTakebackPolicySet {
        policy: PlayTakebackPolicy,
    },
    BidTakebackPolicySet {
        policy: BidTakebackPolicy,
    },
    PickedUpCards,
    PutDownCards,
    RevealedCardFromKitty,
    GameFinished {
        result: HashMap<String, PlayerGameFinishedResult>,
    },
    BonusLevelEarned,
}
