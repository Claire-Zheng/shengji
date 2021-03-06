import { State, combineState } from "../State";
import { booleanLocalStorageState } from "../localStorageState";

export interface Settings {
  fourColor: boolean;
  showCardLabels: boolean;
  showLastTrick: boolean;
  beepOnTurn: boolean;
  reverseCardOrder: boolean;
  unsetAutoPlayWhenWinnerChanges: boolean;
  showTrickInPlayerOrder: boolean;
  separateBidCards: boolean;
  svgCards: boolean;
}

const fourColor: State<boolean> = booleanLocalStorageState("four_color");
const svgCards: State<boolean> = booleanLocalStorageState("svg_cards");
const showCardLabels: State<boolean> = booleanLocalStorageState(
  "show_card_labels"
);
const showLastTrick: State<boolean> = booleanLocalStorageState(
  "show_last_trick"
);
const beepOnTurn: State<boolean> = booleanLocalStorageState("beep_on_turn");
const reverseCardOrder: State<boolean> = booleanLocalStorageState(
  "reverse_card_order"
);
const unsetAutoPlayWhenWinnerChanges: State<boolean> = booleanLocalStorageState(
  "unset_autoplay_on_winner_change"
);
const showTrickInPlayerOrder: State<boolean> = booleanLocalStorageState(
  "show_trick_in_player_order"
);
const separateBidCards: State<boolean> = booleanLocalStorageState(
  "separate_bid_cards"
);
const settings: State<Settings> = combineState({
  fourColor,
  showCardLabels,
  showLastTrick,
  beepOnTurn,
  reverseCardOrder,
  unsetAutoPlayWhenWinnerChanges,
  showTrickInPlayerOrder,
  separateBidCards,
  svgCards,
});

export default settings;
