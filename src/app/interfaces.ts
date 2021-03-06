export interface BookProfile {
  id: string;
  title: string;
  category: string;
  description: string;
  tradingPreferenceList: string | null;
  imagePath: string;
  userId: string;
  username: string;
  location: string;
}

export interface BookProfileDTO {
  _id: string;
  id: string;
  title: string;
  category: string;
  description: string;
  tradingPreferenceList: string | null;
  imagePath: string;
  userId: string;
  username: string;
  location: string;
}
