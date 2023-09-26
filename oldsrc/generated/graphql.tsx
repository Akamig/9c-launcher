import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: any;
  Long: number;
  Guid: any;
  ByteString: any;
  Decimal: any;
  BigInt: any;
  Byte: any;
  TxId: string;
  PublicKey: any;
  DateTimeOffset: any;
  VoteFlag: any;
  BencodexValue: any;
};

export type StandaloneQuery = {
  __typename?: "StandaloneQuery";
  stateQuery: StateQuery;
  state?: Maybe<Scalars["ByteString"]>;
  transferNCGHistories: Array<TransferNcgHistoryType>;
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreType>;
  nodeStatus: NodeStatusType;
  /** @deprecated Use /graphql/explorer */
  chainQuery: ExplorerQuery;
  validation: ValidationQuery;
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activationStatus: ActivationStatusQuery;
  peerChainState: PeerChainStateQuery;
  goldBalance: Scalars["String"];
  /** @deprecated The root query is not the best place for nextTxNonce so it was moved. Use transaction.nextTxNonce() */
  nextTxNonce: Scalars["Long"];
  /** @deprecated The root query is not the best place for getTx so it was moved. Use transaction.getTx() */
  getTx?: Maybe<TransactionType>;
  minerAddress?: Maybe<Scalars["Address"]>;
  monsterCollectionStatus?: Maybe<MonsterCollectionStatusType>;
  transaction: TransactionHeadlessQuery;
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activated: Scalars["Boolean"];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activationKeyNonce: Scalars["String"];
  rpcInformation: RpcInformationQuery;
  actionQuery: ActionQuery;
  actionTxQuery: ActionTxQuery;
  addressQuery: AddressQuery;
};

export type StandaloneQueryStateQueryArgs = {
  hash?: Maybe<Scalars["ByteString"]>;
};

export type StandaloneQueryStateArgs = {
  address: Scalars["Address"];
  hash?: Maybe<Scalars["ByteString"]>;
};

export type StandaloneQueryTransferNcgHistoriesArgs = {
  blockHash: Scalars["ByteString"];
  recipient?: Maybe<Scalars["Address"]>;
};

export type StandaloneQueryGoldBalanceArgs = {
  address: Scalars["Address"];
  hash?: Maybe<Scalars["ByteString"]>;
};

export type StandaloneQueryNextTxNonceArgs = {
  address: Scalars["Address"];
};

export type StandaloneQueryGetTxArgs = {
  txId: Scalars["TxId"];
};

export type StandaloneQueryMonsterCollectionStatusArgs = {
  address?: Maybe<Scalars["Address"]>;
};

export type StandaloneQueryActivatedArgs = {
  invitationCode: Scalars["String"];
};

export type StandaloneQueryActivationKeyNonceArgs = {
  invitationCode: Scalars["String"];
};

export type StandaloneQueryActionTxQueryArgs = {
  publicKey: Scalars["String"];
  nonce?: Maybe<Scalars["Long"]>;
  timestamp?: Maybe<Scalars["DateTimeOffset"]>;
  maxGasPrice?: Maybe<FungibleAssetValueInputType>;
};

export type StateQuery = {
  __typename?: "StateQuery";
  avatar?: Maybe<AvatarStateType>;
  avatars: Array<Maybe<AvatarStateType>>;
  rankingMap?: Maybe<RankingMapStateType>;
  /** @deprecated Shop is migrated to ShardedShop and not using now. Use shardedShop() instead. */
  shop?: Maybe<ShopStateType>;
  shardedShop?: Maybe<ShardedShopStateV2Type>;
  weeklyArena?: Maybe<WeeklyArenaStateType>;
  arenaInformation: Array<ArenaInformationType>;
  agent?: Maybe<AgentStateType>;
  stakeState?: Maybe<StakeStateType>;
  stakeStates: Array<Maybe<StakeStateType>>;
  monsterCollectionState?: Maybe<MonsterCollectionStateType>;
  monsterCollectionSheet?: Maybe<MonsterCollectionSheetType>;
  latestStakeRewards?: Maybe<StakeRewardsType>;
  /** @deprecated Since stake3, claim_stake_reward9 actions, each stakers have their own contracts. */
  stakeRewards?: Maybe<StakeRewardsType>;
  crystalMonsterCollectionMultiplierSheet?: Maybe<CrystalMonsterCollectionMultiplierSheetType>;
  unlockedRecipeIds?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  unlockedWorldIds?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  raiderState?: Maybe<RaiderStateType>;
  raidId: Scalars["Int"];
  worldBossState?: Maybe<WorldBossStateType>;
  worldBossKillRewardRecord?: Maybe<WorldBossKillRewardRecordType>;
  balance: FungibleAssetValueWithCurrencyType;
  raiderList?: Maybe<Array<Scalars["Address"]>>;
  orderDigestList?: Maybe<OrderDigestListStateType>;
  pledge: MeadPledgeType;
  garages?: Maybe<GaragesType>;
};

export type StateQueryAvatarArgs = {
  avatarAddress: Scalars["Address"];
};

export type StateQueryAvatarsArgs = {
  addresses: Array<Scalars["Address"]>;
};

export type StateQueryRankingMapArgs = {
  index: Scalars["Int"];
};

export type StateQueryShardedShopArgs = {
  itemSubType: ItemSubType;
  nonce: Scalars["Int"];
};

export type StateQueryWeeklyArenaArgs = {
  index: Scalars["Int"];
};

export type StateQueryArenaInformationArgs = {
  championshipId: Scalars["Int"];
  round: Scalars["Int"];
  avatarAddresses: Array<Scalars["Address"]>;
};

export type StateQueryAgentArgs = {
  address: Scalars["Address"];
};

export type StateQueryStakeStateArgs = {
  address: Scalars["Address"];
};

export type StateQueryStakeStatesArgs = {
  addresses: Array<Maybe<Scalars["Address"]>>;
};

export type StateQueryMonsterCollectionStateArgs = {
  agentAddress: Scalars["Address"];
};

export type StateQueryUnlockedRecipeIdsArgs = {
  avatarAddress: Scalars["Address"];
};

export type StateQueryUnlockedWorldIdsArgs = {
  avatarAddress: Scalars["Address"];
};

export type StateQueryRaiderStateArgs = {
  raiderAddress: Scalars["Address"];
};

export type StateQueryRaidIdArgs = {
  blockIndex: Scalars["Long"];
  prev?: Maybe<Scalars["Boolean"]>;
};

export type StateQueryWorldBossStateArgs = {
  bossAddress: Scalars["Address"];
};

export type StateQueryWorldBossKillRewardRecordArgs = {
  worldBossKillRewardRecordAddress: Scalars["Address"];
};

export type StateQueryBalanceArgs = {
  address: Scalars["Address"];
  currency: CurrencyInput;
};

export type StateQueryRaiderListArgs = {
  raiderListAddress: Scalars["Address"];
};

export type StateQueryOrderDigestListArgs = {
  avatarAddress: Scalars["Address"];
};

export type StateQueryPledgeArgs = {
  agentAddress: Scalars["Address"];
};

export type StateQueryGaragesArgs = {
  agentAddr: Scalars["Address"];
  currencyEnums?: Maybe<Array<CurrencyEnum>>;
  currencyTickers?: Maybe<Array<Scalars["String"]>>;
  fungibleItemIds?: Maybe<Array<Scalars["String"]>>;
};

export type AvatarStateType = {
  __typename?: "AvatarStateType";
  address: Scalars["Address"];
  blockIndex: Scalars["Int"];
  characterId: Scalars["Int"];
  dailyRewardReceivedIndex: Scalars["Long"];
  agentAddress: Scalars["Address"];
  index: Scalars["Int"];
  updatedAt: Scalars["Long"];
  name: Scalars["String"];
  exp: Scalars["Int"];
  level: Scalars["Int"];
  actionPoint: Scalars["Int"];
  ear: Scalars["Int"];
  hair: Scalars["Int"];
  lens: Scalars["Int"];
  tail: Scalars["Int"];
  inventory: InventoryType;
  inventoryAddress: Scalars["Address"];
  runes: Array<RuneStateType>;
  combinationSlotAddresses: Array<Scalars["Address"]>;
  combinationSlots: Array<CombinationSlotStateType>;
  itemMap: CollectionMapType;
  eventMap: CollectionMapType;
  monsterMap: CollectionMapType;
  stageMap: CollectionMapType;
  questList: QuestListType;
  mailBox: MailBoxType;
  worldInformation: WorldInformationType;
};

export type InventoryType = {
  __typename?: "InventoryType";
  consumables: Array<ConsumableType>;
  materials: Array<MaterialType>;
  equipments: Array<EquipmentType>;
  costumes: Array<CostumeType>;
  items: Array<InventoryItemType>;
};

export type InventoryTypeEquipmentsArgs = {
  equipped?: Maybe<Scalars["Boolean"]>;
  itemSubType?: Maybe<ItemSubType>;
  itemIds?: Maybe<Array<Scalars["Guid"]>>;
  ids?: Maybe<Array<Scalars["Int"]>>;
};

export type InventoryTypeItemsArgs = {
  inventoryItemId?: Maybe<Scalars["Int"]>;
  locked?: Maybe<Scalars["Boolean"]>;
};

export type ConsumableType = {
  __typename?: "ConsumableType";
  grade: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  itemSubType: ItemSubType;
  elementalType: ElementalType;
  requiredBlockIndex?: Maybe<Scalars["Long"]>;
  itemId: Scalars["Guid"];
  mainStat: StatType;
};

export enum ItemType {
  Consumable = "CONSUMABLE",
  Costume = "COSTUME",
  Equipment = "EQUIPMENT",
  Material = "MATERIAL",
}

export enum ItemSubType {
  Food = "FOOD",
  FullCostume = "FULL_COSTUME",
  HairCostume = "HAIR_COSTUME",
  EarCostume = "EAR_COSTUME",
  EyeCostume = "EYE_COSTUME",
  TailCostume = "TAIL_COSTUME",
  Weapon = "WEAPON",
  Armor = "ARMOR",
  Belt = "BELT",
  Necklace = "NECKLACE",
  Ring = "RING",
  EquipmentMaterial = "EQUIPMENT_MATERIAL",
  FoodMaterial = "FOOD_MATERIAL",
  MonsterPart = "MONSTER_PART",
  NormalMaterial = "NORMAL_MATERIAL",
  Hourglass = "HOURGLASS",
  ApStone = "AP_STONE",
  Chest = "CHEST",
  Title = "TITLE",
  Aura = "AURA",
}

export enum ElementalType {
  Normal = "NORMAL",
  Fire = "FIRE",
  Water = "WATER",
  Land = "LAND",
  Wind = "WIND",
}

export enum StatType {
  None = "NONE",
  Hp = "HP",
  Atk = "ATK",
  Def = "DEF",
  Cri = "CRI",
  Hit = "HIT",
  Spd = "SPD",
  Drv = "DRV",
  Drr = "DRR",
  Cdmg = "CDMG",
  ArmorPenetration = "ARMOR_PENETRATION",
  Thorn = "THORN",
}

export type MaterialType = {
  __typename?: "MaterialType";
  grade: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  itemSubType: ItemSubType;
  elementalType: ElementalType;
  requiredBlockIndex?: Maybe<Scalars["Long"]>;
  itemId: Scalars["ByteString"];
};

export type EquipmentType = {
  __typename?: "EquipmentType";
  grade: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  itemSubType: ItemSubType;
  elementalType: ElementalType;
  requiredBlockIndex?: Maybe<Scalars["Long"]>;
  setId: Scalars["Int"];
  stat: DecimalStatType;
  equipped: Scalars["Boolean"];
  itemId: Scalars["Guid"];
  level: Scalars["Int"];
  exp: Scalars["Int"];
  skills?: Maybe<Array<Maybe<SkillType>>>;
  buffSkills?: Maybe<Array<Maybe<SkillType>>>;
  statsMap: StatsMapType;
};

export type DecimalStatType = {
  __typename?: "DecimalStatType";
  statType: StatType;
  baseValue: Scalars["Decimal"];
  additionalValue: Scalars["Decimal"];
  totalValue: Scalars["Decimal"];
};

export type SkillType = {
  __typename?: "SkillType";
  id: Scalars["Int"];
  elementalType: ElementalType;
  power: Scalars["Int"];
  chance: Scalars["Int"];
  statPowerRatio: Scalars["Int"];
  referencedStatType: StatType;
};

export type StatsMapType = {
  __typename?: "StatsMapType";
  hP: Scalars["Int"];
  aTK: Scalars["Int"];
  dEF: Scalars["Int"];
  cRI: Scalars["Int"];
  hIT: Scalars["Int"];
  sPD: Scalars["Int"];
};

export type CostumeType = {
  __typename?: "CostumeType";
  grade: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  itemSubType: ItemSubType;
  elementalType: ElementalType;
  requiredBlockIndex?: Maybe<Scalars["Long"]>;
  itemId: Scalars["Guid"];
  equipped: Scalars["Boolean"];
};

export type InventoryItemType = {
  __typename?: "InventoryItemType";
  count: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  locked: Scalars["Boolean"];
  lockId?: Maybe<Scalars["Guid"]>;
  tradableId?: Maybe<Scalars["Guid"]>;
};

export type RuneStateType = {
  __typename?: "RuneStateType";
  runeId: Scalars["Int"];
  level: Scalars["Int"];
};

export type CombinationSlotStateType = {
  __typename?: "CombinationSlotStateType";
  address: Scalars["Address"];
  unlockBlockIndex: Scalars["Long"];
  unlockStage: Scalars["Int"];
  startBlockIndex: Scalars["Long"];
  petId?: Maybe<Scalars["Int"]>;
};

export type CollectionMapType = {
  __typename?: "CollectionMapType";
  count: Scalars["Int"];
  pairs: Array<Array<Maybe<Scalars["Int"]>>>;
};

export type QuestListType = {
  __typename?: "QuestListType";
  completedQuestIds: Array<Scalars["Int"]>;
};

export type MailBoxType = {
  __typename?: "MailBoxType";
  count: Scalars["Int"];
  mails: Array<MailType>;
};

export type MailType = {
  __typename?: "MailType";
  id: Scalars["Guid"];
  requiredBlockIndex: Scalars["Long"];
  blockIndex: Scalars["Long"];
};

export type WorldInformationType = {
  __typename?: "WorldInformationType";
  isStageCleared: Scalars["Boolean"];
  isWorldUnlocked: Scalars["Boolean"];
  world: WorldType;
};

export type WorldInformationTypeIsStageClearedArgs = {
  stageId: Scalars["Int"];
};

export type WorldInformationTypeIsWorldUnlockedArgs = {
  worldId: Scalars["Int"];
};

export type WorldInformationTypeWorldArgs = {
  worldId: Scalars["Int"];
};

export type WorldType = {
  __typename?: "WorldType";
  id: Scalars["Int"];
  name: Scalars["String"];
  isUnlocked: Scalars["Boolean"];
  isStageCleared: Scalars["Boolean"];
  unlockedBlockIndex: Scalars["Long"];
  stageClearedBlockIndex: Scalars["Long"];
  stageBegin: Scalars["Int"];
  stageEnd: Scalars["Int"];
  stageClearedId: Scalars["Int"];
};

export type RankingMapStateType = {
  __typename?: "RankingMapStateType";
  address: Scalars["Address"];
  capacity: Scalars["Int"];
  rankingInfos: Array<RankingInfoType>;
};

export type RankingInfoType = {
  __typename?: "RankingInfoType";
  exp: Scalars["Long"];
  level: Scalars["Int"];
  armorId: Scalars["Int"];
  updatedAt: Scalars["Long"];
  stageClearedBlockIndex: Scalars["Long"];
  agentAddress: Scalars["Address"];
  avatarAddress: Scalars["Address"];
  avatarName: Scalars["String"];
};

export type ShopStateType = {
  __typename?: "ShopStateType";
  address: Scalars["Address"];
  products: Array<Maybe<ShopItemType>>;
};

export type ShopStateTypeProductsArgs = {
  id?: Maybe<Scalars["Int"]>;
  itemSubType?: Maybe<ItemSubType>;
  maximumPrice?: Maybe<Scalars["Int"]>;
};

export type ShopItemType = {
  __typename?: "ShopItemType";
  sellerAgentAddress: Scalars["Address"];
  sellerAvatarAddress: Scalars["Address"];
  productId: Scalars["Guid"];
  price: Scalars["String"];
  itemUsable?: Maybe<ItemUsableType>;
  costume?: Maybe<CostumeType>;
};

export type ItemUsableType = {
  __typename?: "ItemUsableType";
  grade: Scalars["Int"];
  id: Scalars["Int"];
  itemType: ItemType;
  itemSubType: ItemSubType;
  elementalType: ElementalType;
  requiredBlockIndex?: Maybe<Scalars["Long"]>;
  itemId: Scalars["Guid"];
};

export type ShardedShopStateV2Type = {
  __typename?: "ShardedShopStateV2Type";
  address: Scalars["Address"];
  orderDigestList: Array<Maybe<OrderDigestType>>;
};

export type ShardedShopStateV2TypeOrderDigestListArgs = {
  id?: Maybe<Scalars["Int"]>;
  maximumPrice?: Maybe<Scalars["Int"]>;
};

export type OrderDigestType = {
  __typename?: "OrderDigestType";
  orderId: Scalars["Guid"];
  tradableId: Scalars["Guid"];
  startedBlockIndex: Scalars["Int"];
  expiredBlockIndex: Scalars["Int"];
  sellerAgentAddress: Scalars["Address"];
  price: Scalars["String"];
  combatPoint: Scalars["Int"];
  level: Scalars["Int"];
  itemId: Scalars["Int"];
  itemCount: Scalars["Int"];
};

export type WeeklyArenaStateType = {
  __typename?: "WeeklyArenaStateType";
  address: Scalars["Address"];
  ended: Scalars["Boolean"];
  orderedArenaInfos: Array<Maybe<ArenaInfoType>>;
};

export type ArenaInfoType = {
  __typename?: "ArenaInfoType";
  agentAddress: Scalars["Address"];
  avatarAddress: Scalars["Address"];
  avatarName: Scalars["String"];
  arenaRecord: ArenaRecordType;
  active: Scalars["Boolean"];
  dailyChallengeCount: Scalars["Int"];
  score: Scalars["Int"];
};

export type ArenaRecordType = {
  __typename?: "ArenaRecordType";
  win?: Maybe<Scalars["Int"]>;
  lose?: Maybe<Scalars["Int"]>;
  draw?: Maybe<Scalars["Int"]>;
};

export type ArenaInformationType = {
  __typename?: "ArenaInformationType";
  avatarAddress: Scalars["Address"];
  address: Scalars["Address"];
  win: Scalars["Int"];
  lose: Scalars["Int"];
  ticket: Scalars["Int"];
  ticketResetCount: Scalars["Int"];
  purchasedTicketCount: Scalars["Int"];
  score: Scalars["Int"];
};

export type AgentStateType = {
  __typename?: "AgentStateType";
  address: Scalars["Address"];
  avatarStates?: Maybe<Array<AvatarStateType>>;
  gold: Scalars["String"];
  monsterCollectionRound: Scalars["Long"];
  monsterCollectionLevel: Scalars["Long"];
  hasTradedItem: Scalars["Boolean"];
  crystal: Scalars["String"];
  pledge: MeadPledgeType;
};

export type MeadPledgeType = {
  __typename?: "MeadPledgeType";
  patronAddress?: Maybe<Scalars["Address"]>;
  approved: Scalars["Boolean"];
  mead: Scalars["Int"];
};

export type StakeStateType = {
  __typename?: "StakeStateType";
  address: Scalars["Address"];
  deposit: Scalars["String"];
  startedBlockIndex: Scalars["Long"];
  receivedBlockIndex: Scalars["Long"];
  cancellableBlockIndex: Scalars["Long"];
  claimableBlockIndex: Scalars["Long"];
  /** @deprecated Since StakeStateV2, the achievement became removed. */
  achievements?: Maybe<StakeAchievementsType>;
  stakeRewards: StakeRewardsType;
};

export type StakeAchievementsType = {
  __typename?: "StakeAchievementsType";
  achievementsByLevel: Scalars["Int"];
};

export type StakeAchievementsTypeAchievementsByLevelArgs = {
  level: Scalars["Int"];
};

export type StakeRewardsType = {
  __typename?: "StakeRewardsType";
  orderedList: Array<StakeRegularRewardsType>;
};

export type StakeRegularRewardsType = {
  __typename?: "StakeRegularRewardsType";
  level: Scalars["Int"];
  requiredGold: Scalars["Long"];
  rewards: Array<StakeRegularRewardInfoType>;
  bonusRewards: Array<StakeRegularFixedRewardInfoType>;
};

export type StakeRegularRewardInfoType = {
  __typename?: "StakeRegularRewardInfoType";
  itemId: Scalars["Int"];
  rate: Scalars["Int"];
  type: StakeRewardType;
  currencyTicker?: Maybe<Scalars["String"]>;
  currencyDecimalPlaces?: Maybe<Scalars["Int"]>;
  decimalRate: Scalars["Decimal"];
};

export enum StakeRewardType {
  Item = "ITEM",
  Rune = "RUNE",
  Currency = "CURRENCY",
}

export type StakeRegularFixedRewardInfoType = {
  __typename?: "StakeRegularFixedRewardInfoType";
  itemId: Scalars["Int"];
  count: Scalars["Int"];
};

export type MonsterCollectionStateType = {
  __typename?: "MonsterCollectionStateType";
  address: Scalars["Address"];
  level: Scalars["Long"];
  expiredBlockIndex: Scalars["Long"];
  startedBlockIndex: Scalars["Long"];
  receivedBlockIndex: Scalars["Long"];
  rewardLevel: Scalars["Long"];
  claimableBlockIndex: Scalars["Long"];
};

export type MonsterCollectionSheetType = {
  __typename?: "MonsterCollectionSheetType";
  orderedList?: Maybe<Array<Maybe<MonsterCollectionRowType>>>;
};

export type MonsterCollectionRowType = {
  __typename?: "MonsterCollectionRowType";
  level: Scalars["Int"];
  requiredGold: Scalars["Int"];
  rewards: Array<Maybe<MonsterCollectionRewardInfoType>>;
};

export type MonsterCollectionRewardInfoType = {
  __typename?: "MonsterCollectionRewardInfoType";
  itemId: Scalars["Int"];
  quantity: Scalars["Int"];
};

export type CrystalMonsterCollectionMultiplierSheetType = {
  __typename?: "CrystalMonsterCollectionMultiplierSheetType";
  orderedList: Array<CrystalMonsterCollectionMultiplierRowType>;
};

export type CrystalMonsterCollectionMultiplierRowType = {
  __typename?: "CrystalMonsterCollectionMultiplierRowType";
  level: Scalars["Int"];
  multiplier: Scalars["Int"];
};

export type RaiderStateType = {
  __typename?: "RaiderStateType";
  totalScore: Scalars["Int"];
  highScore: Scalars["Int"];
  totalChallengeCount: Scalars["Int"];
  remainChallengeCount: Scalars["Int"];
  latestRewardRank: Scalars["Int"];
  purchaseCount: Scalars["Int"];
  cp: Scalars["Int"];
  level: Scalars["Int"];
  iconId: Scalars["Int"];
  latestBossLevel: Scalars["Int"];
  claimedBlockIndex: Scalars["Long"];
  refillBlockIndex: Scalars["Long"];
  avatarAddress: Scalars["Address"];
  avatarName: Scalars["String"];
};

export type WorldBossStateType = {
  __typename?: "WorldBossStateType";
  id: Scalars["Int"];
  level: Scalars["Int"];
  currentHp: Scalars["BigInt"];
  startedBlockIndex: Scalars["Long"];
  endedBlockIndex: Scalars["Long"];
};

export type WorldBossKillRewardRecordType = {
  __typename?: "WorldBossKillRewardRecordType";
  map: Array<WorldBossKillRewardRecordMapType>;
};

export type WorldBossKillRewardRecordMapType = {
  __typename?: "WorldBossKillRewardRecordMapType";
  bossLevel: Scalars["Int"];
  claimed: Scalars["Boolean"];
};

export type FungibleAssetValueWithCurrencyType = {
  __typename?: "FungibleAssetValueWithCurrencyType";
  currency: CurrencyType;
  quantity: Scalars["String"];
};

export type FungibleAssetValueWithCurrencyTypeQuantityArgs = {
  minerUnit?: Maybe<Scalars["Boolean"]>;
};

export type CurrencyType = {
  __typename?: "CurrencyType";
  ticker: Scalars["String"];
  decimalPlaces: Scalars["Byte"];
  minters?: Maybe<Array<Maybe<Scalars["Address"]>>>;
};

export type CurrencyInput = {
  ticker: Scalars["String"];
  decimalPlaces: Scalars["Byte"];
  minters?: Maybe<Array<Scalars["Address"]>>;
  maximumSupplyMajorUnit?: Maybe<Scalars["BigInt"]>;
  maximumSupplyMinorUnit?: Maybe<Scalars["BigInt"]>;
  totalSupplyTrackable?: Maybe<Scalars["Boolean"]>;
};

export type OrderDigestListStateType = {
  __typename?: "OrderDigestListStateType";
  address?: Maybe<Scalars["Address"]>;
  orderDigestList: Array<Maybe<OrderDigestType>>;
};

export type GaragesType = {
  __typename?: "GaragesType";
  agentAddr?: Maybe<Scalars["Address"]>;
  garageBalancesAddr?: Maybe<Scalars["Address"]>;
  garageBalances?: Maybe<Array<Maybe<FungibleAssetValue>>>;
  fungibleItemGarages?: Maybe<Array<Maybe<FungibleItemGarageWithAddressType>>>;
};

export type FungibleAssetValue = {
  __typename?: "FungibleAssetValue";
  currency: Currency;
  sign: Scalars["Int"];
  majorUnit: Scalars["BigInt"];
  minorUnit: Scalars["BigInt"];
  quantity: Scalars["String"];
  string: Scalars["String"];
};

export type Currency = {
  __typename?: "Currency";
  ticker: Scalars["String"];
  decimalPlaces: Scalars["Byte"];
  minters?: Maybe<Array<Scalars["Address"]>>;
  maximumSupply?: Maybe<FungibleAssetValue>;
  totalSupplyTrackable: Scalars["Boolean"];
  hash: Scalars["ByteString"];
};

export type FungibleItemGarageWithAddressType = {
  __typename?: "FungibleItemGarageWithAddressType";
  fungibleItemId?: Maybe<Scalars["String"]>;
  addr?: Maybe<Scalars["Address"]>;
  item?: Maybe<FungibleItemType>;
  count?: Maybe<Scalars["Int"]>;
};

export type FungibleItemType = {
  __typename?: "FungibleItemType";
  itemType: ItemType;
  itemSubType: ItemSubType;
  fungibleItemId: Scalars["String"];
};

export enum CurrencyEnum {
  Crystal = "CRYSTAL",
  Ncg = "NCG",
  Garage = "GARAGE",
  Mead = "MEAD",
}

export type TransferNcgHistoryType = {
  __typename?: "TransferNCGHistoryType";
  blockHash: Scalars["ByteString"];
  txId: Scalars["ByteString"];
  sender: Scalars["Address"];
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
};

export type KeyStoreType = {
  __typename?: "KeyStoreType";
  protectedPrivateKeys: Array<ProtectedPrivateKeyType>;
  decryptedPrivateKey: Scalars["ByteString"];
  privateKey: PrivateKeyType;
};

export type KeyStoreTypeDecryptedPrivateKeyArgs = {
  address: Scalars["Address"];
  passphrase: Scalars["String"];
};

export type KeyStoreTypePrivateKeyArgs = {
  hex: Scalars["ByteString"];
};

export type ProtectedPrivateKeyType = {
  __typename?: "ProtectedPrivateKeyType";
  address: Scalars["Address"];
};

export type PrivateKeyType = {
  __typename?: "PrivateKeyType";
  hex: Scalars["ByteString"];
  publicKey: PublicKeyType;
};

export type PublicKeyType = {
  __typename?: "PublicKeyType";
  hex: Scalars["ByteString"];
  address: Scalars["Address"];
};

export type PublicKeyTypeHexArgs = {
  compress?: Maybe<Scalars["Boolean"]>;
};

export type NodeStatusType = {
  __typename?: "NodeStatusType";
  bootstrapEnded: Scalars["Boolean"];
  preloadEnded: Scalars["Boolean"];
  tip: BlockHeader;
  topmostBlocks: Array<Maybe<BlockHeader>>;
  stagedTxIds?: Maybe<Array<Maybe<Scalars["TxId"]>>>;
  stagedTxIdsCount?: Maybe<Scalars["Int"]>;
  genesis: BlockHeader;
  isMining: Scalars["Boolean"];
  appProtocolVersion?: Maybe<AppProtocolVersionType>;
  subscriberAddresses?: Maybe<Array<Maybe<Scalars["Address"]>>>;
  subscriberAddressesCount?: Maybe<Scalars["Int"]>;
  productVersion?: Maybe<Scalars["String"]>;
  informationalVersion?: Maybe<Scalars["String"]>;
};

export type NodeStatusTypeTopmostBlocksArgs = {
  limit: Scalars["Int"];
  offset?: Maybe<Scalars["Int"]>;
  miner?: Maybe<Scalars["Address"]>;
};

export type NodeStatusTypeStagedTxIdsArgs = {
  address?: Maybe<Scalars["Address"]>;
};

export type BlockHeader = {
  __typename?: "BlockHeader";
  index: Scalars["Int"];
  id: Scalars["ID"];
  hash: Scalars["String"];
  miner?: Maybe<Scalars["Address"]>;
};

export type AppProtocolVersionType = {
  __typename?: "AppProtocolVersionType";
  version: Scalars["Int"];
  signer: Scalars["Address"];
  signature: Scalars["ByteString"];
  extra?: Maybe<Scalars["ByteString"]>;
};

export type ExplorerQuery = {
  __typename?: "ExplorerQuery";
  blockQuery?: Maybe<BlockQuery>;
  transactionQuery?: Maybe<TransactionQuery>;
  stateQuery?: Maybe<LibplanetStateQuery>;
  nodeState: NodeState;
};

export type BlockQuery = {
  __typename?: "BlockQuery";
  blocks: Array<Block>;
  block?: Maybe<Block>;
};

export type BlockQueryBlocksArgs = {
  desc?: Maybe<Scalars["Boolean"]>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  excludeEmptyTxs?: Maybe<Scalars["Boolean"]>;
  miner?: Maybe<Scalars["Address"]>;
};

export type BlockQueryBlockArgs = {
  hash?: Maybe<Scalars["ID"]>;
  index?: Maybe<Scalars["ID"]>;
};

export type Block = {
  __typename?: "Block";
  hash: Scalars["ID"];
  index: Scalars["Long"];
  miner: Scalars["Address"];
  publicKey?: Maybe<Scalars["PublicKey"]>;
  previousBlock?: Maybe<Block>;
  timestamp: Scalars["DateTimeOffset"];
  stateRootHash: Scalars["ByteString"];
  signature?: Maybe<Scalars["ByteString"]>;
  transactions: Array<Transaction>;
  lastCommit?: Maybe<BlockCommit>;
  /** @deprecated Block does not have Difficulty field in PBFT. */
  difficulty: Scalars["Long"];
  /** @deprecated Block does not have TotalDifficulty field in PBFT. */
  totalDifficulty: Scalars["BigInt"];
  /** @deprecated Block does not have Nonce field in PBFT. */
  nonce: Scalars["ByteString"];
  preEvaluationHash: Scalars["ByteString"];
};

export type Transaction = {
  __typename?: "Transaction";
  id: Scalars["ID"];
  nonce: Scalars["Long"];
  signer: Scalars["Address"];
  publicKey: Scalars["ByteString"];
  updatedAddresses: Array<Scalars["Address"]>;
  signature: Scalars["ByteString"];
  timestamp: Scalars["DateTimeOffset"];
  actions: Array<Action>;
  serializedPayload: Scalars["String"];
  blockRef: Block;
};

export type Action = {
  __typename?: "Action";
  raw: Scalars["String"];
  inspection: Scalars["String"];
  json: Scalars["String"];
};

export type ActionRawArgs = {
  encode?: Maybe<Scalars["String"]>;
};

export type BlockCommit = {
  __typename?: "BlockCommit";
  height: Scalars["Long"];
  round: Scalars["Int"];
  blockHash: Scalars["ID"];
  votes: Array<Vote>;
};

export type Vote = {
  __typename?: "Vote";
  height: Scalars["Long"];
  round: Scalars["Int"];
  blockHash: Scalars["String"];
  timestamp: Scalars["DateTimeOffset"];
  validatorPublicKey: Scalars["PublicKey"];
  flag: Scalars["VoteFlag"];
  signature: Scalars["ByteString"];
};

export type TransactionQuery = {
  __typename?: "TransactionQuery";
  transactions: Array<Transaction>;
  stagedTransactions: Array<Transaction>;
  transaction?: Maybe<Transaction>;
  unsignedTransaction: Scalars["ByteString"];
  nextNonce: Scalars["Long"];
  bindSignature: Scalars["String"];
  transactionResult: TxResultType;
};

export type TransactionQueryTransactionsArgs = {
  signer?: Maybe<Scalars["Address"]>;
  involvedAddress?: Maybe<Scalars["Address"]>;
  desc?: Maybe<Scalars["Boolean"]>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type TransactionQueryStagedTransactionsArgs = {
  signer?: Maybe<Scalars["Address"]>;
  involvedAddress?: Maybe<Scalars["Address"]>;
  desc?: Maybe<Scalars["Boolean"]>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type TransactionQueryTransactionArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type TransactionQueryUnsignedTransactionArgs = {
  publicKey: Scalars["String"];
  plainValue: Scalars["String"];
  nonce?: Maybe<Scalars["Long"]>;
};

export type TransactionQueryNextNonceArgs = {
  address: Scalars["Address"];
};

export type TransactionQueryBindSignatureArgs = {
  unsignedTransaction: Scalars["String"];
  signature: Scalars["String"];
};

export type TransactionQueryTransactionResultArgs = {
  txId: Scalars["ID"];
};

export type TxResultType = {
  __typename?: "TxResultType";
  txStatus: TxStatus;
  blockIndex?: Maybe<Scalars["Long"]>;
  blockHash?: Maybe<Scalars["String"]>;
  exceptionName?: Maybe<Scalars["String"]>;
  exceptionMetadata?: Maybe<Scalars["BencodexValue"]>;
  updatedStates?: Maybe<Array<UpdatedStateType>>;
  updatedFungibleAssets?: Maybe<Array<FungibleAssetBalancesType>>;
  fungibleAssetsDelta?: Maybe<Array<FungibleAssetBalancesType>>;
};

export enum TxStatus {
  Invalid = "INVALID",
  Staging = "STAGING",
  Success = "SUCCESS",
  Failure = "FAILURE",
}

export type UpdatedStateType = {
  __typename?: "UpdatedStateType";
  address: Scalars["Address"];
  state?: Maybe<Scalars["BencodexValue"]>;
};

export type FungibleAssetBalancesType = {
  __typename?: "FungibleAssetBalancesType";
  address: Scalars["Address"];
  fungibleAssetValues: Array<FungibleAssetValue>;
};

export type LibplanetStateQuery = {
  __typename?: "LibplanetStateQuery";
  states: Array<Maybe<Scalars["BencodexValue"]>>;
  balance: FungibleAssetValue;
  totalSupply?: Maybe<FungibleAssetValue>;
  validators?: Maybe<Array<Validator>>;
};

export type LibplanetStateQueryStatesArgs = {
  addresses: Array<Scalars["Address"]>;
  offsetBlockHash: Scalars["ID"];
};

export type LibplanetStateQueryBalanceArgs = {
  owner: Scalars["Address"];
  currency: CurrencyInput;
  offsetBlockHash: Scalars["ID"];
};

export type LibplanetStateQueryTotalSupplyArgs = {
  currency: CurrencyInput;
  offsetBlockHash: Scalars["ID"];
};

export type LibplanetStateQueryValidatorsArgs = {
  offsetBlockHash: Scalars["ID"];
};

export type Validator = {
  __typename?: "Validator";
  publicKey: Scalars["PublicKey"];
  power: Scalars["BigInt"];
};

export type NodeState = {
  __typename?: "NodeState";
  preloaded: Scalars["Boolean"];
  peers?: Maybe<Array<BoundPeer>>;
  validators?: Maybe<Array<BoundPeer>>;
};

export type BoundPeer = {
  __typename?: "BoundPeer";
  publicKey: Scalars["PublicKey"];
  endPoint: Scalars["String"];
  publicIpAddress?: Maybe<Scalars["String"]>;
};

export type ValidationQuery = {
  __typename?: "ValidationQuery";
  metadata: Scalars["Boolean"];
  privateKey: Scalars["Boolean"];
  publicKey: Scalars["Boolean"];
};

export type ValidationQueryMetadataArgs = {
  raw: Scalars["String"];
};

export type ValidationQueryPrivateKeyArgs = {
  hex: Scalars["ByteString"];
};

export type ValidationQueryPublicKeyArgs = {
  hex: Scalars["ByteString"];
};

export type ActivationStatusQuery = {
  __typename?: "ActivationStatusQuery";
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activated: Scalars["Boolean"];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  addressActivated: Scalars["Boolean"];
};

export type ActivationStatusQueryAddressActivatedArgs = {
  address: Scalars["Address"];
};

export type PeerChainStateQuery = {
  __typename?: "PeerChainStateQuery";
  state: Array<Maybe<Scalars["String"]>>;
};

export type TransactionType = {
  __typename?: "TransactionType";
  id: Scalars["TxId"];
  nonce: Scalars["Long"];
  publicKey: PublicKeyType;
  signature: Scalars["ByteString"];
  signer: Scalars["Address"];
  timestamp: Scalars["String"];
  updatedAddresses: Array<Maybe<Scalars["Address"]>>;
  actions: Array<Maybe<Action>>;
};

export type MonsterCollectionStatusType = {
  __typename?: "MonsterCollectionStatusType";
  fungibleAssetValue: FungibleAssetValueType;
  rewardInfos?: Maybe<Array<Maybe<MonsterCollectionRewardInfoType>>>;
  tipIndex: Scalars["Long"];
  lockup: Scalars["Boolean"];
};

export type FungibleAssetValueType = {
  __typename?: "FungibleAssetValueType";
  currency: Scalars["String"];
  quantity: Scalars["String"];
};

export type TransactionHeadlessQuery = {
  __typename?: "TransactionHeadlessQuery";
  nextTxNonce: Scalars["Long"];
  getTx?: Maybe<TransactionType>;
  ncTransactions?: Maybe<Array<Maybe<TransactionType>>>;
  /** @deprecated API update with action query. use unsignedTransaction */
  createUnsignedTx: Scalars["String"];
  /** @deprecated Use signTransaction */
  attachSignature: Scalars["String"];
  transactionResult: TxResultType;
  unsignedTransaction: Scalars["ByteString"];
  signTransaction: Scalars["ByteString"];
};

export type TransactionHeadlessQueryNextTxNonceArgs = {
  address: Scalars["Address"];
};

export type TransactionHeadlessQueryGetTxArgs = {
  txId: Scalars["TxId"];
};

export type TransactionHeadlessQueryNcTransactionsArgs = {
  startingBlockIndex: Scalars["Long"];
  limit: Scalars["Long"];
  actionType: Scalars["String"];
};

export type TransactionHeadlessQueryCreateUnsignedTxArgs = {
  publicKey: Scalars["String"];
  plainValue: Scalars["String"];
  nonce?: Maybe<Scalars["Long"]>;
};

export type TransactionHeadlessQueryAttachSignatureArgs = {
  unsignedTransaction: Scalars["String"];
  signature: Scalars["String"];
};

export type TransactionHeadlessQueryTransactionResultArgs = {
  txId: Scalars["TxId"];
};

export type TransactionHeadlessQueryUnsignedTransactionArgs = {
  publicKey: Scalars["String"];
  plainValue: Scalars["String"];
  nonce?: Maybe<Scalars["Long"]>;
  maxGasPrice?: Maybe<FungibleAssetValueInputType>;
};

export type TransactionHeadlessQuerySignTransactionArgs = {
  unsignedTransaction: Scalars["String"];
  signature: Scalars["String"];
};

export type FungibleAssetValueInputType = {
  quantity: Scalars["BigInt"];
  ticker: Scalars["String"];
  decimalPlaces: Scalars["Byte"];
  minters?: Maybe<Array<Scalars["Address"]>>;
};

export type RpcInformationQuery = {
  __typename?: "RpcInformationQuery";
  totalCount: Scalars["Int"];
  clients: Array<Maybe<Scalars["Address"]>>;
  totalCountByDevice: Scalars["Int"];
  clientsByDevice: Array<Scalars["Address"]>;
};

export type RpcInformationQueryTotalCountByDeviceArgs = {
  device: Scalars["String"];
};

export type RpcInformationQueryClientsByDeviceArgs = {
  device: Scalars["String"];
};

export type ActionQuery = {
  __typename?: "ActionQuery";
  stake?: Maybe<Scalars["ByteString"]>;
  claimStakeReward?: Maybe<Scalars["ByteString"]>;
  migrateMonsterCollection: Scalars["ByteString"];
  grinding?: Maybe<Scalars["ByteString"]>;
  unlockEquipmentRecipe?: Maybe<Scalars["ByteString"]>;
  unlockWorld?: Maybe<Scalars["ByteString"]>;
  transferAsset?: Maybe<Scalars["ByteString"]>;
  patchTableSheet: Scalars["ByteString"];
  raid: Scalars["ByteString"];
  claimRaidReward: Scalars["ByteString"];
  claimWorldBossKillReward: Scalars["ByteString"];
  prepareRewardAssets: Scalars["ByteString"];
  transferAssets: Scalars["ByteString"];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars["ByteString"];
  createAvatar: Scalars["ByteString"];
  runeEnhancement: Scalars["ByteString"];
  hackAndSlash: Scalars["ByteString"];
  hackAndSlashSweep: Scalars["ByteString"];
  dailyReward: Scalars["ByteString"];
  combinationEquipment: Scalars["ByteString"];
  itemEnhancement: Scalars["ByteString"];
  rapidCombination: Scalars["ByteString"];
  combinationConsumable: Scalars["ByteString"];
  requestPledge: Scalars["ByteString"];
  approvePledge: Scalars["ByteString"];
  endPledge: Scalars["ByteString"];
  createPledge: Scalars["ByteString"];
  loadIntoMyGarages: Scalars["ByteString"];
  deliverToOthersGarages: Scalars["ByteString"];
  unloadFromMyGarages: Scalars["ByteString"];
  craftQuery: CraftQuery;
};

export type ActionQueryStakeArgs = {
  amount?: Maybe<Scalars["BigInt"]>;
};

export type ActionQueryClaimStakeRewardArgs = {
  avatarAddress?: Maybe<Scalars["Address"]>;
};

export type ActionQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: Maybe<Scalars["Address"]>;
};

export type ActionQueryGrindingArgs = {
  avatarAddress: Scalars["Address"];
  equipmentIds: Array<Maybe<Scalars["Guid"]>>;
  chargeAp?: Maybe<Scalars["Boolean"]>;
};

export type ActionQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars["Address"];
  recipeIds: Array<Maybe<Scalars["Int"]>>;
};

export type ActionQueryUnlockWorldArgs = {
  avatarAddress: Scalars["Address"];
  worldIds: Array<Maybe<Scalars["Int"]>>;
};

export type ActionQueryTransferAssetArgs = {
  sender: Scalars["Address"];
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  currency: CurrencyEnum;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionQueryPatchTableSheetArgs = {
  tableName: Scalars["String"];
  tableCsv: Scalars["String"];
};

export type ActionQueryRaidArgs = {
  avatarAddress: Scalars["Address"];
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  foodIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  payNcg?: Maybe<Scalars["Boolean"]>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
};

export type ActionQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionQueryPrepareRewardAssetsArgs = {
  rewardPoolAddress: Scalars["Address"];
  assets: Array<FungibleAssetValueInputType>;
};

export type ActionQueryTransferAssetsArgs = {
  sender: Scalars["Address"];
  recipients: Array<RecipientsInputType>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionQueryActivateAccountArgs = {
  activationCode: Scalars["String"];
};

export type ActionQueryCreateAvatarArgs = {
  index: Scalars["Int"];
  name: Scalars["String"];
  hair?: Maybe<Scalars["Int"]>;
  lens?: Maybe<Scalars["Int"]>;
  ear?: Maybe<Scalars["Int"]>;
  tail?: Maybe<Scalars["Int"]>;
};

export type ActionQueryRuneEnhancementArgs = {
  avatarAddress: Scalars["Address"];
  runeId: Scalars["Int"];
  tryCount?: Maybe<Scalars["Int"]>;
};

export type ActionQueryHackAndSlashArgs = {
  avatarAddress: Scalars["Address"];
  worldId: Scalars["Int"];
  stageId: Scalars["Int"];
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  consumableIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: Maybe<Scalars["Int"]>;
};

export type ActionQueryHackAndSlashSweepArgs = {
  avatarAddress: Scalars["Address"];
  worldId: Scalars["Int"];
  stageId: Scalars["Int"];
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
  actionPoint: Scalars["Int"];
  apStoneCount?: Maybe<Scalars["Int"]>;
};

export type ActionQueryDailyRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  recipeId: Scalars["Int"];
  subRecipeId?: Maybe<Scalars["Int"]>;
  payByCrystal?: Maybe<Scalars["Boolean"]>;
  useHammerPoint?: Maybe<Scalars["Boolean"]>;
};

export type ActionQueryItemEnhancementArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  itemId: Scalars["Guid"];
  materialIds: Array<Scalars["Guid"]>;
};

export type ActionQueryRapidCombinationArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
};

export type ActionQueryCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  recipeId: Scalars["Int"];
};

export type ActionQueryRequestPledgeArgs = {
  agentAddress: Scalars["Address"];
  mead?: Maybe<Scalars["Int"]>;
};

export type ActionQueryApprovePledgeArgs = {
  patronAddress: Scalars["Address"];
};

export type ActionQueryEndPledgeArgs = {
  agentAddress: Scalars["Address"];
};

export type ActionQueryCreatePledgeArgs = {
  patronAddress: Scalars["Address"];
  agentAddresses: Array<Scalars["Address"]>;
  mead?: Maybe<Scalars["Int"]>;
};

export type ActionQueryLoadIntoMyGaragesArgs = {
  fungibleAssetValues?: Maybe<Array<BalanceInput>>;
  inventoryAddr?: Maybe<Scalars["Address"]>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionQueryDeliverToOthersGaragesArgs = {
  recipientAgentAddr: Scalars["Address"];
  fungibleAssetValues?: Maybe<Array<SimplifyFungibleAssetValueInput>>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionQueryUnloadFromMyGaragesArgs = {
  recipientAvatarAddr: Scalars["Address"];
  fungibleAssetValues?: Maybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type RuneSlotInfoInputType = {
  slotIndex: Scalars["Int"];
  runeId: Scalars["Int"];
};

export type RecipientsInputType = {
  recipient: Scalars["Address"];
  amount: FungibleAssetValueInputType;
};

export type BalanceInput = {
  balanceAddr?: Maybe<Scalars["Address"]>;
  value?: Maybe<SimplifyFungibleAssetValueInput>;
};

export type SimplifyFungibleAssetValueInput = {
  currencyEnum?: Maybe<CurrencyEnum>;
  currencyTicker?: Maybe<Scalars["String"]>;
  value: Scalars["String"];
};

export type FungibleIdAndCountInput = {
  fungibleId: Scalars["String"];
  count: Scalars["Int"];
};

export type CraftQuery = {
  __typename?: "CraftQuery";
  eventConsumableItemCrafts: Scalars["ByteString"];
  eventMaterialItemCrafts: Scalars["ByteString"];
};

export type CraftQueryEventConsumableItemCraftsArgs = {
  avatarAddress: Scalars["Address"];
  eventScheduleId: Scalars["Int"];
  eventConsumableItemRecipeId: Scalars["Int"];
  slotIndex: Scalars["Int"];
};

export type CraftQueryEventMaterialItemCraftsArgs = {
  avatarAddress: Scalars["Address"];
  eventScheduleId: Scalars["Int"];
  eventMaterialItemRecipeId: Scalars["Int"];
  materialsToUse: Array<MaterialsToUseInputType>;
};

export type MaterialsToUseInputType = {
  materialId: Scalars["Int"];
  quantity: Scalars["Int"];
};

export type ActionTxQuery = {
  __typename?: "ActionTxQuery";
  stake?: Maybe<Scalars["ByteString"]>;
  claimStakeReward?: Maybe<Scalars["ByteString"]>;
  migrateMonsterCollection: Scalars["ByteString"];
  grinding?: Maybe<Scalars["ByteString"]>;
  unlockEquipmentRecipe?: Maybe<Scalars["ByteString"]>;
  unlockWorld?: Maybe<Scalars["ByteString"]>;
  transferAsset?: Maybe<Scalars["ByteString"]>;
  patchTableSheet: Scalars["ByteString"];
  raid: Scalars["ByteString"];
  claimRaidReward: Scalars["ByteString"];
  claimWorldBossKillReward: Scalars["ByteString"];
  prepareRewardAssets: Scalars["ByteString"];
  transferAssets: Scalars["ByteString"];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars["ByteString"];
  createAvatar: Scalars["ByteString"];
  runeEnhancement: Scalars["ByteString"];
  hackAndSlash: Scalars["ByteString"];
  hackAndSlashSweep: Scalars["ByteString"];
  dailyReward: Scalars["ByteString"];
  combinationEquipment: Scalars["ByteString"];
  itemEnhancement: Scalars["ByteString"];
  rapidCombination: Scalars["ByteString"];
  combinationConsumable: Scalars["ByteString"];
  requestPledge: Scalars["ByteString"];
  approvePledge: Scalars["ByteString"];
  endPledge: Scalars["ByteString"];
  createPledge: Scalars["ByteString"];
  loadIntoMyGarages: Scalars["ByteString"];
  deliverToOthersGarages: Scalars["ByteString"];
  unloadFromMyGarages: Scalars["ByteString"];
  craftQuery: CraftQuery;
};

export type ActionTxQueryStakeArgs = {
  amount?: Maybe<Scalars["BigInt"]>;
};

export type ActionTxQueryClaimStakeRewardArgs = {
  avatarAddress?: Maybe<Scalars["Address"]>;
};

export type ActionTxQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: Maybe<Scalars["Address"]>;
};

export type ActionTxQueryGrindingArgs = {
  avatarAddress: Scalars["Address"];
  equipmentIds: Array<Maybe<Scalars["Guid"]>>;
  chargeAp?: Maybe<Scalars["Boolean"]>;
};

export type ActionTxQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars["Address"];
  recipeIds: Array<Maybe<Scalars["Int"]>>;
};

export type ActionTxQueryUnlockWorldArgs = {
  avatarAddress: Scalars["Address"];
  worldIds: Array<Maybe<Scalars["Int"]>>;
};

export type ActionTxQueryTransferAssetArgs = {
  sender: Scalars["Address"];
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  currency: CurrencyEnum;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionTxQueryPatchTableSheetArgs = {
  tableName: Scalars["String"];
  tableCsv: Scalars["String"];
};

export type ActionTxQueryRaidArgs = {
  avatarAddress: Scalars["Address"];
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  foodIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  payNcg?: Maybe<Scalars["Boolean"]>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
};

export type ActionTxQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionTxQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionTxQueryPrepareRewardAssetsArgs = {
  rewardPoolAddress: Scalars["Address"];
  assets: Array<FungibleAssetValueInputType>;
};

export type ActionTxQueryTransferAssetsArgs = {
  sender: Scalars["Address"];
  recipients: Array<RecipientsInputType>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionTxQueryActivateAccountArgs = {
  activationCode: Scalars["String"];
};

export type ActionTxQueryCreateAvatarArgs = {
  index: Scalars["Int"];
  name: Scalars["String"];
  hair?: Maybe<Scalars["Int"]>;
  lens?: Maybe<Scalars["Int"]>;
  ear?: Maybe<Scalars["Int"]>;
  tail?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryRuneEnhancementArgs = {
  avatarAddress: Scalars["Address"];
  runeId: Scalars["Int"];
  tryCount?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryHackAndSlashArgs = {
  avatarAddress: Scalars["Address"];
  worldId: Scalars["Int"];
  stageId: Scalars["Int"];
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  consumableIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryHackAndSlashSweepArgs = {
  avatarAddress: Scalars["Address"];
  worldId: Scalars["Int"];
  stageId: Scalars["Int"];
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
  actionPoint: Scalars["Int"];
  apStoneCount?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryDailyRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionTxQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  recipeId: Scalars["Int"];
  subRecipeId?: Maybe<Scalars["Int"]>;
  payByCrystal?: Maybe<Scalars["Boolean"]>;
  useHammerPoint?: Maybe<Scalars["Boolean"]>;
};

export type ActionTxQueryItemEnhancementArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  itemId: Scalars["Guid"];
  materialIds: Array<Scalars["Guid"]>;
};

export type ActionTxQueryRapidCombinationArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
};

export type ActionTxQueryCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"];
  slotIndex: Scalars["Int"];
  recipeId: Scalars["Int"];
};

export type ActionTxQueryRequestPledgeArgs = {
  agentAddress: Scalars["Address"];
  mead?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryApprovePledgeArgs = {
  patronAddress: Scalars["Address"];
};

export type ActionTxQueryEndPledgeArgs = {
  agentAddress: Scalars["Address"];
};

export type ActionTxQueryCreatePledgeArgs = {
  patronAddress: Scalars["Address"];
  agentAddresses: Array<Scalars["Address"]>;
  mead?: Maybe<Scalars["Int"]>;
};

export type ActionTxQueryLoadIntoMyGaragesArgs = {
  fungibleAssetValues?: Maybe<Array<BalanceInput>>;
  inventoryAddr?: Maybe<Scalars["Address"]>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionTxQueryDeliverToOthersGaragesArgs = {
  recipientAgentAddr: Scalars["Address"];
  fungibleAssetValues?: Maybe<Array<SimplifyFungibleAssetValueInput>>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type ActionTxQueryUnloadFromMyGaragesArgs = {
  recipientAvatarAddr: Scalars["Address"];
  fungibleAssetValues?: Maybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: Maybe<Array<FungibleIdAndCountInput>>;
  memo?: Maybe<Scalars["String"]>;
};

export type AddressQuery = {
  __typename?: "AddressQuery";
  raiderAddress: Scalars["Address"];
  worldBossAddress: Scalars["Address"];
  worldBossKillRewardRecordAddress: Scalars["Address"];
  raiderListAddress: Scalars["Address"];
  currencyMintersAddress?: Maybe<Array<Scalars["Address"]>>;
  pledgeAddress: Scalars["Address"];
};

export type AddressQueryRaiderAddressArgs = {
  avatarAddress: Scalars["Address"];
  raidId: Scalars["Int"];
};

export type AddressQueryWorldBossAddressArgs = {
  raidId: Scalars["Int"];
};

export type AddressQueryWorldBossKillRewardRecordAddressArgs = {
  avatarAddress: Scalars["Address"];
  raidId: Scalars["Int"];
};

export type AddressQueryRaiderListAddressArgs = {
  raidId: Scalars["Int"];
};

export type AddressQueryCurrencyMintersAddressArgs = {
  currency: CurrencyEnum;
};

export type AddressQueryPledgeAddressArgs = {
  agentAddress: Scalars["Address"];
};

export type StandaloneMutation = {
  __typename?: "StandaloneMutation";
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreMutation>;
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activationStatus?: Maybe<ActivationStatusMutation>;
  action?: Maybe<ActionMutation>;
  stageTx: Scalars["Boolean"];
  /** @deprecated API update with action query. use stageTransaction mutation */
  stageTxV2: Scalars["TxId"];
  transfer?: Maybe<Scalars["TxId"]>;
  /** @deprecated Incorrect remittance may occur when using transferGold() to the same address consecutively. Use transfer() instead. */
  transferGold?: Maybe<Scalars["TxId"]>;
  stageTransaction: Scalars["TxId"];
};

export type StandaloneMutationStageTxArgs = {
  payload: Scalars["String"];
};

export type StandaloneMutationStageTxV2Args = {
  payload: Scalars["String"];
};

export type StandaloneMutationTransferArgs = {
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  txNonce: Scalars["Long"];
  currencyAddress?: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
};

export type StandaloneMutationTransferGoldArgs = {
  recipient: Scalars["Address"];
  amount: Scalars["String"];
};

export type StandaloneMutationStageTransactionArgs = {
  payload: Scalars["String"];
};

export type KeyStoreMutation = {
  __typename?: "KeyStoreMutation";
  createPrivateKey: PrivateKeyType;
  revokePrivateKey: ProtectedPrivateKeyType;
};

export type KeyStoreMutationCreatePrivateKeyArgs = {
  passphrase: Scalars["String"];
  privateKey?: Maybe<Scalars["ByteString"]>;
};

export type KeyStoreMutationRevokePrivateKeyArgs = {
  address: Scalars["Address"];
};

export type ActivationStatusMutation = {
  __typename?: "ActivationStatusMutation";
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars["Boolean"];
};

export type ActivationStatusMutationActivateAccountArgs = {
  encodedActivationKey: Scalars["String"];
};

export type ActionMutation = {
  __typename?: "ActionMutation";
  createAvatar: Scalars["TxId"];
  hackAndSlash: Scalars["TxId"];
  combinationEquipment: Scalars["TxId"];
  itemEnhancement: Scalars["TxId"];
  dailyReward: Scalars["TxId"];
  chargeActionPoint: Scalars["TxId"];
  combinationConsumable: Scalars["TxId"];
  monsterCollect: Scalars["TxId"];
  claimMonsterCollectionReward: Scalars["TxId"];
};

export type ActionMutationCreateAvatarArgs = {
  avatarName: Scalars["String"];
  avatarIndex: Scalars["Int"];
  hairIndex: Scalars["Int"];
  lensIndex: Scalars["Int"];
  earIndex: Scalars["Int"];
  tailIndex: Scalars["Int"];
};

export type ActionMutationHackAndSlashArgs = {
  avatarAddress: Scalars["Address"];
  worldId: Scalars["Int"];
  stageId: Scalars["Int"];
  costumeIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  equipmentIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  consumableIds?: Maybe<Array<Maybe<Scalars["Guid"]>>>;
  runeSlotInfos?: Maybe<Array<RuneSlotInfoInputType>>;
};

export type ActionMutationCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"];
  recipeId: Scalars["Int"];
  slotIndex: Scalars["Int"];
  subRecipeId?: Maybe<Scalars["Int"]>;
};

export type ActionMutationItemEnhancementArgs = {
  avatarAddress: Scalars["Address"];
  itemId: Scalars["Guid"];
  materialIds: Array<Scalars["Guid"]>;
  slotIndex: Scalars["Int"];
};

export type ActionMutationDailyRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionMutationChargeActionPointArgs = {
  avatarAddress: Scalars["Address"];
};

export type ActionMutationCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"];
  recipeId: Scalars["Int"];
  slotIndex: Scalars["Int"];
};

export type ActionMutationMonsterCollectArgs = {
  level: Scalars["Int"];
};

export type ActionMutationClaimMonsterCollectionRewardArgs = {
  avatarAddress: Scalars["Address"];
};

export type StandaloneSubscription = {
  __typename?: "StandaloneSubscription";
  tipChanged?: Maybe<TipChanged>;
  tx?: Maybe<TxType>;
  preloadProgress?: Maybe<PreloadStateType>;
  nodeStatus?: Maybe<NodeStatusType>;
  differentAppProtocolVersionEncounter: DifferentAppProtocolVersionEncounterType;
  notification: NotificationType;
  nodeException: NodeExceptionType;
  balanceByAgent: Scalars["String"];
};

export type StandaloneSubscriptionTxArgs = {
  actionType: Scalars["String"];
};

export type StandaloneSubscriptionBalanceByAgentArgs = {
  address: Scalars["Address"];
};

export type TipChanged = {
  __typename?: "TipChanged";
  index: Scalars["Long"];
  hash?: Maybe<Scalars["ByteString"]>;
};

export type TxType = {
  __typename?: "TxType";
  transaction: TransactionType;
  txResult?: Maybe<TxResultType>;
};

export type PreloadStateType = {
  __typename?: "PreloadStateType";
  currentPhase: Scalars["Long"];
  totalPhase: Scalars["Long"];
  extra: PreloadStateExtraType;
};

export type PreloadStateExtraType = {
  __typename?: "PreloadStateExtraType";
  type: Scalars["String"];
  currentCount: Scalars["Long"];
  totalCount: Scalars["Long"];
};

export type DifferentAppProtocolVersionEncounterType = {
  __typename?: "DifferentAppProtocolVersionEncounterType";
  peer: Scalars["String"];
  peerVersion: AppProtocolVersionType;
  localVersion: AppProtocolVersionType;
};

export type NotificationType = {
  __typename?: "NotificationType";
  type: NotificationEnum;
  message?: Maybe<Scalars["String"]>;
};

export enum NotificationEnum {
  Refill = "REFILL",
  Has = "HAS",
  CombinationEquipment = "COMBINATION_EQUIPMENT",
  CombinationConsumable = "COMBINATION_CONSUMABLE",
  Buyer = "BUYER",
  Seller = "SELLER",
}

export type NodeExceptionType = {
  __typename?: "NodeExceptionType";
  code: Scalars["Int"];
  message: Scalars["String"];
};

export type NodeStatusQueryVariables = Exact<{ [key: string]: never }>;

export type NodeStatusQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & Pick<
    NodeStatusType,
    "bootstrapEnded" | "preloadEnded"
  >;
};

export type TopmostBlocksQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  miner?: Maybe<Scalars["Address"]>;
}>;

export type TopmostBlocksQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & {
    topmostBlocks: Array<
      Maybe<
        { __typename?: "BlockHeader" } & Pick<
          BlockHeader,
          "id" | "hash" | "index" | "miner"
        >
      >
    >;
  };
};

export type PreloadProgressSubscriptionSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type PreloadProgressSubscriptionSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  preloadProgress?: Maybe<
    { __typename?: "PreloadStateType" } & Pick<
      PreloadStateType,
      "currentPhase" | "totalPhase"
    > & {
        extra: { __typename?: "PreloadStateExtraType" } & Pick<
          PreloadStateExtraType,
          "type" | "currentCount" | "totalCount"
        >;
      }
  >;
};

export type NodeStatusSubscriptionSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type NodeStatusSubscriptionSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  nodeStatus?: Maybe<
    { __typename?: "NodeStatusType" } & Pick<
      NodeStatusType,
      "bootstrapEnded" | "preloadEnded"
    >
  >;
};

export type NodeExceptionSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type NodeExceptionSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  nodeException: { __typename?: "NodeExceptionType" } & Pick<
    NodeExceptionType,
    "code" | "message"
  >;
};

export type GetNcgBalanceQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type GetNcgBalanceQuery = { __typename?: "StandaloneQuery" } & Pick<
  StandaloneQuery,
  "goldBalance"
>;

export type TransactionResultQueryVariables = Exact<{
  txId: Scalars["TxId"];
}>;

export type TransactionResultQuery = { __typename?: "StandaloneQuery" } & {
  transaction: { __typename?: "TransactionHeadlessQuery" } & {
    transactionResult: { __typename?: "TxResultType" } & Pick<
      TxResultType,
      "blockHash" | "blockIndex" | "txStatus"
    >;
  };
};

export type NodeAppProtocolVersionQueryVariables = Exact<{
  [key: string]: never;
}>;

export type NodeAppProtocolVersionQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & {
    appProtocolVersion?: Maybe<
      { __typename?: "AppProtocolVersionType" } & Pick<
        AppProtocolVersionType,
        "version" | "signer" | "signature" | "extra"
      >
    >;
  };
};

export type DifferentAppProtocolVersionEncounterSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DifferentAppProtocolVersionEncounterSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  differentAppProtocolVersionEncounter: {
    __typename?: "DifferentAppProtocolVersionEncounterType";
  } & Pick<DifferentAppProtocolVersionEncounterType, "peer"> & {
      peerVersion: { __typename?: "AppProtocolVersionType" } & Pick<
        AppProtocolVersionType,
        "version" | "extra"
      >;
      localVersion: { __typename?: "AppProtocolVersionType" } & Pick<
        AppProtocolVersionType,
        "version" | "extra"
      >;
    };
};

export type NotificationSubscriptionVariables = Exact<{ [key: string]: never }>;

export type NotificationSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  notification: { __typename?: "NotificationType" } & Pick<
    NotificationType,
    "type" | "message"
  >;
};

export type ValidateSnapshotQueryVariables = Exact<{
  raw: Scalars["String"];
}>;

export type ValidateSnapshotQuery = { __typename?: "StandaloneQuery" } & {
  validation: { __typename?: "ValidationQuery" } & Pick<
    ValidationQuery,
    "metadata"
  >;
};

export type CollectionSheetQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionSheetQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    monsterCollectionSheet?: Maybe<
      { __typename?: "MonsterCollectionSheetType" } & {
        orderedList?: Maybe<
          Array<
            Maybe<
              { __typename?: "MonsterCollectionRowType" } & Pick<
                MonsterCollectionRowType,
                "level" | "requiredGold"
              > & {
                  rewards: Array<
                    Maybe<
                      { __typename?: "MonsterCollectionRewardInfoType" } & Pick<
                        MonsterCollectionRewardInfoType,
                        "itemId" | "quantity"
                      >
                    >
                  >;
                }
            >
          >
        >;
      }
    >;
  };
};

export type GetAvatarAddressQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type GetAvatarAddressQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    agent?: Maybe<
      { __typename?: "AgentStateType" } & {
        avatarStates?: Maybe<
          Array<
            { __typename?: "AvatarStateType" } & Pick<
              AvatarStateType,
              "address" | "name" | "updatedAt"
            >
          >
        >;
      }
    >;
  };
};

export type CollectionSheetWithStateQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type CollectionSheetWithStateQuery = {
  __typename?: "StandaloneQuery";
} & {
  stateQuery: { __typename?: "StateQuery" } & {
    monsterCollectionSheet?: Maybe<
      { __typename?: "MonsterCollectionSheetType" } & {
        orderedList?: Maybe<
          Array<
            Maybe<
              { __typename?: "MonsterCollectionRowType" } & Pick<
                MonsterCollectionRowType,
                "level" | "requiredGold"
              > & {
                  rewards: Array<
                    Maybe<
                      { __typename?: "MonsterCollectionRewardInfoType" } & Pick<
                        MonsterCollectionRewardInfoType,
                        "itemId" | "quantity"
                      >
                    >
                  >;
                }
            >
          >
        >;
      }
    >;
    agent?: Maybe<
      { __typename?: "AgentStateType" } & Pick<AgentStateType, "gold">
    >;
    monsterCollectionState?: Maybe<
      { __typename?: "MonsterCollectionStateType" } & Pick<
        MonsterCollectionStateType,
        "level"
      >
    >;
  };
};

export type MinerAddressQueryVariables = Exact<{ [key: string]: never }>;

export type MinerAddressQuery = { __typename?: "StandaloneQuery" } & Pick<
  StandaloneQuery,
  "minerAddress"
>;

export type GetTipQueryVariables = Exact<{ [key: string]: never }>;

export type GetTipQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & {
    tip: { __typename?: "BlockHeader" } & Pick<BlockHeader, "index">;
  };
};

export type GetNextTxNonceQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type GetNextTxNonceQuery = { __typename?: "StandaloneQuery" } & {
  transaction: { __typename?: "TransactionHeadlessQuery" } & Pick<
    TransactionHeadlessQuery,
    "nextTxNonce"
  >;
};

export type StateQueryMonsterCollectionQueryVariables = Exact<{
  agentAddress: Scalars["Address"];
}>;

export type StateQueryMonsterCollectionQuery = {
  __typename?: "StandaloneQuery";
} & {
  stateQuery: { __typename?: "StateQuery" } & {
    agent?: Maybe<
      { __typename?: "AgentStateType" } & Pick<AgentStateType, "gold">
    >;
    monsterCollectionState?: Maybe<
      { __typename?: "MonsterCollectionStateType" } & Pick<
        MonsterCollectionStateType,
        | "expiredBlockIndex"
        | "level"
        | "rewardLevel"
        | "receivedBlockIndex"
        | "startedBlockIndex"
        | "claimableBlockIndex"
      >
    >;
  };
};

export type CollectMutationVariables = Exact<{
  level: Scalars["Int"];
}>;

export type CollectMutation = { __typename?: "StandaloneMutation" } & {
  action?: Maybe<
    { __typename?: "ActionMutation" } & Pick<ActionMutation, "monsterCollect">
  >;
};

export type ClaimCollectionRewardMutationVariables = Exact<{
  address: Scalars["Address"];
}>;

export type ClaimCollectionRewardMutation = {
  __typename?: "StandaloneMutation";
} & {
  action?: Maybe<
    { __typename?: "ActionMutation" } & Pick<
      ActionMutation,
      "claimMonsterCollectionReward"
    >
  >;
};

export type TransferMutationVariables = Exact<{
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  txNonce: Scalars["Long"];
  memo: Scalars["String"];
}>;

export type TransferMutation = { __typename?: "StandaloneMutation" } & Pick<
  StandaloneMutation,
  "transfer"
>;

export type StagedTxQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type StagedTxQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & Pick<
    NodeStatusType,
    "stagedTxIds"
  >;
};

export type StageTxMutationVariables = Exact<{
  encodedTx: Scalars["String"];
}>;

export type StageTxMutation = { __typename?: "StandaloneMutation" } & Pick<
  StandaloneMutation,
  "stageTx"
>;

export type StageTxV2MutationVariables = Exact<{
  encodedTx: Scalars["String"];
}>;

export type StageTxV2Mutation = { __typename?: "StandaloneMutation" } & Pick<
  StandaloneMutation,
  "stageTxV2"
>;

export type PreloadEndedQueryVariables = Exact<{ [key: string]: never }>;

export type PreloadEndedQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & Pick<
    NodeStatusType,
    "preloadEnded"
  > & {
      tip: { __typename?: "BlockHeader" } & Pick<BlockHeader, "index">;
      appProtocolVersion?: Maybe<
        { __typename?: "AppProtocolVersionType" } & Pick<
          AppProtocolVersionType,
          "version" | "extra" | "signer" | "signature"
        >
      >;
    };
  rpcInformation: { __typename?: "RpcInformationQuery" } & Pick<
    RpcInformationQuery,
    "totalCount"
  >;
};

export type BalanceByAgentSubscriptionVariables = Exact<{
  address: Scalars["Address"];
}>;

export type BalanceByAgentSubscription = {
  __typename?: "StandaloneSubscription";
} & Pick<StandaloneSubscription, "balanceByAgent">;

export type TipSubscriptionVariables = Exact<{ [key: string]: never }>;

export type TipSubscription = { __typename?: "StandaloneSubscription" } & {
  tipChanged?: Maybe<{ __typename?: "TipChanged" } & Pick<TipChanged, "index">>;
};

export type UserStakingQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type UserStakingQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    stakeState?: Maybe<
      { __typename?: "StakeStateType" } & Pick<
        StakeStateType,
        | "deposit"
        | "startedBlockIndex"
        | "receivedBlockIndex"
        | "cancellableBlockIndex"
        | "claimableBlockIndex"
      > & {
          stakeRewards: { __typename?: "StakeRewardsType" } & {
            orderedList: Array<
              { __typename?: "StakeRegularRewardsType" } & Pick<
                StakeRegularRewardsType,
                "level" | "requiredGold"
              > & {
                  rewards: Array<
                    { __typename?: "StakeRegularRewardInfoType" } & Pick<
                      StakeRegularRewardInfoType,
                      "itemId" | "decimalRate" | "type" | "currencyTicker"
                    >
                  >;
                  bonusRewards: Array<
                    { __typename?: "StakeRegularFixedRewardInfoType" } & Pick<
                      StakeRegularFixedRewardInfoType,
                      "itemId" | "count"
                    >
                  >;
                }
            >;
          };
        }
    >;
  };
};

export type LatestStakingSheetQueryVariables = Exact<{ [key: string]: never }>;

export type LatestStakingSheetQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    latestStakeRewards?: Maybe<
      { __typename?: "StakeRewardsType" } & {
        orderedList: Array<
          { __typename?: "StakeRegularRewardsType" } & Pick<
            StakeRegularRewardsType,
            "level" | "requiredGold"
          > & {
              rewards: Array<
                { __typename?: "StakeRegularRewardInfoType" } & Pick<
                  StakeRegularRewardInfoType,
                  "itemId" | "decimalRate" | "type" | "currencyTicker"
                >
              >;
              bonusRewards: Array<
                { __typename?: "StakeRegularFixedRewardInfoType" } & Pick<
                  StakeRegularFixedRewardInfoType,
                  "itemId" | "count"
                >
              >;
            }
        >;
      }
    >;
  };
};

export type StakingSheetQueryVariables = Exact<{ [key: string]: never }>;

export type StakingSheetQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    stakeRewards?: Maybe<
      { __typename?: "StakeRewardsType" } & {
        orderedList: Array<
          { __typename?: "StakeRegularRewardsType" } & Pick<
            StakeRegularRewardsType,
            "level" | "requiredGold"
          > & {
              rewards: Array<
                { __typename?: "StakeRegularRewardInfoType" } & Pick<
                  StakeRegularRewardInfoType,
                  "itemId" | "decimalRate" | "type" | "currencyTicker"
                >
              >;
              bonusRewards: Array<
                { __typename?: "StakeRegularFixedRewardInfoType" } & Pick<
                  StakeRegularFixedRewardInfoType,
                  "itemId" | "count"
                >
              >;
            }
        >;
      }
    >;
  };
};

export type V1CollectionStateQueryVariables = Exact<{
  address: Scalars["Address"];
}>;

export type V1CollectionStateQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    monsterCollectionSheet?: Maybe<
      { __typename?: "MonsterCollectionSheetType" } & {
        orderedList?: Maybe<
          Array<
            Maybe<
              { __typename?: "MonsterCollectionRowType" } & Pick<
                MonsterCollectionRowType,
                "level" | "requiredGold"
              >
            >
          >
        >;
      }
    >;
    monsterCollectionState?: Maybe<
      { __typename?: "MonsterCollectionStateType" } & Pick<
        MonsterCollectionStateType,
        "startedBlockIndex" | "claimableBlockIndex" | "level"
      >
    >;
  };
};

export type GenesisHashQueryVariables = Exact<{ [key: string]: never }>;

export type GenesisHashQuery = { __typename?: "StandaloneQuery" } & {
  nodeStatus: { __typename?: "NodeStatusType" } & {
    genesis: { __typename?: "BlockHeader" } & Pick<BlockHeader, "hash">;
  };
};

export type StageTransactionMutationVariables = Exact<{
  payload: Scalars["String"];
}>;

export type StageTransactionMutation = {
  __typename?: "StandaloneMutation";
} & Pick<StandaloneMutation, "stageTransaction">;

export type TransferAssetQueryVariables = Exact<{
  publicKey: Scalars["String"];
  sender: Scalars["Address"];
  recipient: Scalars["Address"];
  amount: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
}>;

export type TransferAssetQuery = { __typename?: "StandaloneQuery" } & {
  actionTxQuery: { __typename?: "ActionTxQuery" } & Pick<
    ActionTxQuery,
    "transferAsset"
  >;
};

export type StakeQueryVariables = Exact<{
  publicKey: Scalars["String"];
  amount?: Maybe<Scalars["BigInt"]>;
}>;

export type StakeQuery = { __typename?: "StandaloneQuery" } & {
  actionTxQuery: { __typename?: "ActionTxQuery" } & Pick<
    ActionTxQuery,
    "stake"
  >;
};

export type ClaimStakeRewardQueryVariables = Exact<{
  publicKey: Scalars["String"];
  avatarAddress?: Maybe<Scalars["Address"]>;
}>;

export type ClaimStakeRewardQuery = { __typename?: "StandaloneQuery" } & {
  actionTxQuery: { __typename?: "ActionTxQuery" } & Pick<
    ActionTxQuery,
    "claimStakeReward"
  >;
};

export type MigrateMonsterCollectionQueryVariables = Exact<{
  publicKey: Scalars["String"];
  avatarAddress?: Maybe<Scalars["Address"]>;
}>;

export type MigrateMonsterCollectionQuery = {
  __typename?: "StandaloneQuery";
} & {
  actionTxQuery: { __typename?: "ActionTxQuery" } & Pick<
    ActionTxQuery,
    "migrateMonsterCollection"
  >;
};

export type CheckContractedQueryVariables = Exact<{
  agentAddress: Scalars["Address"];
}>;

export type CheckContractedQuery = { __typename?: "StandaloneQuery" } & {
  stateQuery: { __typename?: "StateQuery" } & {
    pledge: { __typename?: "MeadPledgeType" } & Pick<
      MeadPledgeType,
      "approved" | "patronAddress"
    >;
  };
};

export type ApprovePledgeQueryVariables = Exact<{
  publicKey: Scalars["String"];
  patronAddress: Scalars["Address"];
}>;

export type ApprovePledgeQuery = { __typename?: "StandaloneQuery" } & {
  actionTxQuery: { __typename?: "ActionTxQuery" } & Pick<
    ActionTxQuery,
    "approvePledge"
  >;
};

export type CheckPatchTableSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CheckPatchTableSubscription = {
  __typename?: "StandaloneSubscription";
} & {
  tx?: Maybe<
    { __typename?: "TxType" } & {
      txResult?: Maybe<
        { __typename?: "TxResultType" } & Pick<TxResultType, "txStatus">
      >;
    }
  >;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  StandaloneQuery: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  StateQuery: ResolverTypeWrapper<StateQuery>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  AvatarStateType: ResolverTypeWrapper<AvatarStateType>;
  Address: ResolverTypeWrapper<Scalars["Address"]>;
  Long: ResolverTypeWrapper<Scalars["Long"]>;
  InventoryType: ResolverTypeWrapper<InventoryType>;
  ConsumableType: ResolverTypeWrapper<ConsumableType>;
  ItemType: ItemType;
  ItemSubType: ItemSubType;
  ElementalType: ElementalType;
  Guid: ResolverTypeWrapper<Scalars["Guid"]>;
  StatType: StatType;
  MaterialType: ResolverTypeWrapper<MaterialType>;
  ByteString: ResolverTypeWrapper<Scalars["ByteString"]>;
  EquipmentType: ResolverTypeWrapper<EquipmentType>;
  DecimalStatType: ResolverTypeWrapper<DecimalStatType>;
  Decimal: ResolverTypeWrapper<Scalars["Decimal"]>;
  SkillType: ResolverTypeWrapper<SkillType>;
  StatsMapType: ResolverTypeWrapper<StatsMapType>;
  CostumeType: ResolverTypeWrapper<CostumeType>;
  InventoryItemType: ResolverTypeWrapper<InventoryItemType>;
  RuneStateType: ResolverTypeWrapper<RuneStateType>;
  CombinationSlotStateType: ResolverTypeWrapper<CombinationSlotStateType>;
  CollectionMapType: ResolverTypeWrapper<CollectionMapType>;
  QuestListType: ResolverTypeWrapper<QuestListType>;
  MailBoxType: ResolverTypeWrapper<MailBoxType>;
  MailType: ResolverTypeWrapper<MailType>;
  WorldInformationType: ResolverTypeWrapper<WorldInformationType>;
  WorldType: ResolverTypeWrapper<WorldType>;
  RankingMapStateType: ResolverTypeWrapper<RankingMapStateType>;
  RankingInfoType: ResolverTypeWrapper<RankingInfoType>;
  ShopStateType: ResolverTypeWrapper<ShopStateType>;
  ShopItemType: ResolverTypeWrapper<ShopItemType>;
  ItemUsableType: ResolverTypeWrapper<ItemUsableType>;
  ShardedShopStateV2Type: ResolverTypeWrapper<ShardedShopStateV2Type>;
  OrderDigestType: ResolverTypeWrapper<OrderDigestType>;
  WeeklyArenaStateType: ResolverTypeWrapper<WeeklyArenaStateType>;
  ArenaInfoType: ResolverTypeWrapper<ArenaInfoType>;
  ArenaRecordType: ResolverTypeWrapper<ArenaRecordType>;
  ArenaInformationType: ResolverTypeWrapper<ArenaInformationType>;
  AgentStateType: ResolverTypeWrapper<AgentStateType>;
  MeadPledgeType: ResolverTypeWrapper<MeadPledgeType>;
  StakeStateType: ResolverTypeWrapper<StakeStateType>;
  StakeAchievementsType: ResolverTypeWrapper<StakeAchievementsType>;
  StakeRewardsType: ResolverTypeWrapper<StakeRewardsType>;
  StakeRegularRewardsType: ResolverTypeWrapper<StakeRegularRewardsType>;
  StakeRegularRewardInfoType: ResolverTypeWrapper<StakeRegularRewardInfoType>;
  StakeRewardType: StakeRewardType;
  StakeRegularFixedRewardInfoType: ResolverTypeWrapper<StakeRegularFixedRewardInfoType>;
  MonsterCollectionStateType: ResolverTypeWrapper<MonsterCollectionStateType>;
  MonsterCollectionSheetType: ResolverTypeWrapper<MonsterCollectionSheetType>;
  MonsterCollectionRowType: ResolverTypeWrapper<MonsterCollectionRowType>;
  MonsterCollectionRewardInfoType: ResolverTypeWrapper<MonsterCollectionRewardInfoType>;
  CrystalMonsterCollectionMultiplierSheetType: ResolverTypeWrapper<CrystalMonsterCollectionMultiplierSheetType>;
  CrystalMonsterCollectionMultiplierRowType: ResolverTypeWrapper<CrystalMonsterCollectionMultiplierRowType>;
  RaiderStateType: ResolverTypeWrapper<RaiderStateType>;
  WorldBossStateType: ResolverTypeWrapper<WorldBossStateType>;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  WorldBossKillRewardRecordType: ResolverTypeWrapper<WorldBossKillRewardRecordType>;
  WorldBossKillRewardRecordMapType: ResolverTypeWrapper<WorldBossKillRewardRecordMapType>;
  FungibleAssetValueWithCurrencyType: ResolverTypeWrapper<FungibleAssetValueWithCurrencyType>;
  CurrencyType: ResolverTypeWrapper<CurrencyType>;
  Byte: ResolverTypeWrapper<Scalars["Byte"]>;
  CurrencyInput: CurrencyInput;
  OrderDigestListStateType: ResolverTypeWrapper<OrderDigestListStateType>;
  GaragesType: ResolverTypeWrapper<GaragesType>;
  FungibleAssetValue: ResolverTypeWrapper<FungibleAssetValue>;
  Currency: ResolverTypeWrapper<Currency>;
  FungibleItemGarageWithAddressType: ResolverTypeWrapper<FungibleItemGarageWithAddressType>;
  FungibleItemType: ResolverTypeWrapper<FungibleItemType>;
  CurrencyEnum: CurrencyEnum;
  TransferNCGHistoryType: ResolverTypeWrapper<TransferNcgHistoryType>;
  KeyStoreType: ResolverTypeWrapper<KeyStoreType>;
  ProtectedPrivateKeyType: ResolverTypeWrapper<ProtectedPrivateKeyType>;
  PrivateKeyType: ResolverTypeWrapper<PrivateKeyType>;
  PublicKeyType: ResolverTypeWrapper<PublicKeyType>;
  NodeStatusType: ResolverTypeWrapper<NodeStatusType>;
  BlockHeader: ResolverTypeWrapper<BlockHeader>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  TxId: ResolverTypeWrapper<Scalars["TxId"]>;
  AppProtocolVersionType: ResolverTypeWrapper<AppProtocolVersionType>;
  ExplorerQuery: ResolverTypeWrapper<ExplorerQuery>;
  BlockQuery: ResolverTypeWrapper<BlockQuery>;
  Block: ResolverTypeWrapper<Block>;
  PublicKey: ResolverTypeWrapper<Scalars["PublicKey"]>;
  DateTimeOffset: ResolverTypeWrapper<Scalars["DateTimeOffset"]>;
  Transaction: ResolverTypeWrapper<Transaction>;
  Action: ResolverTypeWrapper<Action>;
  BlockCommit: ResolverTypeWrapper<BlockCommit>;
  Vote: ResolverTypeWrapper<Vote>;
  VoteFlag: ResolverTypeWrapper<Scalars["VoteFlag"]>;
  TransactionQuery: ResolverTypeWrapper<TransactionQuery>;
  TxResultType: ResolverTypeWrapper<TxResultType>;
  TxStatus: TxStatus;
  BencodexValue: ResolverTypeWrapper<Scalars["BencodexValue"]>;
  UpdatedStateType: ResolverTypeWrapper<UpdatedStateType>;
  FungibleAssetBalancesType: ResolverTypeWrapper<FungibleAssetBalancesType>;
  LibplanetStateQuery: ResolverTypeWrapper<LibplanetStateQuery>;
  Validator: ResolverTypeWrapper<Validator>;
  NodeState: ResolverTypeWrapper<NodeState>;
  BoundPeer: ResolverTypeWrapper<BoundPeer>;
  ValidationQuery: ResolverTypeWrapper<ValidationQuery>;
  ActivationStatusQuery: ResolverTypeWrapper<ActivationStatusQuery>;
  PeerChainStateQuery: ResolverTypeWrapper<PeerChainStateQuery>;
  TransactionType: ResolverTypeWrapper<TransactionType>;
  MonsterCollectionStatusType: ResolverTypeWrapper<MonsterCollectionStatusType>;
  FungibleAssetValueType: ResolverTypeWrapper<FungibleAssetValueType>;
  TransactionHeadlessQuery: ResolverTypeWrapper<TransactionHeadlessQuery>;
  FungibleAssetValueInputType: FungibleAssetValueInputType;
  RpcInformationQuery: ResolverTypeWrapper<RpcInformationQuery>;
  ActionQuery: ResolverTypeWrapper<ActionQuery>;
  RuneSlotInfoInputType: RuneSlotInfoInputType;
  RecipientsInputType: RecipientsInputType;
  BalanceInput: BalanceInput;
  SimplifyFungibleAssetValueInput: SimplifyFungibleAssetValueInput;
  FungibleIdAndCountInput: FungibleIdAndCountInput;
  CraftQuery: ResolverTypeWrapper<CraftQuery>;
  MaterialsToUseInputType: MaterialsToUseInputType;
  ActionTxQuery: ResolverTypeWrapper<ActionTxQuery>;
  AddressQuery: ResolverTypeWrapper<AddressQuery>;
  StandaloneMutation: ResolverTypeWrapper<{}>;
  KeyStoreMutation: ResolverTypeWrapper<KeyStoreMutation>;
  ActivationStatusMutation: ResolverTypeWrapper<ActivationStatusMutation>;
  ActionMutation: ResolverTypeWrapper<ActionMutation>;
  StandaloneSubscription: ResolverTypeWrapper<{}>;
  TipChanged: ResolverTypeWrapper<TipChanged>;
  TxType: ResolverTypeWrapper<TxType>;
  PreloadStateType: ResolverTypeWrapper<PreloadStateType>;
  PreloadStateExtraType: ResolverTypeWrapper<PreloadStateExtraType>;
  DifferentAppProtocolVersionEncounterType: ResolverTypeWrapper<DifferentAppProtocolVersionEncounterType>;
  NotificationType: ResolverTypeWrapper<NotificationType>;
  NotificationEnum: NotificationEnum;
  NodeExceptionType: ResolverTypeWrapper<NodeExceptionType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  StandaloneQuery: {};
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
  StateQuery: StateQuery;
  Int: Scalars["Int"];
  AvatarStateType: AvatarStateType;
  Address: Scalars["Address"];
  Long: Scalars["Long"];
  InventoryType: InventoryType;
  ConsumableType: ConsumableType;
  Guid: Scalars["Guid"];
  MaterialType: MaterialType;
  ByteString: Scalars["ByteString"];
  EquipmentType: EquipmentType;
  DecimalStatType: DecimalStatType;
  Decimal: Scalars["Decimal"];
  SkillType: SkillType;
  StatsMapType: StatsMapType;
  CostumeType: CostumeType;
  InventoryItemType: InventoryItemType;
  RuneStateType: RuneStateType;
  CombinationSlotStateType: CombinationSlotStateType;
  CollectionMapType: CollectionMapType;
  QuestListType: QuestListType;
  MailBoxType: MailBoxType;
  MailType: MailType;
  WorldInformationType: WorldInformationType;
  WorldType: WorldType;
  RankingMapStateType: RankingMapStateType;
  RankingInfoType: RankingInfoType;
  ShopStateType: ShopStateType;
  ShopItemType: ShopItemType;
  ItemUsableType: ItemUsableType;
  ShardedShopStateV2Type: ShardedShopStateV2Type;
  OrderDigestType: OrderDigestType;
  WeeklyArenaStateType: WeeklyArenaStateType;
  ArenaInfoType: ArenaInfoType;
  ArenaRecordType: ArenaRecordType;
  ArenaInformationType: ArenaInformationType;
  AgentStateType: AgentStateType;
  MeadPledgeType: MeadPledgeType;
  StakeStateType: StakeStateType;
  StakeAchievementsType: StakeAchievementsType;
  StakeRewardsType: StakeRewardsType;
  StakeRegularRewardsType: StakeRegularRewardsType;
  StakeRegularRewardInfoType: StakeRegularRewardInfoType;
  StakeRegularFixedRewardInfoType: StakeRegularFixedRewardInfoType;
  MonsterCollectionStateType: MonsterCollectionStateType;
  MonsterCollectionSheetType: MonsterCollectionSheetType;
  MonsterCollectionRowType: MonsterCollectionRowType;
  MonsterCollectionRewardInfoType: MonsterCollectionRewardInfoType;
  CrystalMonsterCollectionMultiplierSheetType: CrystalMonsterCollectionMultiplierSheetType;
  CrystalMonsterCollectionMultiplierRowType: CrystalMonsterCollectionMultiplierRowType;
  RaiderStateType: RaiderStateType;
  WorldBossStateType: WorldBossStateType;
  BigInt: Scalars["BigInt"];
  WorldBossKillRewardRecordType: WorldBossKillRewardRecordType;
  WorldBossKillRewardRecordMapType: WorldBossKillRewardRecordMapType;
  FungibleAssetValueWithCurrencyType: FungibleAssetValueWithCurrencyType;
  CurrencyType: CurrencyType;
  Byte: Scalars["Byte"];
  CurrencyInput: CurrencyInput;
  OrderDigestListStateType: OrderDigestListStateType;
  GaragesType: GaragesType;
  FungibleAssetValue: FungibleAssetValue;
  Currency: Currency;
  FungibleItemGarageWithAddressType: FungibleItemGarageWithAddressType;
  FungibleItemType: FungibleItemType;
  TransferNCGHistoryType: TransferNcgHistoryType;
  KeyStoreType: KeyStoreType;
  ProtectedPrivateKeyType: ProtectedPrivateKeyType;
  PrivateKeyType: PrivateKeyType;
  PublicKeyType: PublicKeyType;
  NodeStatusType: NodeStatusType;
  BlockHeader: BlockHeader;
  ID: Scalars["ID"];
  TxId: Scalars["TxId"];
  AppProtocolVersionType: AppProtocolVersionType;
  ExplorerQuery: ExplorerQuery;
  BlockQuery: BlockQuery;
  Block: Block;
  PublicKey: Scalars["PublicKey"];
  DateTimeOffset: Scalars["DateTimeOffset"];
  Transaction: Transaction;
  Action: Action;
  BlockCommit: BlockCommit;
  Vote: Vote;
  VoteFlag: Scalars["VoteFlag"];
  TransactionQuery: TransactionQuery;
  TxResultType: TxResultType;
  BencodexValue: Scalars["BencodexValue"];
  UpdatedStateType: UpdatedStateType;
  FungibleAssetBalancesType: FungibleAssetBalancesType;
  LibplanetStateQuery: LibplanetStateQuery;
  Validator: Validator;
  NodeState: NodeState;
  BoundPeer: BoundPeer;
  ValidationQuery: ValidationQuery;
  ActivationStatusQuery: ActivationStatusQuery;
  PeerChainStateQuery: PeerChainStateQuery;
  TransactionType: TransactionType;
  MonsterCollectionStatusType: MonsterCollectionStatusType;
  FungibleAssetValueType: FungibleAssetValueType;
  TransactionHeadlessQuery: TransactionHeadlessQuery;
  FungibleAssetValueInputType: FungibleAssetValueInputType;
  RpcInformationQuery: RpcInformationQuery;
  ActionQuery: ActionQuery;
  RuneSlotInfoInputType: RuneSlotInfoInputType;
  RecipientsInputType: RecipientsInputType;
  BalanceInput: BalanceInput;
  SimplifyFungibleAssetValueInput: SimplifyFungibleAssetValueInput;
  FungibleIdAndCountInput: FungibleIdAndCountInput;
  CraftQuery: CraftQuery;
  MaterialsToUseInputType: MaterialsToUseInputType;
  ActionTxQuery: ActionTxQuery;
  AddressQuery: AddressQuery;
  StandaloneMutation: {};
  KeyStoreMutation: KeyStoreMutation;
  ActivationStatusMutation: ActivationStatusMutation;
  ActionMutation: ActionMutation;
  StandaloneSubscription: {};
  TipChanged: TipChanged;
  TxType: TxType;
  PreloadStateType: PreloadStateType;
  PreloadStateExtraType: PreloadStateExtraType;
  DifferentAppProtocolVersionEncounterType: DifferentAppProtocolVersionEncounterType;
  NotificationType: NotificationType;
  NodeExceptionType: NodeExceptionType;
};

export type StandaloneQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StandaloneQuery"] = ResolversParentTypes["StandaloneQuery"],
> = {
  stateQuery?: Resolver<
    ResolversTypes["StateQuery"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryStateQueryArgs, never>
  >;
  state?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryStateArgs, "address">
  >;
  transferNCGHistories?: Resolver<
    Array<ResolversTypes["TransferNCGHistoryType"]>,
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryTransferNcgHistoriesArgs, "blockHash">
  >;
  keyStore?: Resolver<
    Maybe<ResolversTypes["KeyStoreType"]>,
    ParentType,
    ContextType
  >;
  nodeStatus?: Resolver<
    ResolversTypes["NodeStatusType"],
    ParentType,
    ContextType
  >;
  chainQuery?: Resolver<
    ResolversTypes["ExplorerQuery"],
    ParentType,
    ContextType
  >;
  validation?: Resolver<
    ResolversTypes["ValidationQuery"],
    ParentType,
    ContextType
  >;
  activationStatus?: Resolver<
    ResolversTypes["ActivationStatusQuery"],
    ParentType,
    ContextType
  >;
  peerChainState?: Resolver<
    ResolversTypes["PeerChainStateQuery"],
    ParentType,
    ContextType
  >;
  goldBalance?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryGoldBalanceArgs, "address">
  >;
  nextTxNonce?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryNextTxNonceArgs, "address">
  >;
  getTx?: Resolver<
    Maybe<ResolversTypes["TransactionType"]>,
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryGetTxArgs, "txId">
  >;
  minerAddress?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  monsterCollectionStatus?: Resolver<
    Maybe<ResolversTypes["MonsterCollectionStatusType"]>,
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryMonsterCollectionStatusArgs, never>
  >;
  transaction?: Resolver<
    ResolversTypes["TransactionHeadlessQuery"],
    ParentType,
    ContextType
  >;
  activated?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryActivatedArgs, "invitationCode">
  >;
  activationKeyNonce?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryActivationKeyNonceArgs, "invitationCode">
  >;
  rpcInformation?: Resolver<
    ResolversTypes["RpcInformationQuery"],
    ParentType,
    ContextType
  >;
  actionQuery?: Resolver<
    ResolversTypes["ActionQuery"],
    ParentType,
    ContextType
  >;
  actionTxQuery?: Resolver<
    ResolversTypes["ActionTxQuery"],
    ParentType,
    ContextType,
    RequireFields<StandaloneQueryActionTxQueryArgs, "publicKey" | "maxGasPrice">
  >;
  addressQuery?: Resolver<
    ResolversTypes["AddressQuery"],
    ParentType,
    ContextType
  >;
};

export type StateQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StateQuery"] = ResolversParentTypes["StateQuery"],
> = {
  avatar?: Resolver<
    Maybe<ResolversTypes["AvatarStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryAvatarArgs, "avatarAddress">
  >;
  avatars?: Resolver<
    Array<Maybe<ResolversTypes["AvatarStateType"]>>,
    ParentType,
    ContextType,
    RequireFields<StateQueryAvatarsArgs, "addresses">
  >;
  rankingMap?: Resolver<
    Maybe<ResolversTypes["RankingMapStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryRankingMapArgs, "index">
  >;
  shop?: Resolver<
    Maybe<ResolversTypes["ShopStateType"]>,
    ParentType,
    ContextType
  >;
  shardedShop?: Resolver<
    Maybe<ResolversTypes["ShardedShopStateV2Type"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryShardedShopArgs, "itemSubType" | "nonce">
  >;
  weeklyArena?: Resolver<
    Maybe<ResolversTypes["WeeklyArenaStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryWeeklyArenaArgs, "index">
  >;
  arenaInformation?: Resolver<
    Array<ResolversTypes["ArenaInformationType"]>,
    ParentType,
    ContextType,
    RequireFields<
      StateQueryArenaInformationArgs,
      "championshipId" | "round" | "avatarAddresses"
    >
  >;
  agent?: Resolver<
    Maybe<ResolversTypes["AgentStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryAgentArgs, "address">
  >;
  stakeState?: Resolver<
    Maybe<ResolversTypes["StakeStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryStakeStateArgs, "address">
  >;
  stakeStates?: Resolver<
    Array<Maybe<ResolversTypes["StakeStateType"]>>,
    ParentType,
    ContextType,
    RequireFields<StateQueryStakeStatesArgs, "addresses">
  >;
  monsterCollectionState?: Resolver<
    Maybe<ResolversTypes["MonsterCollectionStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryMonsterCollectionStateArgs, "agentAddress">
  >;
  monsterCollectionSheet?: Resolver<
    Maybe<ResolversTypes["MonsterCollectionSheetType"]>,
    ParentType,
    ContextType
  >;
  latestStakeRewards?: Resolver<
    Maybe<ResolversTypes["StakeRewardsType"]>,
    ParentType,
    ContextType
  >;
  stakeRewards?: Resolver<
    Maybe<ResolversTypes["StakeRewardsType"]>,
    ParentType,
    ContextType
  >;
  crystalMonsterCollectionMultiplierSheet?: Resolver<
    Maybe<ResolversTypes["CrystalMonsterCollectionMultiplierSheetType"]>,
    ParentType,
    ContextType
  >;
  unlockedRecipeIds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Int"]>>>,
    ParentType,
    ContextType,
    RequireFields<StateQueryUnlockedRecipeIdsArgs, "avatarAddress">
  >;
  unlockedWorldIds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Int"]>>>,
    ParentType,
    ContextType,
    RequireFields<StateQueryUnlockedWorldIdsArgs, "avatarAddress">
  >;
  raiderState?: Resolver<
    Maybe<ResolversTypes["RaiderStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryRaiderStateArgs, "raiderAddress">
  >;
  raidId?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<StateQueryRaidIdArgs, "blockIndex" | "prev">
  >;
  worldBossState?: Resolver<
    Maybe<ResolversTypes["WorldBossStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryWorldBossStateArgs, "bossAddress">
  >;
  worldBossKillRewardRecord?: Resolver<
    Maybe<ResolversTypes["WorldBossKillRewardRecordType"]>,
    ParentType,
    ContextType,
    RequireFields<
      StateQueryWorldBossKillRewardRecordArgs,
      "worldBossKillRewardRecordAddress"
    >
  >;
  balance?: Resolver<
    ResolversTypes["FungibleAssetValueWithCurrencyType"],
    ParentType,
    ContextType,
    RequireFields<StateQueryBalanceArgs, "address" | "currency">
  >;
  raiderList?: Resolver<
    Maybe<Array<ResolversTypes["Address"]>>,
    ParentType,
    ContextType,
    RequireFields<StateQueryRaiderListArgs, "raiderListAddress">
  >;
  orderDigestList?: Resolver<
    Maybe<ResolversTypes["OrderDigestListStateType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryOrderDigestListArgs, "avatarAddress">
  >;
  pledge?: Resolver<
    ResolversTypes["MeadPledgeType"],
    ParentType,
    ContextType,
    RequireFields<StateQueryPledgeArgs, "agentAddress">
  >;
  garages?: Resolver<
    Maybe<ResolversTypes["GaragesType"]>,
    ParentType,
    ContextType,
    RequireFields<StateQueryGaragesArgs, "agentAddr">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AvatarStateType"] = ResolversParentTypes["AvatarStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  blockIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  characterId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  dailyRewardReceivedIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  agentAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  index?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  actionPoint?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  ear?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hair?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  lens?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  tail?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  inventory?: Resolver<
    ResolversTypes["InventoryType"],
    ParentType,
    ContextType
  >;
  inventoryAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType
  >;
  runes?: Resolver<
    Array<ResolversTypes["RuneStateType"]>,
    ParentType,
    ContextType
  >;
  combinationSlotAddresses?: Resolver<
    Array<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  combinationSlots?: Resolver<
    Array<ResolversTypes["CombinationSlotStateType"]>,
    ParentType,
    ContextType
  >;
  itemMap?: Resolver<
    ResolversTypes["CollectionMapType"],
    ParentType,
    ContextType
  >;
  eventMap?: Resolver<
    ResolversTypes["CollectionMapType"],
    ParentType,
    ContextType
  >;
  monsterMap?: Resolver<
    ResolversTypes["CollectionMapType"],
    ParentType,
    ContextType
  >;
  stageMap?: Resolver<
    ResolversTypes["CollectionMapType"],
    ParentType,
    ContextType
  >;
  questList?: Resolver<
    ResolversTypes["QuestListType"],
    ParentType,
    ContextType
  >;
  mailBox?: Resolver<ResolversTypes["MailBoxType"], ParentType, ContextType>;
  worldInformation?: Resolver<
    ResolversTypes["WorldInformationType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface AddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Address"], any> {
  name: "Address";
}

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Long"], any> {
  name: "Long";
}

export type InventoryTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["InventoryType"] = ResolversParentTypes["InventoryType"],
> = {
  consumables?: Resolver<
    Array<ResolversTypes["ConsumableType"]>,
    ParentType,
    ContextType
  >;
  materials?: Resolver<
    Array<ResolversTypes["MaterialType"]>,
    ParentType,
    ContextType
  >;
  equipments?: Resolver<
    Array<ResolversTypes["EquipmentType"]>,
    ParentType,
    ContextType,
    RequireFields<InventoryTypeEquipmentsArgs, never>
  >;
  costumes?: Resolver<
    Array<ResolversTypes["CostumeType"]>,
    ParentType,
    ContextType
  >;
  items?: Resolver<
    Array<ResolversTypes["InventoryItemType"]>,
    ParentType,
    ContextType,
    RequireFields<InventoryTypeItemsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConsumableTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ConsumableType"] = ResolversParentTypes["ConsumableType"],
> = {
  grade?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  requiredBlockIndex?: Resolver<
    Maybe<ResolversTypes["Long"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  mainStat?: Resolver<ResolversTypes["StatType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Guid"], any> {
  name: "Guid";
}

export type MaterialTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MaterialType"] = ResolversParentTypes["MaterialType"],
> = {
  grade?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  requiredBlockIndex?: Resolver<
    Maybe<ResolversTypes["Long"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteStringScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ByteString"], any> {
  name: "ByteString";
}

export type EquipmentTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["EquipmentType"] = ResolversParentTypes["EquipmentType"],
> = {
  grade?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  requiredBlockIndex?: Resolver<
    Maybe<ResolversTypes["Long"]>,
    ParentType,
    ContextType
  >;
  setId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes["DecimalStatType"], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  skills?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SkillType"]>>>,
    ParentType,
    ContextType
  >;
  buffSkills?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SkillType"]>>>,
    ParentType,
    ContextType
  >;
  statsMap?: Resolver<ResolversTypes["StatsMapType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecimalStatTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["DecimalStatType"] = ResolversParentTypes["DecimalStatType"],
> = {
  statType?: Resolver<ResolversTypes["StatType"], ParentType, ContextType>;
  baseValue?: Resolver<ResolversTypes["Decimal"], ParentType, ContextType>;
  additionalValue?: Resolver<
    ResolversTypes["Decimal"],
    ParentType,
    ContextType
  >;
  totalValue?: Resolver<ResolversTypes["Decimal"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Decimal"], any> {
  name: "Decimal";
}

export type SkillTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["SkillType"] = ResolversParentTypes["SkillType"],
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  power?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  chance?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  statPowerRatio?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  referencedStatType?: Resolver<
    ResolversTypes["StatType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatsMapTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StatsMapType"] = ResolversParentTypes["StatsMapType"],
> = {
  hP?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  aTK?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  dEF?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  cRI?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hIT?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sPD?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CostumeTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CostumeType"] = ResolversParentTypes["CostumeType"],
> = {
  grade?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  requiredBlockIndex?: Resolver<
    Maybe<ResolversTypes["Long"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryItemTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["InventoryItemType"] = ResolversParentTypes["InventoryItemType"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  locked?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  lockId?: Resolver<Maybe<ResolversTypes["Guid"]>, ParentType, ContextType>;
  tradableId?: Resolver<Maybe<ResolversTypes["Guid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RuneStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RuneStateType"] = ResolversParentTypes["RuneStateType"],
> = {
  runeId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CombinationSlotStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CombinationSlotStateType"] = ResolversParentTypes["CombinationSlotStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  unlockBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  unlockStage?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMapTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CollectionMapType"] = ResolversParentTypes["CollectionMapType"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  pairs?: Resolver<
    Array<Array<Maybe<ResolversTypes["Int"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestListTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["QuestListType"] = ResolversParentTypes["QuestListType"],
> = {
  completedQuestIds?: Resolver<
    Array<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailBoxTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MailBoxType"] = ResolversParentTypes["MailBoxType"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  mails?: Resolver<Array<ResolversTypes["MailType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MailType"] = ResolversParentTypes["MailType"],
> = {
  id?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  blockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldInformationTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WorldInformationType"] = ResolversParentTypes["WorldInformationType"],
> = {
  isStageCleared?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<WorldInformationTypeIsStageClearedArgs, "stageId">
  >;
  isWorldUnlocked?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<WorldInformationTypeIsWorldUnlockedArgs, "worldId">
  >;
  world?: Resolver<
    ResolversTypes["WorldType"],
    ParentType,
    ContextType,
    RequireFields<WorldInformationTypeWorldArgs, "worldId">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WorldType"] = ResolversParentTypes["WorldType"],
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isUnlocked?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isStageCleared?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  unlockedBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  stageClearedBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  stageBegin?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  stageEnd?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  stageClearedId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankingMapStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RankingMapStateType"] = ResolversParentTypes["RankingMapStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  capacity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rankingInfos?: Resolver<
    Array<ResolversTypes["RankingInfoType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankingInfoTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RankingInfoType"] = ResolversParentTypes["RankingInfoType"],
> = {
  exp?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  armorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  stageClearedBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  agentAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ShopStateType"] = ResolversParentTypes["ShopStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  products?: Resolver<
    Array<Maybe<ResolversTypes["ShopItemType"]>>,
    ParentType,
    ContextType,
    RequireFields<ShopStateTypeProductsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopItemTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ShopItemType"] = ResolversParentTypes["ShopItemType"],
> = {
  sellerAgentAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType
  >;
  sellerAvatarAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType
  >;
  productId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemUsable?: Resolver<
    Maybe<ResolversTypes["ItemUsableType"]>,
    ParentType,
    ContextType
  >;
  costume?: Resolver<
    Maybe<ResolversTypes["CostumeType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUsableTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ItemUsableType"] = ResolversParentTypes["ItemUsableType"],
> = {
  grade?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  elementalType?: Resolver<
    ResolversTypes["ElementalType"],
    ParentType,
    ContextType
  >;
  requiredBlockIndex?: Resolver<
    Maybe<ResolversTypes["Long"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShardedShopStateV2TypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ShardedShopStateV2Type"] = ResolversParentTypes["ShardedShopStateV2Type"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  orderDigestList?: Resolver<
    Array<Maybe<ResolversTypes["OrderDigestType"]>>,
    ParentType,
    ContextType,
    RequireFields<ShardedShopStateV2TypeOrderDigestListArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderDigestTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderDigestType"] = ResolversParentTypes["OrderDigestType"],
> = {
  orderId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  tradableId?: Resolver<ResolversTypes["Guid"], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  expiredBlockIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType
  >;
  price?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  combatPoint?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeeklyArenaStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeeklyArenaStateType"] = ResolversParentTypes["WeeklyArenaStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  ended?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  orderedArenaInfos?: Resolver<
    Array<Maybe<ResolversTypes["ArenaInfoType"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaInfoTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ArenaInfoType"] = ResolversParentTypes["ArenaInfoType"],
> = {
  agentAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arenaRecord?: Resolver<
    ResolversTypes["ArenaRecordType"],
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  dailyChallengeCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  score?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaRecordTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ArenaRecordType"] = ResolversParentTypes["ArenaRecordType"],
> = {
  win?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  lose?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  draw?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaInformationTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ArenaInformationType"] = ResolversParentTypes["ArenaInformationType"],
> = {
  avatarAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  win?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  lose?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  ticket?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  ticketResetCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  purchasedTicketCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  score?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AgentStateType"] = ResolversParentTypes["AgentStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarStates?: Resolver<
    Maybe<Array<ResolversTypes["AvatarStateType"]>>,
    ParentType,
    ContextType
  >;
  gold?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  monsterCollectionRound?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  monsterCollectionLevel?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  hasTradedItem?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pledge?: Resolver<ResolversTypes["MeadPledgeType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeadPledgeTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MeadPledgeType"] = ResolversParentTypes["MeadPledgeType"],
> = {
  patronAddress?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  approved?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  mead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeStateType"] = ResolversParentTypes["StakeStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  receivedBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  cancellableBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  claimableBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  achievements?: Resolver<
    Maybe<ResolversTypes["StakeAchievementsType"]>,
    ParentType,
    ContextType
  >;
  stakeRewards?: Resolver<
    ResolversTypes["StakeRewardsType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeAchievementsTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeAchievementsType"] = ResolversParentTypes["StakeAchievementsType"],
> = {
  achievementsByLevel?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<StakeAchievementsTypeAchievementsByLevelArgs, "level">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRewardsTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeRewardsType"] = ResolversParentTypes["StakeRewardsType"],
> = {
  orderedList?: Resolver<
    Array<ResolversTypes["StakeRegularRewardsType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularRewardsTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeRegularRewardsType"] = ResolversParentTypes["StakeRegularRewardsType"],
> = {
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  requiredGold?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  rewards?: Resolver<
    Array<ResolversTypes["StakeRegularRewardInfoType"]>,
    ParentType,
    ContextType
  >;
  bonusRewards?: Resolver<
    Array<ResolversTypes["StakeRegularFixedRewardInfoType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularRewardInfoTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeRegularRewardInfoType"] = ResolversParentTypes["StakeRegularRewardInfoType"],
> = {
  itemId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["StakeRewardType"], ParentType, ContextType>;
  currencyTicker?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  currencyDecimalPlaces?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  decimalRate?: Resolver<ResolversTypes["Decimal"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularFixedRewardInfoTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StakeRegularFixedRewardInfoType"] = ResolversParentTypes["StakeRegularFixedRewardInfoType"],
> = {
  itemId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MonsterCollectionStateType"] = ResolversParentTypes["MonsterCollectionStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  expiredBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  receivedBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  rewardLevel?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  claimableBlockIndex?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionSheetTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MonsterCollectionSheetType"] = ResolversParentTypes["MonsterCollectionSheetType"],
> = {
  orderedList?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MonsterCollectionRowType"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionRowTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MonsterCollectionRowType"] = ResolversParentTypes["MonsterCollectionRowType"],
> = {
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  requiredGold?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rewards?: Resolver<
    Array<Maybe<ResolversTypes["MonsterCollectionRewardInfoType"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionRewardInfoTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MonsterCollectionRewardInfoType"] = ResolversParentTypes["MonsterCollectionRewardInfoType"],
> = {
  itemId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrystalMonsterCollectionMultiplierSheetTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CrystalMonsterCollectionMultiplierSheetType"] = ResolversParentTypes["CrystalMonsterCollectionMultiplierSheetType"],
> = {
  orderedList?: Resolver<
    Array<ResolversTypes["CrystalMonsterCollectionMultiplierRowType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrystalMonsterCollectionMultiplierRowTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CrystalMonsterCollectionMultiplierRowType"] = ResolversParentTypes["CrystalMonsterCollectionMultiplierRowType"],
> = {
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  multiplier?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaiderStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RaiderStateType"] = ResolversParentTypes["RaiderStateType"],
> = {
  totalScore?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  highScore?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalChallengeCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  remainChallengeCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  latestRewardRank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  purchaseCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  cp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  iconId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  latestBossLevel?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  claimedBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  refillBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WorldBossStateType"] = ResolversParentTypes["WorldBossStateType"],
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  currentHp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  endedBlockIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export type WorldBossKillRewardRecordTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WorldBossKillRewardRecordType"] = ResolversParentTypes["WorldBossKillRewardRecordType"],
> = {
  map?: Resolver<
    Array<ResolversTypes["WorldBossKillRewardRecordMapType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossKillRewardRecordMapTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WorldBossKillRewardRecordMapType"] = ResolversParentTypes["WorldBossKillRewardRecordMapType"],
> = {
  bossLevel?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  claimed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueWithCurrencyTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleAssetValueWithCurrencyType"] = ResolversParentTypes["FungibleAssetValueWithCurrencyType"],
> = {
  currency?: Resolver<ResolversTypes["CurrencyType"], ParentType, ContextType>;
  quantity?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<FungibleAssetValueWithCurrencyTypeQuantityArgs, "minerUnit">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CurrencyType"] = ResolversParentTypes["CurrencyType"],
> = {
  ticker?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  decimalPlaces?: Resolver<ResolversTypes["Byte"], ParentType, ContextType>;
  minters?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Address"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Byte"], any> {
  name: "Byte";
}

export type OrderDigestListStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderDigestListStateType"] = ResolversParentTypes["OrderDigestListStateType"],
> = {
  address?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  orderDigestList?: Resolver<
    Array<Maybe<ResolversTypes["OrderDigestType"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GaragesTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["GaragesType"] = ResolversParentTypes["GaragesType"],
> = {
  agentAddr?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  garageBalancesAddr?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  garageBalances?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["FungibleAssetValue"]>>>,
    ParentType,
    ContextType
  >;
  fungibleItemGarages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["FungibleItemGarageWithAddressType"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleAssetValue"] = ResolversParentTypes["FungibleAssetValue"],
> = {
  currency?: Resolver<ResolversTypes["Currency"], ParentType, ContextType>;
  sign?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  majorUnit?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  minorUnit?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  string?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Currency"] = ResolversParentTypes["Currency"],
> = {
  ticker?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  decimalPlaces?: Resolver<ResolversTypes["Byte"], ParentType, ContextType>;
  minters?: Resolver<
    Maybe<Array<ResolversTypes["Address"]>>,
    ParentType,
    ContextType
  >;
  maximumSupply?: Resolver<
    Maybe<ResolversTypes["FungibleAssetValue"]>,
    ParentType,
    ContextType
  >;
  totalSupplyTrackable?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  hash?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleItemGarageWithAddressTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleItemGarageWithAddressType"] = ResolversParentTypes["FungibleItemGarageWithAddressType"],
> = {
  fungibleItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  addr?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  item?: Resolver<
    Maybe<ResolversTypes["FungibleItemType"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleItemTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleItemType"] = ResolversParentTypes["FungibleItemType"],
> = {
  itemType?: Resolver<ResolversTypes["ItemType"], ParentType, ContextType>;
  itemSubType?: Resolver<
    ResolversTypes["ItemSubType"],
    ParentType,
    ContextType
  >;
  fungibleItemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferNcgHistoryTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TransferNCGHistoryType"] = ResolversParentTypes["TransferNCGHistoryType"],
> = {
  blockHash?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  txId?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyStoreTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["KeyStoreType"] = ResolversParentTypes["KeyStoreType"],
> = {
  protectedPrivateKeys?: Resolver<
    Array<ResolversTypes["ProtectedPrivateKeyType"]>,
    ParentType,
    ContextType
  >;
  decryptedPrivateKey?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<KeyStoreTypeDecryptedPrivateKeyArgs, "address" | "passphrase">
  >;
  privateKey?: Resolver<
    ResolversTypes["PrivateKeyType"],
    ParentType,
    ContextType,
    RequireFields<KeyStoreTypePrivateKeyArgs, "hex">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProtectedPrivateKeyTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProtectedPrivateKeyType"] = ResolversParentTypes["ProtectedPrivateKeyType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivateKeyTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PrivateKeyType"] = ResolversParentTypes["PrivateKeyType"],
> = {
  hex?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  publicKey?: Resolver<
    ResolversTypes["PublicKeyType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicKeyTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PublicKeyType"] = ResolversParentTypes["PublicKeyType"],
> = {
  hex?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<PublicKeyTypeHexArgs, never>
  >;
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeStatusTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["NodeStatusType"] = ResolversParentTypes["NodeStatusType"],
> = {
  bootstrapEnded?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  preloadEnded?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  tip?: Resolver<ResolversTypes["BlockHeader"], ParentType, ContextType>;
  topmostBlocks?: Resolver<
    Array<Maybe<ResolversTypes["BlockHeader"]>>,
    ParentType,
    ContextType,
    RequireFields<NodeStatusTypeTopmostBlocksArgs, "limit" | "offset">
  >;
  stagedTxIds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TxId"]>>>,
    ParentType,
    ContextType,
    RequireFields<NodeStatusTypeStagedTxIdsArgs, never>
  >;
  stagedTxIdsCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  genesis?: Resolver<ResolversTypes["BlockHeader"], ParentType, ContextType>;
  isMining?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  appProtocolVersion?: Resolver<
    Maybe<ResolversTypes["AppProtocolVersionType"]>,
    ParentType,
    ContextType
  >;
  subscriberAddresses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Address"]>>>,
    ParentType,
    ContextType
  >;
  subscriberAddressesCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  productVersion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  informationalVersion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockHeaderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["BlockHeader"] = ResolversParentTypes["BlockHeader"],
> = {
  index?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  miner?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TxIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["TxId"], any> {
  name: "TxId";
}

export type AppProtocolVersionTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AppProtocolVersionType"] = ResolversParentTypes["AppProtocolVersionType"],
> = {
  version?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  extra?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExplorerQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ExplorerQuery"] = ResolversParentTypes["ExplorerQuery"],
> = {
  blockQuery?: Resolver<
    Maybe<ResolversTypes["BlockQuery"]>,
    ParentType,
    ContextType
  >;
  transactionQuery?: Resolver<
    Maybe<ResolversTypes["TransactionQuery"]>,
    ParentType,
    ContextType
  >;
  stateQuery?: Resolver<
    Maybe<ResolversTypes["LibplanetStateQuery"]>,
    ParentType,
    ContextType
  >;
  nodeState?: Resolver<ResolversTypes["NodeState"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["BlockQuery"] = ResolversParentTypes["BlockQuery"],
> = {
  blocks?: Resolver<
    Array<ResolversTypes["Block"]>,
    ParentType,
    ContextType,
    RequireFields<BlockQueryBlocksArgs, "desc" | "offset" | "excludeEmptyTxs">
  >;
  block?: Resolver<
    Maybe<ResolversTypes["Block"]>,
    ParentType,
    ContextType,
    RequireFields<BlockQueryBlockArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Block"] = ResolversParentTypes["Block"],
> = {
  hash?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  index?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  miner?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  publicKey?: Resolver<
    Maybe<ResolversTypes["PublicKey"]>,
    ParentType,
    ContextType
  >;
  previousBlock?: Resolver<
    Maybe<ResolversTypes["Block"]>,
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<
    ResolversTypes["DateTimeOffset"],
    ParentType,
    ContextType
  >;
  stateRootHash?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType
  >;
  signature?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType
  >;
  transactions?: Resolver<
    Array<ResolversTypes["Transaction"]>,
    ParentType,
    ContextType
  >;
  lastCommit?: Resolver<
    Maybe<ResolversTypes["BlockCommit"]>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  totalDifficulty?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  preEvaluationHash?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PublicKeyScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PublicKey"], any> {
  name: "PublicKey";
}

export interface DateTimeOffsetScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTimeOffset"], any> {
  name: "DateTimeOffset";
}

export type TransactionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Transaction"] = ResolversParentTypes["Transaction"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  updatedAddresses?: Resolver<
    Array<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  signature?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  timestamp?: Resolver<
    ResolversTypes["DateTimeOffset"],
    ParentType,
    ContextType
  >;
  actions?: Resolver<Array<ResolversTypes["Action"]>, ParentType, ContextType>;
  serializedPayload?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  blockRef?: Resolver<ResolversTypes["Block"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Action"] = ResolversParentTypes["Action"],
> = {
  raw?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<ActionRawArgs, "encode">
  >;
  inspection?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  json?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCommitResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["BlockCommit"] = ResolversParentTypes["BlockCommit"],
> = {
  height?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  round?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes["Vote"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Vote"] = ResolversParentTypes["Vote"],
> = {
  height?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  round?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timestamp?: Resolver<
    ResolversTypes["DateTimeOffset"],
    ParentType,
    ContextType
  >;
  validatorPublicKey?: Resolver<
    ResolversTypes["PublicKey"],
    ParentType,
    ContextType
  >;
  flag?: Resolver<ResolversTypes["VoteFlag"], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoteFlagScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["VoteFlag"], any> {
  name: "VoteFlag";
}

export type TransactionQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TransactionQuery"] = ResolversParentTypes["TransactionQuery"],
> = {
  transactions?: Resolver<
    Array<ResolversTypes["Transaction"]>,
    ParentType,
    ContextType,
    RequireFields<TransactionQueryTransactionsArgs, "desc" | "offset">
  >;
  stagedTransactions?: Resolver<
    Array<ResolversTypes["Transaction"]>,
    ParentType,
    ContextType,
    RequireFields<TransactionQueryStagedTransactionsArgs, "desc" | "offset">
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes["Transaction"]>,
    ParentType,
    ContextType,
    RequireFields<TransactionQueryTransactionArgs, never>
  >;
  unsignedTransaction?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionQueryUnsignedTransactionArgs,
      "publicKey" | "plainValue"
    >
  >;
  nextNonce?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType,
    RequireFields<TransactionQueryNextNonceArgs, "address">
  >;
  bindSignature?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionQueryBindSignatureArgs,
      "unsignedTransaction" | "signature"
    >
  >;
  transactionResult?: Resolver<
    ResolversTypes["TxResultType"],
    ParentType,
    ContextType,
    RequireFields<TransactionQueryTransactionResultArgs, "txId">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TxResultTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TxResultType"] = ResolversParentTypes["TxResultType"],
> = {
  txStatus?: Resolver<ResolversTypes["TxStatus"], ParentType, ContextType>;
  blockIndex?: Resolver<Maybe<ResolversTypes["Long"]>, ParentType, ContextType>;
  blockHash?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  exceptionName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  exceptionMetadata?: Resolver<
    Maybe<ResolversTypes["BencodexValue"]>,
    ParentType,
    ContextType
  >;
  updatedStates?: Resolver<
    Maybe<Array<ResolversTypes["UpdatedStateType"]>>,
    ParentType,
    ContextType
  >;
  updatedFungibleAssets?: Resolver<
    Maybe<Array<ResolversTypes["FungibleAssetBalancesType"]>>,
    ParentType,
    ContextType
  >;
  fungibleAssetsDelta?: Resolver<
    Maybe<Array<ResolversTypes["FungibleAssetBalancesType"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BencodexValueScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BencodexValue"], any> {
  name: "BencodexValue";
}

export type UpdatedStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UpdatedStateType"] = ResolversParentTypes["UpdatedStateType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  state?: Resolver<
    Maybe<ResolversTypes["BencodexValue"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetBalancesTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleAssetBalancesType"] = ResolversParentTypes["FungibleAssetBalancesType"],
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  fungibleAssetValues?: Resolver<
    Array<ResolversTypes["FungibleAssetValue"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibplanetStateQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LibplanetStateQuery"] = ResolversParentTypes["LibplanetStateQuery"],
> = {
  states?: Resolver<
    Array<Maybe<ResolversTypes["BencodexValue"]>>,
    ParentType,
    ContextType,
    RequireFields<
      LibplanetStateQueryStatesArgs,
      "addresses" | "offsetBlockHash"
    >
  >;
  balance?: Resolver<
    ResolversTypes["FungibleAssetValue"],
    ParentType,
    ContextType,
    RequireFields<
      LibplanetStateQueryBalanceArgs,
      "owner" | "currency" | "offsetBlockHash"
    >
  >;
  totalSupply?: Resolver<
    Maybe<ResolversTypes["FungibleAssetValue"]>,
    ParentType,
    ContextType,
    RequireFields<
      LibplanetStateQueryTotalSupplyArgs,
      "currency" | "offsetBlockHash"
    >
  >;
  validators?: Resolver<
    Maybe<Array<ResolversTypes["Validator"]>>,
    ParentType,
    ContextType,
    RequireFields<LibplanetStateQueryValidatorsArgs, "offsetBlockHash">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Validator"] = ResolversParentTypes["Validator"],
> = {
  publicKey?: Resolver<ResolversTypes["PublicKey"], ParentType, ContextType>;
  power?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeStateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["NodeState"] = ResolversParentTypes["NodeState"],
> = {
  preloaded?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  peers?: Resolver<
    Maybe<Array<ResolversTypes["BoundPeer"]>>,
    ParentType,
    ContextType
  >;
  validators?: Resolver<
    Maybe<Array<ResolversTypes["BoundPeer"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoundPeerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["BoundPeer"] = ResolversParentTypes["BoundPeer"],
> = {
  publicKey?: Resolver<ResolversTypes["PublicKey"], ParentType, ContextType>;
  endPoint?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publicIpAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidationQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ValidationQuery"] = ResolversParentTypes["ValidationQuery"],
> = {
  metadata?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<ValidationQueryMetadataArgs, "raw">
  >;
  privateKey?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<ValidationQueryPrivateKeyArgs, "hex">
  >;
  publicKey?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<ValidationQueryPublicKeyArgs, "hex">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivationStatusQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ActivationStatusQuery"] = ResolversParentTypes["ActivationStatusQuery"],
> = {
  activated?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  addressActivated?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<ActivationStatusQueryAddressActivatedArgs, "address">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeerChainStateQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PeerChainStateQuery"] = ResolversParentTypes["PeerChainStateQuery"],
> = {
  state?: Resolver<
    Array<Maybe<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TransactionType"] = ResolversParentTypes["TransactionType"],
> = {
  id?: Resolver<ResolversTypes["TxId"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  publicKey?: Resolver<
    ResolversTypes["PublicKeyType"],
    ParentType,
    ContextType
  >;
  signature?: Resolver<ResolversTypes["ByteString"], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAddresses?: Resolver<
    Array<Maybe<ResolversTypes["Address"]>>,
    ParentType,
    ContextType
  >;
  actions?: Resolver<
    Array<Maybe<ResolversTypes["Action"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionStatusTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["MonsterCollectionStatusType"] = ResolversParentTypes["MonsterCollectionStatusType"],
> = {
  fungibleAssetValue?: Resolver<
    ResolversTypes["FungibleAssetValueType"],
    ParentType,
    ContextType
  >;
  rewardInfos?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MonsterCollectionRewardInfoType"]>>>,
    ParentType,
    ContextType
  >;
  tipIndex?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  lockup?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["FungibleAssetValueType"] = ResolversParentTypes["FungibleAssetValueType"],
> = {
  currency?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHeadlessQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TransactionHeadlessQuery"] = ResolversParentTypes["TransactionHeadlessQuery"],
> = {
  nextTxNonce?: Resolver<
    ResolversTypes["Long"],
    ParentType,
    ContextType,
    RequireFields<TransactionHeadlessQueryNextTxNonceArgs, "address">
  >;
  getTx?: Resolver<
    Maybe<ResolversTypes["TransactionType"]>,
    ParentType,
    ContextType,
    RequireFields<TransactionHeadlessQueryGetTxArgs, "txId">
  >;
  ncTransactions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TransactionType"]>>>,
    ParentType,
    ContextType,
    RequireFields<
      TransactionHeadlessQueryNcTransactionsArgs,
      "startingBlockIndex" | "limit" | "actionType"
    >
  >;
  createUnsignedTx?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionHeadlessQueryCreateUnsignedTxArgs,
      "publicKey" | "plainValue"
    >
  >;
  attachSignature?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionHeadlessQueryAttachSignatureArgs,
      "unsignedTransaction" | "signature"
    >
  >;
  transactionResult?: Resolver<
    ResolversTypes["TxResultType"],
    ParentType,
    ContextType,
    RequireFields<TransactionHeadlessQueryTransactionResultArgs, "txId">
  >;
  unsignedTransaction?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionHeadlessQueryUnsignedTransactionArgs,
      "publicKey" | "plainValue" | "maxGasPrice"
    >
  >;
  signTransaction?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      TransactionHeadlessQuerySignTransactionArgs,
      "unsignedTransaction" | "signature"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RpcInformationQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RpcInformationQuery"] = ResolversParentTypes["RpcInformationQuery"],
> = {
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  clients?: Resolver<
    Array<Maybe<ResolversTypes["Address"]>>,
    ParentType,
    ContextType
  >;
  totalCountByDevice?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<RpcInformationQueryTotalCountByDeviceArgs, "device">
  >;
  clientsByDevice?: Resolver<
    Array<ResolversTypes["Address"]>,
    ParentType,
    ContextType,
    RequireFields<RpcInformationQueryClientsByDeviceArgs, "device">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ActionQuery"] = ResolversParentTypes["ActionQuery"],
> = {
  stake?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionQueryStakeArgs, never>
  >;
  claimStakeReward?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionQueryClaimStakeRewardArgs, never>
  >;
  migrateMonsterCollection?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryMigrateMonsterCollectionArgs, never>
  >;
  grinding?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionQueryGrindingArgs, "avatarAddress" | "equipmentIds">
  >;
  unlockEquipmentRecipe?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryUnlockEquipmentRecipeArgs,
      "avatarAddress" | "recipeIds"
    >
  >;
  unlockWorld?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionQueryUnlockWorldArgs, "avatarAddress" | "worldIds">
  >;
  transferAsset?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryTransferAssetArgs,
      "sender" | "recipient" | "amount" | "currency"
    >
  >;
  patchTableSheet?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryPatchTableSheetArgs, "tableName" | "tableCsv">
  >;
  raid?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryRaidArgs,
      | "avatarAddress"
      | "equipmentIds"
      | "costumeIds"
      | "foodIds"
      | "payNcg"
      | "runeSlotInfos"
    >
  >;
  claimRaidReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryClaimRaidRewardArgs, "avatarAddress">
  >;
  claimWorldBossKillReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryClaimWorldBossKillRewardArgs, "avatarAddress">
  >;
  prepareRewardAssets?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryPrepareRewardAssetsArgs,
      "rewardPoolAddress" | "assets"
    >
  >;
  transferAssets?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryTransferAssetsArgs, "sender" | "recipients">
  >;
  activateAccount?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryActivateAccountArgs, "activationCode">
  >;
  createAvatar?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryCreateAvatarArgs,
      "index" | "name" | "hair" | "lens" | "ear" | "tail"
    >
  >;
  runeEnhancement?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryRuneEnhancementArgs, "avatarAddress" | "runeId">
  >;
  hackAndSlash?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryHackAndSlashArgs,
      "avatarAddress" | "worldId" | "stageId" | "runeSlotInfos"
    >
  >;
  hackAndSlashSweep?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryHackAndSlashSweepArgs,
      "avatarAddress" | "worldId" | "stageId" | "runeSlotInfos" | "actionPoint"
    >
  >;
  dailyReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryDailyRewardArgs, "avatarAddress">
  >;
  combinationEquipment?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryCombinationEquipmentArgs,
      "avatarAddress" | "slotIndex" | "recipeId"
    >
  >;
  itemEnhancement?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryItemEnhancementArgs,
      "avatarAddress" | "slotIndex" | "itemId" | "materialIds"
    >
  >;
  rapidCombination?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryRapidCombinationArgs,
      "avatarAddress" | "slotIndex"
    >
  >;
  combinationConsumable?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryCombinationConsumableArgs,
      "avatarAddress" | "slotIndex" | "recipeId"
    >
  >;
  requestPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryRequestPledgeArgs, "agentAddress" | "mead">
  >;
  approvePledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryApprovePledgeArgs, "patronAddress">
  >;
  endPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryEndPledgeArgs, "agentAddress">
  >;
  createPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionQueryCreatePledgeArgs,
      "patronAddress" | "agentAddresses" | "mead"
    >
  >;
  loadIntoMyGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryLoadIntoMyGaragesArgs, never>
  >;
  deliverToOthersGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryDeliverToOthersGaragesArgs, "recipientAgentAddr">
  >;
  unloadFromMyGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionQueryUnloadFromMyGaragesArgs, "recipientAvatarAddr">
  >;
  craftQuery?: Resolver<ResolversTypes["CraftQuery"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CraftQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CraftQuery"] = ResolversParentTypes["CraftQuery"],
> = {
  eventConsumableItemCrafts?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      CraftQueryEventConsumableItemCraftsArgs,
      | "avatarAddress"
      | "eventScheduleId"
      | "eventConsumableItemRecipeId"
      | "slotIndex"
    >
  >;
  eventMaterialItemCrafts?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      CraftQueryEventMaterialItemCraftsArgs,
      | "avatarAddress"
      | "eventScheduleId"
      | "eventMaterialItemRecipeId"
      | "materialsToUse"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionTxQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ActionTxQuery"] = ResolversParentTypes["ActionTxQuery"],
> = {
  stake?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryStakeArgs, never>
  >;
  claimStakeReward?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryClaimStakeRewardArgs, never>
  >;
  migrateMonsterCollection?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryMigrateMonsterCollectionArgs, never>
  >;
  grinding?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryGrindingArgs, "avatarAddress" | "equipmentIds">
  >;
  unlockEquipmentRecipe?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryUnlockEquipmentRecipeArgs,
      "avatarAddress" | "recipeIds"
    >
  >;
  unlockWorld?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryUnlockWorldArgs, "avatarAddress" | "worldIds">
  >;
  transferAsset?: Resolver<
    Maybe<ResolversTypes["ByteString"]>,
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryTransferAssetArgs,
      "sender" | "recipient" | "amount" | "currency"
    >
  >;
  patchTableSheet?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryPatchTableSheetArgs, "tableName" | "tableCsv">
  >;
  raid?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryRaidArgs,
      | "avatarAddress"
      | "equipmentIds"
      | "costumeIds"
      | "foodIds"
      | "payNcg"
      | "runeSlotInfos"
    >
  >;
  claimRaidReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryClaimRaidRewardArgs, "avatarAddress">
  >;
  claimWorldBossKillReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryClaimWorldBossKillRewardArgs, "avatarAddress">
  >;
  prepareRewardAssets?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryPrepareRewardAssetsArgs,
      "rewardPoolAddress" | "assets"
    >
  >;
  transferAssets?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryTransferAssetsArgs, "sender" | "recipients">
  >;
  activateAccount?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryActivateAccountArgs, "activationCode">
  >;
  createAvatar?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryCreateAvatarArgs,
      "index" | "name" | "hair" | "lens" | "ear" | "tail"
    >
  >;
  runeEnhancement?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryRuneEnhancementArgs, "avatarAddress" | "runeId">
  >;
  hackAndSlash?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryHackAndSlashArgs,
      "avatarAddress" | "worldId" | "stageId" | "runeSlotInfos"
    >
  >;
  hackAndSlashSweep?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryHackAndSlashSweepArgs,
      "avatarAddress" | "worldId" | "stageId" | "runeSlotInfos" | "actionPoint"
    >
  >;
  dailyReward?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryDailyRewardArgs, "avatarAddress">
  >;
  combinationEquipment?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryCombinationEquipmentArgs,
      "avatarAddress" | "slotIndex" | "recipeId"
    >
  >;
  itemEnhancement?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryItemEnhancementArgs,
      "avatarAddress" | "slotIndex" | "itemId" | "materialIds"
    >
  >;
  rapidCombination?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryRapidCombinationArgs,
      "avatarAddress" | "slotIndex"
    >
  >;
  combinationConsumable?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryCombinationConsumableArgs,
      "avatarAddress" | "slotIndex" | "recipeId"
    >
  >;
  requestPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryRequestPledgeArgs, "agentAddress" | "mead">
  >;
  approvePledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryApprovePledgeArgs, "patronAddress">
  >;
  endPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryEndPledgeArgs, "agentAddress">
  >;
  createPledge?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<
      ActionTxQueryCreatePledgeArgs,
      "patronAddress" | "agentAddresses" | "mead"
    >
  >;
  loadIntoMyGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryLoadIntoMyGaragesArgs, never>
  >;
  deliverToOthersGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryDeliverToOthersGaragesArgs, "recipientAgentAddr">
  >;
  unloadFromMyGarages?: Resolver<
    ResolversTypes["ByteString"],
    ParentType,
    ContextType,
    RequireFields<ActionTxQueryUnloadFromMyGaragesArgs, "recipientAvatarAddr">
  >;
  craftQuery?: Resolver<ResolversTypes["CraftQuery"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressQueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AddressQuery"] = ResolversParentTypes["AddressQuery"],
> = {
  raiderAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType,
    RequireFields<AddressQueryRaiderAddressArgs, "avatarAddress" | "raidId">
  >;
  worldBossAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType,
    RequireFields<AddressQueryWorldBossAddressArgs, "raidId">
  >;
  worldBossKillRewardRecordAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType,
    RequireFields<
      AddressQueryWorldBossKillRewardRecordAddressArgs,
      "avatarAddress" | "raidId"
    >
  >;
  raiderListAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType,
    RequireFields<AddressQueryRaiderListAddressArgs, "raidId">
  >;
  currencyMintersAddress?: Resolver<
    Maybe<Array<ResolversTypes["Address"]>>,
    ParentType,
    ContextType,
    RequireFields<AddressQueryCurrencyMintersAddressArgs, "currency">
  >;
  pledgeAddress?: Resolver<
    ResolversTypes["Address"],
    ParentType,
    ContextType,
    RequireFields<AddressQueryPledgeAddressArgs, "agentAddress">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandaloneMutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StandaloneMutation"] = ResolversParentTypes["StandaloneMutation"],
> = {
  keyStore?: Resolver<
    Maybe<ResolversTypes["KeyStoreMutation"]>,
    ParentType,
    ContextType
  >;
  activationStatus?: Resolver<
    Maybe<ResolversTypes["ActivationStatusMutation"]>,
    ParentType,
    ContextType
  >;
  action?: Resolver<
    Maybe<ResolversTypes["ActionMutation"]>,
    ParentType,
    ContextType
  >;
  stageTx?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<StandaloneMutationStageTxArgs, "payload">
  >;
  stageTxV2?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<StandaloneMutationStageTxV2Args, "payload">
  >;
  transfer?: Resolver<
    Maybe<ResolversTypes["TxId"]>,
    ParentType,
    ContextType,
    RequireFields<
      StandaloneMutationTransferArgs,
      "recipient" | "amount" | "txNonce" | "currencyAddress"
    >
  >;
  transferGold?: Resolver<
    Maybe<ResolversTypes["TxId"]>,
    ParentType,
    ContextType,
    RequireFields<StandaloneMutationTransferGoldArgs, "recipient" | "amount">
  >;
  stageTransaction?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<StandaloneMutationStageTransactionArgs, "payload">
  >;
};

export type KeyStoreMutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["KeyStoreMutation"] = ResolversParentTypes["KeyStoreMutation"],
> = {
  createPrivateKey?: Resolver<
    ResolversTypes["PrivateKeyType"],
    ParentType,
    ContextType,
    RequireFields<KeyStoreMutationCreatePrivateKeyArgs, "passphrase">
  >;
  revokePrivateKey?: Resolver<
    ResolversTypes["ProtectedPrivateKeyType"],
    ParentType,
    ContextType,
    RequireFields<KeyStoreMutationRevokePrivateKeyArgs, "address">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivationStatusMutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ActivationStatusMutation"] = ResolversParentTypes["ActivationStatusMutation"],
> = {
  activateAccount?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<
      ActivationStatusMutationActivateAccountArgs,
      "encodedActivationKey"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionMutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ActionMutation"] = ResolversParentTypes["ActionMutation"],
> = {
  createAvatar?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationCreateAvatarArgs,
      | "avatarName"
      | "avatarIndex"
      | "hairIndex"
      | "lensIndex"
      | "earIndex"
      | "tailIndex"
    >
  >;
  hackAndSlash?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationHackAndSlashArgs,
      "avatarAddress" | "worldId" | "stageId" | "runeSlotInfos"
    >
  >;
  combinationEquipment?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationCombinationEquipmentArgs,
      "avatarAddress" | "recipeId" | "slotIndex"
    >
  >;
  itemEnhancement?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationItemEnhancementArgs,
      "avatarAddress" | "itemId" | "materialIds" | "slotIndex"
    >
  >;
  dailyReward?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<ActionMutationDailyRewardArgs, "avatarAddress">
  >;
  chargeActionPoint?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<ActionMutationChargeActionPointArgs, "avatarAddress">
  >;
  combinationConsumable?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationCombinationConsumableArgs,
      "avatarAddress" | "recipeId" | "slotIndex"
    >
  >;
  monsterCollect?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<ActionMutationMonsterCollectArgs, "level">
  >;
  claimMonsterCollectionReward?: Resolver<
    ResolversTypes["TxId"],
    ParentType,
    ContextType,
    RequireFields<
      ActionMutationClaimMonsterCollectionRewardArgs,
      "avatarAddress"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandaloneSubscriptionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["StandaloneSubscription"] = ResolversParentTypes["StandaloneSubscription"],
> = {
  tipChanged?: SubscriptionResolver<
    Maybe<ResolversTypes["TipChanged"]>,
    "tipChanged",
    ParentType,
    ContextType
  >;
  tx?: SubscriptionResolver<
    Maybe<ResolversTypes["TxType"]>,
    "tx",
    ParentType,
    ContextType,
    RequireFields<StandaloneSubscriptionTxArgs, "actionType">
  >;
  preloadProgress?: SubscriptionResolver<
    Maybe<ResolversTypes["PreloadStateType"]>,
    "preloadProgress",
    ParentType,
    ContextType
  >;
  nodeStatus?: SubscriptionResolver<
    Maybe<ResolversTypes["NodeStatusType"]>,
    "nodeStatus",
    ParentType,
    ContextType
  >;
  differentAppProtocolVersionEncounter?: SubscriptionResolver<
    ResolversTypes["DifferentAppProtocolVersionEncounterType"],
    "differentAppProtocolVersionEncounter",
    ParentType,
    ContextType
  >;
  notification?: SubscriptionResolver<
    ResolversTypes["NotificationType"],
    "notification",
    ParentType,
    ContextType
  >;
  nodeException?: SubscriptionResolver<
    ResolversTypes["NodeExceptionType"],
    "nodeException",
    ParentType,
    ContextType
  >;
  balanceByAgent?: SubscriptionResolver<
    ResolversTypes["String"],
    "balanceByAgent",
    ParentType,
    ContextType,
    RequireFields<StandaloneSubscriptionBalanceByAgentArgs, "address">
  >;
};

export type TipChangedResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TipChanged"] = ResolversParentTypes["TipChanged"],
> = {
  index?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes["ByteString"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TxTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TxType"] = ResolversParentTypes["TxType"],
> = {
  transaction?: Resolver<
    ResolversTypes["TransactionType"],
    ParentType,
    ContextType
  >;
  txResult?: Resolver<
    Maybe<ResolversTypes["TxResultType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreloadStateTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PreloadStateType"] = ResolversParentTypes["PreloadStateType"],
> = {
  currentPhase?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  totalPhase?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  extra?: Resolver<
    ResolversTypes["PreloadStateExtraType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreloadStateExtraTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PreloadStateExtraType"] = ResolversParentTypes["PreloadStateExtraType"],
> = {
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  currentCount?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DifferentAppProtocolVersionEncounterTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["DifferentAppProtocolVersionEncounterType"] = ResolversParentTypes["DifferentAppProtocolVersionEncounterType"],
> = {
  peer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  peerVersion?: Resolver<
    ResolversTypes["AppProtocolVersionType"],
    ParentType,
    ContextType
  >;
  localVersion?: Resolver<
    ResolversTypes["AppProtocolVersionType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["NotificationType"] = ResolversParentTypes["NotificationType"],
> = {
  type?: Resolver<ResolversTypes["NotificationEnum"], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeExceptionTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["NodeExceptionType"] = ResolversParentTypes["NodeExceptionType"],
> = {
  code?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  StandaloneQuery?: StandaloneQueryResolvers<ContextType>;
  StateQuery?: StateQueryResolvers<ContextType>;
  AvatarStateType?: AvatarStateTypeResolvers<ContextType>;
  Address?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  InventoryType?: InventoryTypeResolvers<ContextType>;
  ConsumableType?: ConsumableTypeResolvers<ContextType>;
  Guid?: GraphQLScalarType;
  MaterialType?: MaterialTypeResolvers<ContextType>;
  ByteString?: GraphQLScalarType;
  EquipmentType?: EquipmentTypeResolvers<ContextType>;
  DecimalStatType?: DecimalStatTypeResolvers<ContextType>;
  Decimal?: GraphQLScalarType;
  SkillType?: SkillTypeResolvers<ContextType>;
  StatsMapType?: StatsMapTypeResolvers<ContextType>;
  CostumeType?: CostumeTypeResolvers<ContextType>;
  InventoryItemType?: InventoryItemTypeResolvers<ContextType>;
  RuneStateType?: RuneStateTypeResolvers<ContextType>;
  CombinationSlotStateType?: CombinationSlotStateTypeResolvers<ContextType>;
  CollectionMapType?: CollectionMapTypeResolvers<ContextType>;
  QuestListType?: QuestListTypeResolvers<ContextType>;
  MailBoxType?: MailBoxTypeResolvers<ContextType>;
  MailType?: MailTypeResolvers<ContextType>;
  WorldInformationType?: WorldInformationTypeResolvers<ContextType>;
  WorldType?: WorldTypeResolvers<ContextType>;
  RankingMapStateType?: RankingMapStateTypeResolvers<ContextType>;
  RankingInfoType?: RankingInfoTypeResolvers<ContextType>;
  ShopStateType?: ShopStateTypeResolvers<ContextType>;
  ShopItemType?: ShopItemTypeResolvers<ContextType>;
  ItemUsableType?: ItemUsableTypeResolvers<ContextType>;
  ShardedShopStateV2Type?: ShardedShopStateV2TypeResolvers<ContextType>;
  OrderDigestType?: OrderDigestTypeResolvers<ContextType>;
  WeeklyArenaStateType?: WeeklyArenaStateTypeResolvers<ContextType>;
  ArenaInfoType?: ArenaInfoTypeResolvers<ContextType>;
  ArenaRecordType?: ArenaRecordTypeResolvers<ContextType>;
  ArenaInformationType?: ArenaInformationTypeResolvers<ContextType>;
  AgentStateType?: AgentStateTypeResolvers<ContextType>;
  MeadPledgeType?: MeadPledgeTypeResolvers<ContextType>;
  StakeStateType?: StakeStateTypeResolvers<ContextType>;
  StakeAchievementsType?: StakeAchievementsTypeResolvers<ContextType>;
  StakeRewardsType?: StakeRewardsTypeResolvers<ContextType>;
  StakeRegularRewardsType?: StakeRegularRewardsTypeResolvers<ContextType>;
  StakeRegularRewardInfoType?: StakeRegularRewardInfoTypeResolvers<ContextType>;
  StakeRegularFixedRewardInfoType?: StakeRegularFixedRewardInfoTypeResolvers<ContextType>;
  MonsterCollectionStateType?: MonsterCollectionStateTypeResolvers<ContextType>;
  MonsterCollectionSheetType?: MonsterCollectionSheetTypeResolvers<ContextType>;
  MonsterCollectionRowType?: MonsterCollectionRowTypeResolvers<ContextType>;
  MonsterCollectionRewardInfoType?: MonsterCollectionRewardInfoTypeResolvers<ContextType>;
  CrystalMonsterCollectionMultiplierSheetType?: CrystalMonsterCollectionMultiplierSheetTypeResolvers<ContextType>;
  CrystalMonsterCollectionMultiplierRowType?: CrystalMonsterCollectionMultiplierRowTypeResolvers<ContextType>;
  RaiderStateType?: RaiderStateTypeResolvers<ContextType>;
  WorldBossStateType?: WorldBossStateTypeResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  WorldBossKillRewardRecordType?: WorldBossKillRewardRecordTypeResolvers<ContextType>;
  WorldBossKillRewardRecordMapType?: WorldBossKillRewardRecordMapTypeResolvers<ContextType>;
  FungibleAssetValueWithCurrencyType?: FungibleAssetValueWithCurrencyTypeResolvers<ContextType>;
  CurrencyType?: CurrencyTypeResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  OrderDigestListStateType?: OrderDigestListStateTypeResolvers<ContextType>;
  GaragesType?: GaragesTypeResolvers<ContextType>;
  FungibleAssetValue?: FungibleAssetValueResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  FungibleItemGarageWithAddressType?: FungibleItemGarageWithAddressTypeResolvers<ContextType>;
  FungibleItemType?: FungibleItemTypeResolvers<ContextType>;
  TransferNCGHistoryType?: TransferNcgHistoryTypeResolvers<ContextType>;
  KeyStoreType?: KeyStoreTypeResolvers<ContextType>;
  ProtectedPrivateKeyType?: ProtectedPrivateKeyTypeResolvers<ContextType>;
  PrivateKeyType?: PrivateKeyTypeResolvers<ContextType>;
  PublicKeyType?: PublicKeyTypeResolvers<ContextType>;
  NodeStatusType?: NodeStatusTypeResolvers<ContextType>;
  BlockHeader?: BlockHeaderResolvers<ContextType>;
  TxId?: GraphQLScalarType;
  AppProtocolVersionType?: AppProtocolVersionTypeResolvers<ContextType>;
  ExplorerQuery?: ExplorerQueryResolvers<ContextType>;
  BlockQuery?: BlockQueryResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  PublicKey?: GraphQLScalarType;
  DateTimeOffset?: GraphQLScalarType;
  Transaction?: TransactionResolvers<ContextType>;
  Action?: ActionResolvers<ContextType>;
  BlockCommit?: BlockCommitResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  VoteFlag?: GraphQLScalarType;
  TransactionQuery?: TransactionQueryResolvers<ContextType>;
  TxResultType?: TxResultTypeResolvers<ContextType>;
  BencodexValue?: GraphQLScalarType;
  UpdatedStateType?: UpdatedStateTypeResolvers<ContextType>;
  FungibleAssetBalancesType?: FungibleAssetBalancesTypeResolvers<ContextType>;
  LibplanetStateQuery?: LibplanetStateQueryResolvers<ContextType>;
  Validator?: ValidatorResolvers<ContextType>;
  NodeState?: NodeStateResolvers<ContextType>;
  BoundPeer?: BoundPeerResolvers<ContextType>;
  ValidationQuery?: ValidationQueryResolvers<ContextType>;
  ActivationStatusQuery?: ActivationStatusQueryResolvers<ContextType>;
  PeerChainStateQuery?: PeerChainStateQueryResolvers<ContextType>;
  TransactionType?: TransactionTypeResolvers<ContextType>;
  MonsterCollectionStatusType?: MonsterCollectionStatusTypeResolvers<ContextType>;
  FungibleAssetValueType?: FungibleAssetValueTypeResolvers<ContextType>;
  TransactionHeadlessQuery?: TransactionHeadlessQueryResolvers<ContextType>;
  RpcInformationQuery?: RpcInformationQueryResolvers<ContextType>;
  ActionQuery?: ActionQueryResolvers<ContextType>;
  CraftQuery?: CraftQueryResolvers<ContextType>;
  ActionTxQuery?: ActionTxQueryResolvers<ContextType>;
  AddressQuery?: AddressQueryResolvers<ContextType>;
  StandaloneMutation?: StandaloneMutationResolvers<ContextType>;
  KeyStoreMutation?: KeyStoreMutationResolvers<ContextType>;
  ActivationStatusMutation?: ActivationStatusMutationResolvers<ContextType>;
  ActionMutation?: ActionMutationResolvers<ContextType>;
  StandaloneSubscription?: StandaloneSubscriptionResolvers<ContextType>;
  TipChanged?: TipChangedResolvers<ContextType>;
  TxType?: TxTypeResolvers<ContextType>;
  PreloadStateType?: PreloadStateTypeResolvers<ContextType>;
  PreloadStateExtraType?: PreloadStateExtraTypeResolvers<ContextType>;
  DifferentAppProtocolVersionEncounterType?: DifferentAppProtocolVersionEncounterTypeResolvers<ContextType>;
  NotificationType?: NotificationTypeResolvers<ContextType>;
  NodeExceptionType?: NodeExceptionTypeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const NodeStatusDocument = gql`
  query NodeStatus {
    nodeStatus {
      bootstrapEnded
      preloadEnded
    }
  }
`;

/**
 * __useNodeStatusQuery__
 *
 * To run a query within a React component, call `useNodeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useNodeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useNodeStatusQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    NodeStatusQuery,
    NodeStatusQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<NodeStatusQuery, NodeStatusQueryVariables>(
    NodeStatusDocument,
    baseOptions,
  );
}
export function useNodeStatusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    NodeStatusQuery,
    NodeStatusQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    NodeStatusQuery,
    NodeStatusQueryVariables
  >(NodeStatusDocument, baseOptions);
}
export type NodeStatusQueryHookResult = ReturnType<typeof useNodeStatusQuery>;
export type NodeStatusLazyQueryHookResult = ReturnType<
  typeof useNodeStatusLazyQuery
>;
export type NodeStatusQueryResult = ApolloReactCommon.QueryResult<
  NodeStatusQuery,
  NodeStatusQueryVariables
>;
export const TopmostBlocksDocument = gql`
  query TopmostBlocks(
    $limit: Int = 500
    $offset: Int = 50
    $miner: Address = null
  ) {
    nodeStatus {
      topmostBlocks(limit: $limit, offset: $offset, miner: $miner) {
        id
        hash
        index
        miner
      }
    }
  }
`;

/**
 * __useTopmostBlocksQuery__
 *
 * To run a query within a React component, call `useTopmostBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopmostBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopmostBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      miner: // value for 'miner'
 *   },
 * });
 */
export function useTopmostBlocksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TopmostBlocksQuery,
    TopmostBlocksQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    TopmostBlocksQuery,
    TopmostBlocksQueryVariables
  >(TopmostBlocksDocument, baseOptions);
}
export function useTopmostBlocksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TopmostBlocksQuery,
    TopmostBlocksQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    TopmostBlocksQuery,
    TopmostBlocksQueryVariables
  >(TopmostBlocksDocument, baseOptions);
}
export type TopmostBlocksQueryHookResult = ReturnType<
  typeof useTopmostBlocksQuery
>;
export type TopmostBlocksLazyQueryHookResult = ReturnType<
  typeof useTopmostBlocksLazyQuery
>;
export type TopmostBlocksQueryResult = ApolloReactCommon.QueryResult<
  TopmostBlocksQuery,
  TopmostBlocksQueryVariables
>;
export const PreloadProgressSubscriptionDocument = gql`
  subscription PreloadProgressSubscription {
    preloadProgress {
      currentPhase
      totalPhase
      extra {
        type
        currentCount
        totalCount
      }
    }
  }
`;

/**
 * __usePreloadProgressSubscriptionSubscription__
 *
 * To run a query within a React component, call `usePreloadProgressSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePreloadProgressSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreloadProgressSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePreloadProgressSubscriptionSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    PreloadProgressSubscriptionSubscription,
    PreloadProgressSubscriptionSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    PreloadProgressSubscriptionSubscription,
    PreloadProgressSubscriptionSubscriptionVariables
  >(PreloadProgressSubscriptionDocument, baseOptions);
}
export type PreloadProgressSubscriptionSubscriptionHookResult = ReturnType<
  typeof usePreloadProgressSubscriptionSubscription
>;
export type PreloadProgressSubscriptionSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<PreloadProgressSubscriptionSubscription>;
export const NodeStatusSubscriptionDocument = gql`
  subscription NodeStatusSubscription {
    nodeStatus {
      bootstrapEnded
      preloadEnded
    }
  }
`;

/**
 * __useNodeStatusSubscriptionSubscription__
 *
 * To run a query within a React component, call `useNodeStatusSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNodeStatusSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeStatusSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNodeStatusSubscriptionSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    NodeStatusSubscriptionSubscription,
    NodeStatusSubscriptionSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    NodeStatusSubscriptionSubscription,
    NodeStatusSubscriptionSubscriptionVariables
  >(NodeStatusSubscriptionDocument, baseOptions);
}
export type NodeStatusSubscriptionSubscriptionHookResult = ReturnType<
  typeof useNodeStatusSubscriptionSubscription
>;
export type NodeStatusSubscriptionSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<NodeStatusSubscriptionSubscription>;
export const NodeExceptionDocument = gql`
  subscription NodeException {
    nodeException {
      code
      message
    }
  }
`;

/**
 * __useNodeExceptionSubscription__
 *
 * To run a query within a React component, call `useNodeExceptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNodeExceptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeExceptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNodeExceptionSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    NodeExceptionSubscription,
    NodeExceptionSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    NodeExceptionSubscription,
    NodeExceptionSubscriptionVariables
  >(NodeExceptionDocument, baseOptions);
}
export type NodeExceptionSubscriptionHookResult = ReturnType<
  typeof useNodeExceptionSubscription
>;
export type NodeExceptionSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<NodeExceptionSubscription>;
export const GetNcgBalanceDocument = gql`
  query GetNCGBalance($address: Address!) {
    goldBalance(address: $address)
  }
`;

/**
 * __useGetNcgBalanceQuery__
 *
 * To run a query within a React component, call `useGetNcgBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNcgBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNcgBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetNcgBalanceQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetNcgBalanceQuery,
    GetNcgBalanceQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetNcgBalanceQuery,
    GetNcgBalanceQueryVariables
  >(GetNcgBalanceDocument, baseOptions);
}
export function useGetNcgBalanceLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetNcgBalanceQuery,
    GetNcgBalanceQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetNcgBalanceQuery,
    GetNcgBalanceQueryVariables
  >(GetNcgBalanceDocument, baseOptions);
}
export type GetNcgBalanceQueryHookResult = ReturnType<
  typeof useGetNcgBalanceQuery
>;
export type GetNcgBalanceLazyQueryHookResult = ReturnType<
  typeof useGetNcgBalanceLazyQuery
>;
export type GetNcgBalanceQueryResult = ApolloReactCommon.QueryResult<
  GetNcgBalanceQuery,
  GetNcgBalanceQueryVariables
>;
export const TransactionResultDocument = gql`
  query TransactionResult($txId: TxId!) {
    transaction {
      transactionResult(txId: $txId) {
        blockHash
        blockIndex
        txStatus
      }
    }
  }
`;

/**
 * __useTransactionResultQuery__
 *
 * To run a query within a React component, call `useTransactionResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionResultQuery({
 *   variables: {
 *      txId: // value for 'txId'
 *   },
 * });
 */
export function useTransactionResultQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TransactionResultQuery,
    TransactionResultQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    TransactionResultQuery,
    TransactionResultQueryVariables
  >(TransactionResultDocument, baseOptions);
}
export function useTransactionResultLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TransactionResultQuery,
    TransactionResultQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    TransactionResultQuery,
    TransactionResultQueryVariables
  >(TransactionResultDocument, baseOptions);
}
export type TransactionResultQueryHookResult = ReturnType<
  typeof useTransactionResultQuery
>;
export type TransactionResultLazyQueryHookResult = ReturnType<
  typeof useTransactionResultLazyQuery
>;
export type TransactionResultQueryResult = ApolloReactCommon.QueryResult<
  TransactionResultQuery,
  TransactionResultQueryVariables
>;
export const NodeAppProtocolVersionDocument = gql`
  query NodeAppProtocolVersion {
    nodeStatus {
      appProtocolVersion {
        version
        signer
        signature
        extra
      }
    }
  }
`;

/**
 * __useNodeAppProtocolVersionQuery__
 *
 * To run a query within a React component, call `useNodeAppProtocolVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useNodeAppProtocolVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeAppProtocolVersionQuery({
 *   variables: {
 *   },
 * });
 */
export function useNodeAppProtocolVersionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    NodeAppProtocolVersionQuery,
    NodeAppProtocolVersionQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    NodeAppProtocolVersionQuery,
    NodeAppProtocolVersionQueryVariables
  >(NodeAppProtocolVersionDocument, baseOptions);
}
export function useNodeAppProtocolVersionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    NodeAppProtocolVersionQuery,
    NodeAppProtocolVersionQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    NodeAppProtocolVersionQuery,
    NodeAppProtocolVersionQueryVariables
  >(NodeAppProtocolVersionDocument, baseOptions);
}
export type NodeAppProtocolVersionQueryHookResult = ReturnType<
  typeof useNodeAppProtocolVersionQuery
>;
export type NodeAppProtocolVersionLazyQueryHookResult = ReturnType<
  typeof useNodeAppProtocolVersionLazyQuery
>;
export type NodeAppProtocolVersionQueryResult = ApolloReactCommon.QueryResult<
  NodeAppProtocolVersionQuery,
  NodeAppProtocolVersionQueryVariables
>;
export const DifferentAppProtocolVersionEncounterDocument = gql`
  subscription DifferentAppProtocolVersionEncounter {
    differentAppProtocolVersionEncounter {
      peer
      peerVersion {
        version
        extra
      }
      localVersion {
        version
        extra
      }
    }
  }
`;

/**
 * __useDifferentAppProtocolVersionEncounterSubscription__
 *
 * To run a query within a React component, call `useDifferentAppProtocolVersionEncounterSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDifferentAppProtocolVersionEncounterSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDifferentAppProtocolVersionEncounterSubscription({
 *   variables: {
 *   },
 * });
 */
export function useDifferentAppProtocolVersionEncounterSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    DifferentAppProtocolVersionEncounterSubscription,
    DifferentAppProtocolVersionEncounterSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    DifferentAppProtocolVersionEncounterSubscription,
    DifferentAppProtocolVersionEncounterSubscriptionVariables
  >(DifferentAppProtocolVersionEncounterDocument, baseOptions);
}
export type DifferentAppProtocolVersionEncounterSubscriptionHookResult =
  ReturnType<typeof useDifferentAppProtocolVersionEncounterSubscription>;
export type DifferentAppProtocolVersionEncounterSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<DifferentAppProtocolVersionEncounterSubscription>;
export const NotificationDocument = gql`
  subscription Notification {
    notification {
      type
      message
    }
  }
`;

/**
 * __useNotificationSubscription__
 *
 * To run a query within a React component, call `useNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNotificationSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    NotificationSubscription,
    NotificationSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    NotificationSubscription,
    NotificationSubscriptionVariables
  >(NotificationDocument, baseOptions);
}
export type NotificationSubscriptionHookResult = ReturnType<
  typeof useNotificationSubscription
>;
export type NotificationSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<NotificationSubscription>;
export const ValidateSnapshotDocument = gql`
  query ValidateSnapshot($raw: String!) {
    validation {
      metadata(raw: $raw)
    }
  }
`;

/**
 * __useValidateSnapshotQuery__
 *
 * To run a query within a React component, call `useValidateSnapshotQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateSnapshotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateSnapshotQuery({
 *   variables: {
 *      raw: // value for 'raw'
 *   },
 * });
 */
export function useValidateSnapshotQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ValidateSnapshotQuery,
    ValidateSnapshotQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ValidateSnapshotQuery,
    ValidateSnapshotQueryVariables
  >(ValidateSnapshotDocument, baseOptions);
}
export function useValidateSnapshotLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ValidateSnapshotQuery,
    ValidateSnapshotQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ValidateSnapshotQuery,
    ValidateSnapshotQueryVariables
  >(ValidateSnapshotDocument, baseOptions);
}
export type ValidateSnapshotQueryHookResult = ReturnType<
  typeof useValidateSnapshotQuery
>;
export type ValidateSnapshotLazyQueryHookResult = ReturnType<
  typeof useValidateSnapshotLazyQuery
>;
export type ValidateSnapshotQueryResult = ApolloReactCommon.QueryResult<
  ValidateSnapshotQuery,
  ValidateSnapshotQueryVariables
>;
export const CollectionSheetDocument = gql`
  query CollectionSheet {
    stateQuery {
      monsterCollectionSheet {
        orderedList {
          level
          requiredGold
          rewards {
            itemId
            quantity
          }
        }
      }
    }
  }
`;

/**
 * __useCollectionSheetQuery__
 *
 * To run a query within a React component, call `useCollectionSheetQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionSheetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionSheetQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionSheetQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CollectionSheetQuery,
    CollectionSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CollectionSheetQuery,
    CollectionSheetQueryVariables
  >(CollectionSheetDocument, baseOptions);
}
export function useCollectionSheetLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CollectionSheetQuery,
    CollectionSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CollectionSheetQuery,
    CollectionSheetQueryVariables
  >(CollectionSheetDocument, baseOptions);
}
export type CollectionSheetQueryHookResult = ReturnType<
  typeof useCollectionSheetQuery
>;
export type CollectionSheetLazyQueryHookResult = ReturnType<
  typeof useCollectionSheetLazyQuery
>;
export type CollectionSheetQueryResult = ApolloReactCommon.QueryResult<
  CollectionSheetQuery,
  CollectionSheetQueryVariables
>;
export const GetAvatarAddressDocument = gql`
  query GetAvatarAddress($address: Address!) {
    stateQuery {
      agent(address: $address) {
        avatarStates {
          address
          name
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useGetAvatarAddressQuery__
 *
 * To run a query within a React component, call `useGetAvatarAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvatarAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvatarAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetAvatarAddressQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAvatarAddressQuery,
    GetAvatarAddressQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetAvatarAddressQuery,
    GetAvatarAddressQueryVariables
  >(GetAvatarAddressDocument, baseOptions);
}
export function useGetAvatarAddressLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAvatarAddressQuery,
    GetAvatarAddressQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetAvatarAddressQuery,
    GetAvatarAddressQueryVariables
  >(GetAvatarAddressDocument, baseOptions);
}
export type GetAvatarAddressQueryHookResult = ReturnType<
  typeof useGetAvatarAddressQuery
>;
export type GetAvatarAddressLazyQueryHookResult = ReturnType<
  typeof useGetAvatarAddressLazyQuery
>;
export type GetAvatarAddressQueryResult = ApolloReactCommon.QueryResult<
  GetAvatarAddressQuery,
  GetAvatarAddressQueryVariables
>;
export const CollectionSheetWithStateDocument = gql`
  query CollectionSheetWithState($address: Address!) {
    stateQuery {
      monsterCollectionSheet {
        orderedList {
          level
          requiredGold
          rewards {
            itemId
            quantity
          }
        }
      }
      agent(address: $address) {
        gold
      }
      monsterCollectionState(agentAddress: $address) {
        level
      }
    }
  }
`;

/**
 * __useCollectionSheetWithStateQuery__
 *
 * To run a query within a React component, call `useCollectionSheetWithStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionSheetWithStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionSheetWithStateQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCollectionSheetWithStateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CollectionSheetWithStateQuery,
    CollectionSheetWithStateQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CollectionSheetWithStateQuery,
    CollectionSheetWithStateQueryVariables
  >(CollectionSheetWithStateDocument, baseOptions);
}
export function useCollectionSheetWithStateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CollectionSheetWithStateQuery,
    CollectionSheetWithStateQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CollectionSheetWithStateQuery,
    CollectionSheetWithStateQueryVariables
  >(CollectionSheetWithStateDocument, baseOptions);
}
export type CollectionSheetWithStateQueryHookResult = ReturnType<
  typeof useCollectionSheetWithStateQuery
>;
export type CollectionSheetWithStateLazyQueryHookResult = ReturnType<
  typeof useCollectionSheetWithStateLazyQuery
>;
export type CollectionSheetWithStateQueryResult = ApolloReactCommon.QueryResult<
  CollectionSheetWithStateQuery,
  CollectionSheetWithStateQueryVariables
>;
export const MinerAddressDocument = gql`
  query MinerAddress {
    minerAddress
  }
`;

/**
 * __useMinerAddressQuery__
 *
 * To run a query within a React component, call `useMinerAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMinerAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMinerAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useMinerAddressQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MinerAddressQuery,
    MinerAddressQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    MinerAddressQuery,
    MinerAddressQueryVariables
  >(MinerAddressDocument, baseOptions);
}
export function useMinerAddressLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MinerAddressQuery,
    MinerAddressQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    MinerAddressQuery,
    MinerAddressQueryVariables
  >(MinerAddressDocument, baseOptions);
}
export type MinerAddressQueryHookResult = ReturnType<
  typeof useMinerAddressQuery
>;
export type MinerAddressLazyQueryHookResult = ReturnType<
  typeof useMinerAddressLazyQuery
>;
export type MinerAddressQueryResult = ApolloReactCommon.QueryResult<
  MinerAddressQuery,
  MinerAddressQueryVariables
>;
export const GetTipDocument = gql`
  query GetTip {
    nodeStatus {
      tip {
        index
      }
    }
  }
`;

/**
 * __useGetTipQuery__
 *
 * To run a query within a React component, call `useGetTipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTipQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTipQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetTipQuery,
    GetTipQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GetTipQuery, GetTipQueryVariables>(
    GetTipDocument,
    baseOptions,
  );
}
export function useGetTipLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetTipQuery,
    GetTipQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetTipQuery, GetTipQueryVariables>(
    GetTipDocument,
    baseOptions,
  );
}
export type GetTipQueryHookResult = ReturnType<typeof useGetTipQuery>;
export type GetTipLazyQueryHookResult = ReturnType<typeof useGetTipLazyQuery>;
export type GetTipQueryResult = ApolloReactCommon.QueryResult<
  GetTipQuery,
  GetTipQueryVariables
>;
export const GetNextTxNonceDocument = gql`
  query GetNextTxNonce($address: Address!) {
    transaction {
      nextTxNonce(address: $address)
    }
  }
`;

/**
 * __useGetNextTxNonceQuery__
 *
 * To run a query within a React component, call `useGetNextTxNonceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextTxNonceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextTxNonceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetNextTxNonceQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetNextTxNonceQuery,
    GetNextTxNonceQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetNextTxNonceQuery,
    GetNextTxNonceQueryVariables
  >(GetNextTxNonceDocument, baseOptions);
}
export function useGetNextTxNonceLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetNextTxNonceQuery,
    GetNextTxNonceQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetNextTxNonceQuery,
    GetNextTxNonceQueryVariables
  >(GetNextTxNonceDocument, baseOptions);
}
export type GetNextTxNonceQueryHookResult = ReturnType<
  typeof useGetNextTxNonceQuery
>;
export type GetNextTxNonceLazyQueryHookResult = ReturnType<
  typeof useGetNextTxNonceLazyQuery
>;
export type GetNextTxNonceQueryResult = ApolloReactCommon.QueryResult<
  GetNextTxNonceQuery,
  GetNextTxNonceQueryVariables
>;
export const StateQueryMonsterCollectionDocument = gql`
  query StateQueryMonsterCollection($agentAddress: Address!) {
    stateQuery {
      agent(address: $agentAddress) {
        gold
      }
      monsterCollectionState(agentAddress: $agentAddress) {
        expiredBlockIndex
        level
        rewardLevel
        receivedBlockIndex
        startedBlockIndex
        claimableBlockIndex
      }
    }
  }
`;

/**
 * __useStateQueryMonsterCollectionQuery__
 *
 * To run a query within a React component, call `useStateQueryMonsterCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useStateQueryMonsterCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStateQueryMonsterCollectionQuery({
 *   variables: {
 *      agentAddress: // value for 'agentAddress'
 *   },
 * });
 */
export function useStateQueryMonsterCollectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StateQueryMonsterCollectionQuery,
    StateQueryMonsterCollectionQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    StateQueryMonsterCollectionQuery,
    StateQueryMonsterCollectionQueryVariables
  >(StateQueryMonsterCollectionDocument, baseOptions);
}
export function useStateQueryMonsterCollectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StateQueryMonsterCollectionQuery,
    StateQueryMonsterCollectionQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    StateQueryMonsterCollectionQuery,
    StateQueryMonsterCollectionQueryVariables
  >(StateQueryMonsterCollectionDocument, baseOptions);
}
export type StateQueryMonsterCollectionQueryHookResult = ReturnType<
  typeof useStateQueryMonsterCollectionQuery
>;
export type StateQueryMonsterCollectionLazyQueryHookResult = ReturnType<
  typeof useStateQueryMonsterCollectionLazyQuery
>;
export type StateQueryMonsterCollectionQueryResult =
  ApolloReactCommon.QueryResult<
    StateQueryMonsterCollectionQuery,
    StateQueryMonsterCollectionQueryVariables
  >;
export const CollectDocument = gql`
  mutation Collect($level: Int!) {
    action {
      monsterCollect(level: $level)
    }
  }
`;
export type CollectMutationFn = ApolloReactCommon.MutationFunction<
  CollectMutation,
  CollectMutationVariables
>;

/**
 * __useCollectMutation__
 *
 * To run a mutation, you first call `useCollectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectMutation, { data, loading, error }] = useCollectMutation({
 *   variables: {
 *      level: // value for 'level'
 *   },
 * });
 */
export function useCollectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CollectMutation,
    CollectMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CollectMutation,
    CollectMutationVariables
  >(CollectDocument, baseOptions);
}
export type CollectMutationHookResult = ReturnType<typeof useCollectMutation>;
export type CollectMutationResult =
  ApolloReactCommon.MutationResult<CollectMutation>;
export type CollectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CollectMutation,
  CollectMutationVariables
>;
export const ClaimCollectionRewardDocument = gql`
  mutation ClaimCollectionReward($address: Address!) {
    action {
      claimMonsterCollectionReward(avatarAddress: $address)
    }
  }
`;
export type ClaimCollectionRewardMutationFn =
  ApolloReactCommon.MutationFunction<
    ClaimCollectionRewardMutation,
    ClaimCollectionRewardMutationVariables
  >;

/**
 * __useClaimCollectionRewardMutation__
 *
 * To run a mutation, you first call `useClaimCollectionRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimCollectionRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimCollectionRewardMutation, { data, loading, error }] = useClaimCollectionRewardMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useClaimCollectionRewardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ClaimCollectionRewardMutation,
    ClaimCollectionRewardMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ClaimCollectionRewardMutation,
    ClaimCollectionRewardMutationVariables
  >(ClaimCollectionRewardDocument, baseOptions);
}
export type ClaimCollectionRewardMutationHookResult = ReturnType<
  typeof useClaimCollectionRewardMutation
>;
export type ClaimCollectionRewardMutationResult =
  ApolloReactCommon.MutationResult<ClaimCollectionRewardMutation>;
export type ClaimCollectionRewardMutationOptions =
  ApolloReactCommon.BaseMutationOptions<
    ClaimCollectionRewardMutation,
    ClaimCollectionRewardMutationVariables
  >;
export const TransferDocument = gql`
  mutation Transfer(
    $recipient: Address!
    $amount: String!
    $txNonce: Long!
    $memo: String!
  ) {
    transfer(
      recipient: $recipient
      amount: $amount
      txNonce: $txNonce
      memo: $memo
    )
  }
`;
export type TransferMutationFn = ApolloReactCommon.MutationFunction<
  TransferMutation,
  TransferMutationVariables
>;

/**
 * __useTransferMutation__
 *
 * To run a mutation, you first call `useTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transferMutation, { data, loading, error }] = useTransferMutation({
 *   variables: {
 *      recipient: // value for 'recipient'
 *      amount: // value for 'amount'
 *      txNonce: // value for 'txNonce'
 *      memo: // value for 'memo'
 *   },
 * });
 */
export function useTransferMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    TransferMutation,
    TransferMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    TransferMutation,
    TransferMutationVariables
  >(TransferDocument, baseOptions);
}
export type TransferMutationHookResult = ReturnType<typeof useTransferMutation>;
export type TransferMutationResult =
  ApolloReactCommon.MutationResult<TransferMutation>;
export type TransferMutationOptions = ApolloReactCommon.BaseMutationOptions<
  TransferMutation,
  TransferMutationVariables
>;
export const StagedTxDocument = gql`
  query StagedTx($address: Address!) {
    nodeStatus {
      stagedTxIds(address: $address)
    }
  }
`;

/**
 * __useStagedTxQuery__
 *
 * To run a query within a React component, call `useStagedTxQuery` and pass it any options that fit your needs.
 * When your component renders, `useStagedTxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStagedTxQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useStagedTxQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StagedTxQuery,
    StagedTxQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<StagedTxQuery, StagedTxQueryVariables>(
    StagedTxDocument,
    baseOptions,
  );
}
export function useStagedTxLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StagedTxQuery,
    StagedTxQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<StagedTxQuery, StagedTxQueryVariables>(
    StagedTxDocument,
    baseOptions,
  );
}
export type StagedTxQueryHookResult = ReturnType<typeof useStagedTxQuery>;
export type StagedTxLazyQueryHookResult = ReturnType<
  typeof useStagedTxLazyQuery
>;
export type StagedTxQueryResult = ApolloReactCommon.QueryResult<
  StagedTxQuery,
  StagedTxQueryVariables
>;
export const StageTxDocument = gql`
  mutation StageTx($encodedTx: String!) {
    stageTx(payload: $encodedTx)
  }
`;
export type StageTxMutationFn = ApolloReactCommon.MutationFunction<
  StageTxMutation,
  StageTxMutationVariables
>;

/**
 * __useStageTxMutation__
 *
 * To run a mutation, you first call `useStageTxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStageTxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stageTxMutation, { data, loading, error }] = useStageTxMutation({
 *   variables: {
 *      encodedTx: // value for 'encodedTx'
 *   },
 * });
 */
export function useStageTxMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    StageTxMutation,
    StageTxMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    StageTxMutation,
    StageTxMutationVariables
  >(StageTxDocument, baseOptions);
}
export type StageTxMutationHookResult = ReturnType<typeof useStageTxMutation>;
export type StageTxMutationResult =
  ApolloReactCommon.MutationResult<StageTxMutation>;
export type StageTxMutationOptions = ApolloReactCommon.BaseMutationOptions<
  StageTxMutation,
  StageTxMutationVariables
>;
export const StageTxV2Document = gql`
  mutation StageTxV2($encodedTx: String!) {
    stageTxV2(payload: $encodedTx)
  }
`;
export type StageTxV2MutationFn = ApolloReactCommon.MutationFunction<
  StageTxV2Mutation,
  StageTxV2MutationVariables
>;

/**
 * __useStageTxV2Mutation__
 *
 * To run a mutation, you first call `useStageTxV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStageTxV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stageTxV2Mutation, { data, loading, error }] = useStageTxV2Mutation({
 *   variables: {
 *      encodedTx: // value for 'encodedTx'
 *   },
 * });
 */
export function useStageTxV2Mutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    StageTxV2Mutation,
    StageTxV2MutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    StageTxV2Mutation,
    StageTxV2MutationVariables
  >(StageTxV2Document, baseOptions);
}
export type StageTxV2MutationHookResult = ReturnType<
  typeof useStageTxV2Mutation
>;
export type StageTxV2MutationResult =
  ApolloReactCommon.MutationResult<StageTxV2Mutation>;
export type StageTxV2MutationOptions = ApolloReactCommon.BaseMutationOptions<
  StageTxV2Mutation,
  StageTxV2MutationVariables
>;
export const PreloadEndedDocument = gql`
  query PreloadEnded {
    nodeStatus {
      preloadEnded
      tip {
        index
      }
      appProtocolVersion {
        version
        extra
        signer
        signature
      }
    }
    rpcInformation {
      totalCount
    }
  }
`;

/**
 * __usePreloadEndedQuery__
 *
 * To run a query within a React component, call `usePreloadEndedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreloadEndedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreloadEndedQuery({
 *   variables: {
 *   },
 * });
 */
export function usePreloadEndedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PreloadEndedQuery,
    PreloadEndedQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    PreloadEndedQuery,
    PreloadEndedQueryVariables
  >(PreloadEndedDocument, baseOptions);
}
export function usePreloadEndedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PreloadEndedQuery,
    PreloadEndedQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    PreloadEndedQuery,
    PreloadEndedQueryVariables
  >(PreloadEndedDocument, baseOptions);
}
export type PreloadEndedQueryHookResult = ReturnType<
  typeof usePreloadEndedQuery
>;
export type PreloadEndedLazyQueryHookResult = ReturnType<
  typeof usePreloadEndedLazyQuery
>;
export type PreloadEndedQueryResult = ApolloReactCommon.QueryResult<
  PreloadEndedQuery,
  PreloadEndedQueryVariables
>;
export const BalanceByAgentDocument = gql`
  subscription BalanceByAgent($address: Address!) {
    balanceByAgent(address: $address)
  }
`;

/**
 * __useBalanceByAgentSubscription__
 *
 * To run a query within a React component, call `useBalanceByAgentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBalanceByAgentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalanceByAgentSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useBalanceByAgentSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    BalanceByAgentSubscription,
    BalanceByAgentSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    BalanceByAgentSubscription,
    BalanceByAgentSubscriptionVariables
  >(BalanceByAgentDocument, baseOptions);
}
export type BalanceByAgentSubscriptionHookResult = ReturnType<
  typeof useBalanceByAgentSubscription
>;
export type BalanceByAgentSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<BalanceByAgentSubscription>;
export const TipDocument = gql`
  subscription Tip {
    tipChanged {
      index
    }
  }
`;

/**
 * __useTipSubscription__
 *
 * To run a query within a React component, call `useTipSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTipSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTipSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTipSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    TipSubscription,
    TipSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    TipSubscription,
    TipSubscriptionVariables
  >(TipDocument, baseOptions);
}
export type TipSubscriptionHookResult = ReturnType<typeof useTipSubscription>;
export type TipSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<TipSubscription>;
export const UserStakingDocument = gql`
  query UserStaking($address: Address!) {
    stateQuery {
      stakeState(address: $address) {
        deposit
        startedBlockIndex
        receivedBlockIndex
        cancellableBlockIndex
        claimableBlockIndex
        stakeRewards {
          orderedList {
            level
            requiredGold
            rewards {
              itemId
              decimalRate
              type
              currencyTicker
            }
            bonusRewards {
              itemId
              count
            }
          }
        }
      }
    }
  }
`;

/**
 * __useUserStakingQuery__
 *
 * To run a query within a React component, call `useUserStakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStakingQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUserStakingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UserStakingQuery,
    UserStakingQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<UserStakingQuery, UserStakingQueryVariables>(
    UserStakingDocument,
    baseOptions,
  );
}
export function useUserStakingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserStakingQuery,
    UserStakingQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    UserStakingQuery,
    UserStakingQueryVariables
  >(UserStakingDocument, baseOptions);
}
export type UserStakingQueryHookResult = ReturnType<typeof useUserStakingQuery>;
export type UserStakingLazyQueryHookResult = ReturnType<
  typeof useUserStakingLazyQuery
>;
export type UserStakingQueryResult = ApolloReactCommon.QueryResult<
  UserStakingQuery,
  UserStakingQueryVariables
>;
export const LatestStakingSheetDocument = gql`
  query LatestStakingSheet {
    stateQuery {
      latestStakeRewards {
        orderedList {
          level
          requiredGold
          rewards {
            itemId
            decimalRate
            type
            currencyTicker
          }
          bonusRewards {
            itemId
            count
          }
        }
      }
    }
  }
`;

/**
 * __useLatestStakingSheetQuery__
 *
 * To run a query within a React component, call `useLatestStakingSheetQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestStakingSheetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestStakingSheetQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestStakingSheetQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LatestStakingSheetQuery,
    LatestStakingSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    LatestStakingSheetQuery,
    LatestStakingSheetQueryVariables
  >(LatestStakingSheetDocument, baseOptions);
}
export function useLatestStakingSheetLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LatestStakingSheetQuery,
    LatestStakingSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    LatestStakingSheetQuery,
    LatestStakingSheetQueryVariables
  >(LatestStakingSheetDocument, baseOptions);
}
export type LatestStakingSheetQueryHookResult = ReturnType<
  typeof useLatestStakingSheetQuery
>;
export type LatestStakingSheetLazyQueryHookResult = ReturnType<
  typeof useLatestStakingSheetLazyQuery
>;
export type LatestStakingSheetQueryResult = ApolloReactCommon.QueryResult<
  LatestStakingSheetQuery,
  LatestStakingSheetQueryVariables
>;
export const StakingSheetDocument = gql`
  query StakingSheet {
    stateQuery {
      stakeRewards {
        orderedList {
          level
          requiredGold
          rewards {
            itemId
            decimalRate
            type
            currencyTicker
          }
          bonusRewards {
            itemId
            count
          }
        }
      }
    }
  }
`;

/**
 * __useStakingSheetQuery__
 *
 * To run a query within a React component, call `useStakingSheetQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakingSheetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakingSheetQuery({
 *   variables: {
 *   },
 * });
 */
export function useStakingSheetQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StakingSheetQuery,
    StakingSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    StakingSheetQuery,
    StakingSheetQueryVariables
  >(StakingSheetDocument, baseOptions);
}
export function useStakingSheetLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StakingSheetQuery,
    StakingSheetQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    StakingSheetQuery,
    StakingSheetQueryVariables
  >(StakingSheetDocument, baseOptions);
}
export type StakingSheetQueryHookResult = ReturnType<
  typeof useStakingSheetQuery
>;
export type StakingSheetLazyQueryHookResult = ReturnType<
  typeof useStakingSheetLazyQuery
>;
export type StakingSheetQueryResult = ApolloReactCommon.QueryResult<
  StakingSheetQuery,
  StakingSheetQueryVariables
>;
export const V1CollectionStateDocument = gql`
  query V1CollectionState($address: Address!) {
    stateQuery {
      monsterCollectionSheet {
        orderedList {
          level
          requiredGold
        }
      }
      monsterCollectionState(agentAddress: $address) {
        startedBlockIndex
        claimableBlockIndex
        level
      }
    }
  }
`;

/**
 * __useV1CollectionStateQuery__
 *
 * To run a query within a React component, call `useV1CollectionStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useV1CollectionStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV1CollectionStateQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useV1CollectionStateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    V1CollectionStateQuery,
    V1CollectionStateQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    V1CollectionStateQuery,
    V1CollectionStateQueryVariables
  >(V1CollectionStateDocument, baseOptions);
}
export function useV1CollectionStateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    V1CollectionStateQuery,
    V1CollectionStateQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    V1CollectionStateQuery,
    V1CollectionStateQueryVariables
  >(V1CollectionStateDocument, baseOptions);
}
export type V1CollectionStateQueryHookResult = ReturnType<
  typeof useV1CollectionStateQuery
>;
export type V1CollectionStateLazyQueryHookResult = ReturnType<
  typeof useV1CollectionStateLazyQuery
>;
export type V1CollectionStateQueryResult = ApolloReactCommon.QueryResult<
  V1CollectionStateQuery,
  V1CollectionStateQueryVariables
>;
export const GenesisHashDocument = gql`
  query GenesisHash {
    nodeStatus {
      genesis {
        hash
      }
    }
  }
`;

/**
 * __useGenesisHashQuery__
 *
 * To run a query within a React component, call `useGenesisHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenesisHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenesisHashQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenesisHashQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GenesisHashQuery,
    GenesisHashQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GenesisHashQuery, GenesisHashQueryVariables>(
    GenesisHashDocument,
    baseOptions,
  );
}
export function useGenesisHashLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GenesisHashQuery,
    GenesisHashQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GenesisHashQuery,
    GenesisHashQueryVariables
  >(GenesisHashDocument, baseOptions);
}
export type GenesisHashQueryHookResult = ReturnType<typeof useGenesisHashQuery>;
export type GenesisHashLazyQueryHookResult = ReturnType<
  typeof useGenesisHashLazyQuery
>;
export type GenesisHashQueryResult = ApolloReactCommon.QueryResult<
  GenesisHashQuery,
  GenesisHashQueryVariables
>;
export const StageTransactionDocument = gql`
  mutation stageTransaction($payload: String!) {
    stageTransaction(payload: $payload)
  }
`;
export type StageTransactionMutationFn = ApolloReactCommon.MutationFunction<
  StageTransactionMutation,
  StageTransactionMutationVariables
>;

/**
 * __useStageTransactionMutation__
 *
 * To run a mutation, you first call `useStageTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStageTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stageTransactionMutation, { data, loading, error }] = useStageTransactionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useStageTransactionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    StageTransactionMutation,
    StageTransactionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    StageTransactionMutation,
    StageTransactionMutationVariables
  >(StageTransactionDocument, baseOptions);
}
export type StageTransactionMutationHookResult = ReturnType<
  typeof useStageTransactionMutation
>;
export type StageTransactionMutationResult =
  ApolloReactCommon.MutationResult<StageTransactionMutation>;
export type StageTransactionMutationOptions =
  ApolloReactCommon.BaseMutationOptions<
    StageTransactionMutation,
    StageTransactionMutationVariables
  >;
export const TransferAssetDocument = gql`
  query transferAsset(
    $publicKey: String!
    $sender: Address!
    $recipient: Address!
    $amount: String!
    $memo: String
  ) {
    actionTxQuery(publicKey: $publicKey) {
      transferAsset(
        sender: $sender
        recipient: $recipient
        amount: $amount
        currency: NCG
        memo: $memo
      )
    }
  }
`;

/**
 * __useTransferAssetQuery__
 *
 * To run a query within a React component, call `useTransferAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransferAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransferAssetQuery({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      sender: // value for 'sender'
 *      recipient: // value for 'recipient'
 *      amount: // value for 'amount'
 *      memo: // value for 'memo'
 *   },
 * });
 */
export function useTransferAssetQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TransferAssetQuery,
    TransferAssetQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    TransferAssetQuery,
    TransferAssetQueryVariables
  >(TransferAssetDocument, baseOptions);
}
export function useTransferAssetLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TransferAssetQuery,
    TransferAssetQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    TransferAssetQuery,
    TransferAssetQueryVariables
  >(TransferAssetDocument, baseOptions);
}
export type TransferAssetQueryHookResult = ReturnType<
  typeof useTransferAssetQuery
>;
export type TransferAssetLazyQueryHookResult = ReturnType<
  typeof useTransferAssetLazyQuery
>;
export type TransferAssetQueryResult = ApolloReactCommon.QueryResult<
  TransferAssetQuery,
  TransferAssetQueryVariables
>;
export const StakeDocument = gql`
  query Stake($publicKey: String!, $amount: BigInt) {
    actionTxQuery(publicKey: $publicKey) {
      stake(amount: $amount)
    }
  }
`;

/**
 * __useStakeQuery__
 *
 * To run a query within a React component, call `useStakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakeQuery({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useStakeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StakeQuery,
    StakeQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<StakeQuery, StakeQueryVariables>(
    StakeDocument,
    baseOptions,
  );
}
export function useStakeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StakeQuery,
    StakeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<StakeQuery, StakeQueryVariables>(
    StakeDocument,
    baseOptions,
  );
}
export type StakeQueryHookResult = ReturnType<typeof useStakeQuery>;
export type StakeLazyQueryHookResult = ReturnType<typeof useStakeLazyQuery>;
export type StakeQueryResult = ApolloReactCommon.QueryResult<
  StakeQuery,
  StakeQueryVariables
>;
export const ClaimStakeRewardDocument = gql`
  query ClaimStakeReward($publicKey: String!, $avatarAddress: Address) {
    actionTxQuery(publicKey: $publicKey) {
      claimStakeReward(avatarAddress: $avatarAddress)
    }
  }
`;

/**
 * __useClaimStakeRewardQuery__
 *
 * To run a query within a React component, call `useClaimStakeRewardQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimStakeRewardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimStakeRewardQuery({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      avatarAddress: // value for 'avatarAddress'
 *   },
 * });
 */
export function useClaimStakeRewardQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ClaimStakeRewardQuery,
    ClaimStakeRewardQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ClaimStakeRewardQuery,
    ClaimStakeRewardQueryVariables
  >(ClaimStakeRewardDocument, baseOptions);
}
export function useClaimStakeRewardLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ClaimStakeRewardQuery,
    ClaimStakeRewardQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ClaimStakeRewardQuery,
    ClaimStakeRewardQueryVariables
  >(ClaimStakeRewardDocument, baseOptions);
}
export type ClaimStakeRewardQueryHookResult = ReturnType<
  typeof useClaimStakeRewardQuery
>;
export type ClaimStakeRewardLazyQueryHookResult = ReturnType<
  typeof useClaimStakeRewardLazyQuery
>;
export type ClaimStakeRewardQueryResult = ApolloReactCommon.QueryResult<
  ClaimStakeRewardQuery,
  ClaimStakeRewardQueryVariables
>;
export const MigrateMonsterCollectionDocument = gql`
  query MigrateMonsterCollection($publicKey: String!, $avatarAddress: Address) {
    actionTxQuery(publicKey: $publicKey) {
      migrateMonsterCollection(avatarAddress: $avatarAddress)
    }
  }
`;

/**
 * __useMigrateMonsterCollectionQuery__
 *
 * To run a query within a React component, call `useMigrateMonsterCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMigrateMonsterCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMigrateMonsterCollectionQuery({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      avatarAddress: // value for 'avatarAddress'
 *   },
 * });
 */
export function useMigrateMonsterCollectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MigrateMonsterCollectionQuery,
    MigrateMonsterCollectionQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    MigrateMonsterCollectionQuery,
    MigrateMonsterCollectionQueryVariables
  >(MigrateMonsterCollectionDocument, baseOptions);
}
export function useMigrateMonsterCollectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MigrateMonsterCollectionQuery,
    MigrateMonsterCollectionQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    MigrateMonsterCollectionQuery,
    MigrateMonsterCollectionQueryVariables
  >(MigrateMonsterCollectionDocument, baseOptions);
}
export type MigrateMonsterCollectionQueryHookResult = ReturnType<
  typeof useMigrateMonsterCollectionQuery
>;
export type MigrateMonsterCollectionLazyQueryHookResult = ReturnType<
  typeof useMigrateMonsterCollectionLazyQuery
>;
export type MigrateMonsterCollectionQueryResult = ApolloReactCommon.QueryResult<
  MigrateMonsterCollectionQuery,
  MigrateMonsterCollectionQueryVariables
>;
export const CheckContractedDocument = gql`
  query CheckContracted($agentAddress: Address!) {
    stateQuery {
      pledge(agentAddress: $agentAddress) {
        approved
        patronAddress
      }
    }
  }
`;

/**
 * __useCheckContractedQuery__
 *
 * To run a query within a React component, call `useCheckContractedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckContractedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckContractedQuery({
 *   variables: {
 *      agentAddress: // value for 'agentAddress'
 *   },
 * });
 */
export function useCheckContractedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CheckContractedQuery,
    CheckContractedQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CheckContractedQuery,
    CheckContractedQueryVariables
  >(CheckContractedDocument, baseOptions);
}
export function useCheckContractedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CheckContractedQuery,
    CheckContractedQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CheckContractedQuery,
    CheckContractedQueryVariables
  >(CheckContractedDocument, baseOptions);
}
export type CheckContractedQueryHookResult = ReturnType<
  typeof useCheckContractedQuery
>;
export type CheckContractedLazyQueryHookResult = ReturnType<
  typeof useCheckContractedLazyQuery
>;
export type CheckContractedQueryResult = ApolloReactCommon.QueryResult<
  CheckContractedQuery,
  CheckContractedQueryVariables
>;
export const ApprovePledgeDocument = gql`
  query approvePledge($publicKey: String!, $patronAddress: Address!) {
    actionTxQuery(publicKey: $publicKey) {
      approvePledge(patronAddress: $patronAddress)
    }
  }
`;

/**
 * __useApprovePledgeQuery__
 *
 * To run a query within a React component, call `useApprovePledgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useApprovePledgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApprovePledgeQuery({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      patronAddress: // value for 'patronAddress'
 *   },
 * });
 */
export function useApprovePledgeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ApprovePledgeQuery,
    ApprovePledgeQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ApprovePledgeQuery,
    ApprovePledgeQueryVariables
  >(ApprovePledgeDocument, baseOptions);
}
export function useApprovePledgeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ApprovePledgeQuery,
    ApprovePledgeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ApprovePledgeQuery,
    ApprovePledgeQueryVariables
  >(ApprovePledgeDocument, baseOptions);
}
export type ApprovePledgeQueryHookResult = ReturnType<
  typeof useApprovePledgeQuery
>;
export type ApprovePledgeLazyQueryHookResult = ReturnType<
  typeof useApprovePledgeLazyQuery
>;
export type ApprovePledgeQueryResult = ApolloReactCommon.QueryResult<
  ApprovePledgeQuery,
  ApprovePledgeQueryVariables
>;
export const CheckPatchTableDocument = gql`
  subscription CheckPatchTable {
    tx(actionType: "patch_table_sheet") {
      txResult {
        txStatus
      }
    }
  }
`;

/**
 * __useCheckPatchTableSubscription__
 *
 * To run a query within a React component, call `useCheckPatchTableSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCheckPatchTableSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPatchTableSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCheckPatchTableSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    CheckPatchTableSubscription,
    CheckPatchTableSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    CheckPatchTableSubscription,
    CheckPatchTableSubscriptionVariables
  >(CheckPatchTableDocument, baseOptions);
}
export type CheckPatchTableSubscriptionHookResult = ReturnType<
  typeof useCheckPatchTableSubscription
>;
export type CheckPatchTableSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<CheckPatchTableSubscription>;
