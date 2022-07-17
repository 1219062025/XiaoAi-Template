type Award = {
  id: number;
  gid: number;
  bid: number;
  name: string;
  img: string;
  day: number;
  type: number;
  price: number;
  bigGift: number;
  awardCount: number;
};

type VptItem = {
  score: number;
  awards: Award[];
};

export interface VptListModel {
  plan: string;
  vptList: VptItem[];
}
